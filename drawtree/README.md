# drawtree

drawtree 是一个画树的工具，它通过计算树节点最终的位置来解决这个问题.

## 使用方法
```$xslt
import {drawtree} from 'drawtree'
//或者使用 var {drawtree} = require("drawtree")
//首先你应该提供如下的数据结构
let treeNodeExample = {
        w:8.5, // w 是树节点的宽度
        h:3.0, // h 是树节点的高度
        c:[    // c 是树节点的子节点的数组
            {
                w:7.0,
                h:6.5,
                c:[
                    {
                        w:4.5,
                        h:4.0,
                        c:[]
                    }
                ],
            },
            {
                w:2.0,
                h:5.0,
                c:[
                    {
                        w:3.5,
                        h:4.0,
                        c:[]
                    }
                ]
            },
            {
                w:8.5,
                h:1.5,
                c:[]
            }
        ],
    }
   
   drawtree(treeNodeExample)
   console.log(treeNodeExample) 
   // 此时treeNodeExample中已经包含树种所有节点最终的位置 x 和 y 了 
```