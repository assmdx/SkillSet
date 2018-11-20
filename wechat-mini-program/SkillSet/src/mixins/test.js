import wepy from 'wepy'

export default class testMixin extends wepy.mixin {
  data = {
    skills:[
      {
        name:'skills',
        children:[1,2],
        floor:1,
        status:false, //false 代表折叠，隐藏状态
        img:"../images/skillCell_down.png"
      },
      {
        name:'react',
        children:[],
        floor:2,
        status:false, //false 代表折叠，隐藏状态
        img:"../images/skillCell_down.png"
      },
      {
        name:'vue',
        children:[3],
        floor:2,
        status:false, //false 代表折叠，隐藏状态
        img:"../images/skillCell_down.png"
      },
      {
        name:'wepy',
        children:[],
        floor:3,
        status:false, //false 代表折叠，隐藏状态
        img:"../images/skillCell_down.png"
      }
    ]
  }
}
