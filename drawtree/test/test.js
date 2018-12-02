const {drawtree} = require('../src/index')

let nr = 6
let tree = {
    w:10,
    h:12,
    c:[
        {
           w:10,
           h:6,
           c:[
               {
                   w:10,
                   h:8,
                   c:[]
               },
               {
                   w:10,
                   h:8,
                   c:[
                       {
                           w:10,
                           h:2,
                           c:[
                               {
                                   w:10,
                                   h:6,
                                   c:[]
                               }
                           ]
                       }
                   ]
               }
           ]
        },
        {
          w:10,
          h:10,
          c:[]
        },
    ]
}

let tree2 = {
    w:10,
    h:12,
    c:[
        {
            w:10,
            h:6,
            c:[
                {
                    w:10,
                    h:8,
                    c:[]
                }
            ]
        },
        {
            w:10,
            h:10,
            c:[]
        }
    ]
}
drawtree(tree2)
console.log(tree2)

