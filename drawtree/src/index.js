let drawtree = (treeNode) => {
    //验证数据格式
    let validate = (treeNode) => {
        let isArray = (o) => {
            return Object.prototype.toString.call(o)=='[object Array]';
        }
        if(Object.keys(treeNode).indexOf("w") < 0) {
            throw new Error('tree node parameter must containes w!')
            return
        }
        if(typeof treeNode["w"] !== 'number') {
            throw new Error('tree node parameter w must be number!')
            return
        }
        if(Object.keys(treeNode).indexOf("h") < 0) {
            throw new Error('tree node parameter must containes h!')
            return
        }
        if(typeof treeNode["h"] !== 'number') {
            throw new Error('tree node parameter h must be number!')
            return
        }
        if(treeNode["w"] < 0 || treeNode["h"] < 0) {
            throw new Error('tree node parameter w and h cannot less than 0!')
            return
        }
        if(Object.keys(treeNode).indexOf("c") < 0) {
            throw new Error('tree node parameter must containes children nodes array c!')
            return
        }
        if(!isArray(treeNode["c"])) {
            throw new Error('tree node parameter c must be array!')
            return
        }
        for(let i = 0; i< treeNode.c.length;i++) {
            try {
                validate(treeNode.c[i])
            } catch(error) {
                throw error
                return
            }
        }
    }
    //初始化tree
    let inittree = (treeNode,parentBottom) =>{
        treeNode["x"]  = treeNode["prelim"] =
            treeNode["mod"] = treeNode["shift"] =
                treeNode["change"] = treeNode["msel"]
                    = treeNode["mser"] = 0.0
        treeNode["el"] = treeNode["er"] = treeNode["tl"] = treeNode["tr"] = {}
        treeNode["cs"] = treeNode.c.length
        treeNode["y"] = parentBottom
        for(let i = 0 ;i< treeNode.c.length ;i++) {
            inittree(treeNode.c[i],treeNode["y"] + treeNode.h)
        }
    }
    let layout = (tree) => {
        let ObjectisNull = (obj) => (obj === undefined || obj === null || Object.keys(obj).length === 0)
        let firstWalk = (t) => {
            let setExtremes = (t) => {
                if(t.cs == 0){
                    t.el = t
                    t.er = t
                    t.msel = t.mser = 0
                } else {
                    t.el = t.c[0].el
                    t.msel = t.c[0].msel
                    t.er = t.c[t.cs-1].er
                    t.mser = t.c[t.cs-1].mser
                }
            }
            class IYL {
                constructor(lowY,index,ih) {
                    this.lowY = lowY
                    this.index = index
                    this.nxt = ih
                }
                static updateIYL(minY,i,ih) {
                    while(!ObjectisNull(ih) && minY >= ih.lowY) {
                        ih = ih.nxt
                    }
                    return new IYL(minY,i,ih)
                }
            }
            let bottom = (tree) => (tree.y + tree.h)
            let seperate = (t,i,ih) => {
                let moveSubtree = (t,i,si,dist) => {
                    let distributeExtra = (t,i,si,dist) => {
                        if(si != i-1){
                            let nr = i - si
                            t.c[si +1].shift+=dist/nr
                            t.c[i].shift-=dist/nr
                            t.c[i].change-=dist - dist/nr
                        }
                    }
                    t.c[i].mod+=dist
                    t.c[i].msel+=dist
                    t.c[i].mser+=dist
                    distributeExtra(t,i,si,dist)
                }
                let sr = t.c[i-1]
                let mssr = sr.mod
                let cl = t.c[i]
                let mscl = cl.mod
                while(!ObjectisNull(sr) && !ObjectisNull(cl)) {
                    if( bottom(sr) > ih.lowY) {
                        ih = ih.nxt
                    }
                    let dist =  (mssr + sr.prelim + sr.w) - (mscl + cl.prelim)
                    if( dist > 0) {
                        mscl+=dist
                        moveSubtree(t,i,ih.index,dist)
                    }
                    let sy = bottom(sr)
                    let cy = bottom(cl)
                    let nextRightContour = (t) => (t.cs==0 ? t.tr : t.c[t.cs-1])
                    if(sy <= cy) {
                        sr = nextRightContour(sr)
                        if(!ObjectisNull(sr)){
                            mssr+=sr.mod
                        }
                    }
                    let nextLeftContour = (t) => (t.cs==0 ? t.tl : t.c[0])
                    if(sy >= cy){
                        cl = nextLeftContour(cl)
                        if(!ObjectisNull(cl)) {
                            mscl+=cl.mod
                        }
                    }
                }
                let setLeftThread = (t,i,cl, modsumcl) => {
                    let li = t.c[0].el
                    li.tl = cl
                    let diff = (modsumcl - cl.mod) - t.c[0].msel
                    li.mod += diff
                    li.prelim-=diff
                    t.c[0].el = t.c[i].el
                    t.c[0].msel = t.c[i].msel
                }
                let setRightThread = (t , i ,  sr , modsumsr) => {
                    let ri = t.c[i].er
                    ri.tr = sr
                    let diff = (modsumsr - sr.mod) - t.c[i].mser
                    ri.mod += diff
                    ri.prelim -= diff
                    t.c[i].er = t.c[i-1].er
                    t.c[i].mser = t.c[i-1].mser
                }
                if(ObjectisNull(sr) && !ObjectisNull(cl) ) setLeftThread(t,i,cl, mscl)
                else if( !ObjectisNull(sr) && ObjectisNull(cl)) setRightThread(t,i,sr,mssr)
            }
            let positionRoot = (t) => {
                t.prelim = (t.c[0].prelim + t.c[0].mod + t.c[t.cs-1].mod +
                    t.c[t.cs-1].prelim +  t.c[t.cs-1].w)/2 - t.w/2
            }
            if(t.cs === 0) {
                setExtremes(t)
                return
            }
            firstWalk(t.c[0])
            let ih = IYL.updateIYL(bottom(t.c[0].el),0,undefined)
            for(let i = 1 ;i < t.cs ;i++) {
                firstWalk(t.c[i])
                let minY = bottom(t.c[i].er)
                seperate(t,i,ih)
                ih = IYL.updateIYL(minY,i,ih)
            }
            positionRoot(t)
            setExtremes(t)
        }
        let secondWalk = (t,modsum) => {
            modsum += t.mod
            t.x = t.prelim + modsum
            let addChildSpacing = (t) => {
                let d = 0
                let modsumdelta = 0
                for(let i = 0 ; i < t.cs ; i++){
                    d += t.c[i].shift
                    modsumdelta += d + t.c[i].change
                    t.c[i].mod+=modsumdelta
                }
            }
            addChildSpacing(t)
            for(let i = 0 ; i < t.cs ; i++) {
                secondWalk(t.c[i],modsum)
            }
        }
        firstWalk(tree)
        secondWalk(tree,0)
    }
    try {
        validate(treeNode)
    } catch(error) {
        throw error
        return
    }
    inittree(treeNode,0.0)
    layout(treeNode)
}

exports.drawtree = drawtree