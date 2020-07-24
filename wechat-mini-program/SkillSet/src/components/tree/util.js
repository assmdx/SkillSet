import {
  flextree
} from 'd3-flextree';
import cloneDeep from 'lodash.clonedeep';

const transformDataForD3FlexibleTree = (skillTreeData) => {
  const tree = cloneDeep(skillTreeData);
  console.log(tree);
  for (let i = 0; i < tree.length; i++) {
    const {
      father,
      name
    } = tree[i];
    tree[i].size = [name.length, 1];
    tree[i].children = tree[i].children || [];
    tree[i].name = name;
    if (father >= 0) {
      tree[father].children = tree[father].children || [];
      tree[father].children.push(tree[i]);
    }
  }
  const layout = flextree();
  const _tree = layout.hierarchy(tree[0]);
  layout(_tree);
  return _tree;
};

const rotateTreeCoordinate = (transformedTree) => {
  transformedTree.each((node) => {
    const tmpX = node.x;
    const tmpY = node.y;
    node.x = tmpY;
    node.y = -tmpX;
  });
  return transformedTree;
};

const adjustTreePosition = (tree, fontSize = 20, percent = 3) => {
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;
  tree.each((node, i) => {
    minX = node.x < minX ? node.x : minX;
    minY = node.y < minY ? node.y : minY;
    maxX = node.x > maxX ? node.x : maxX;
    maxY = node.y > maxY ? node.y : maxY;
  });

  tree.each((node, i) => {
    node.x = (node.x + (1 - minX)) * fontSize * percent;
    node.y = (node.y + (1 - minY)) * fontSize * percent;
  });

  const canvasWidth = (maxX - minX) * fontSize * percent;
  const canvasHeight = (maxY - minY) * fontSize * percent;

  console.log('adjustTreePosition', tree, canvasWidth, canvasHeight);
  return {
    treePos: tree,
    canvasWidth,
    canvasHeight
  };
}

export const calTreePos = (TreeData, fontSize, percent) => {
  const transformedTree = transformDataForD3FlexibleTree(TreeData);
  const rotateTree = rotateTreeCoordinate(transformedTree);
  return adjustTreePosition(rotateTree, fontSize, percent);
};
