import wepy from 'wepy'

export default class testMixin extends wepy.mixin {
  data = {
    skills:[
      {
        name:'skills',
        floor:1,
        showEdit:"none",
        showAdd:"none"
      },
      {
        name:'react',
        floor:2,
        showEdit:"none",
        showAdd:"none"
      },
      {
        name:'vue',
        floor:2,
        showEdit:"none",
        showAdd:"none"
      },
      {
        name:'wepy',
        floor:3,
        showEdit:"none",
        showAdd:"none"
      }
    ]
  }
}
