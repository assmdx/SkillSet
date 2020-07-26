# 易画图

## 介绍

易画图是一款思维导图软件。微信小程序中搜索 `易画图`即可找到。

## 背景

初衷是想做一个在手机上简单易用的思维导图软件，目前已经有类似的软件了，但是还是不要半途而废，把它做好。

## 技术

- 小程序开发框架[wepy](https://wepyjs.github.io/wepy-docs/2.x/)
- 画图的库[d3-flextree](https://github.com/klortho/d3-flextree)

## TODO

- [x] 小程序更名 `MySkills` => `易画图`
- [x] 验证 d3-flextree 的可用性
- [ ] 树的展示要美化
  - [x] cavas 的宽高的设计
  - [x] 线条穿过了文字
  - [ ] 线条与文字底部重合
  - [ ] 配色太丑
  - [ ] 节点概念不明显
- [ ] 新增，编辑，删除按钮的交互要精简
- [ ] 分享微信，朋友圈
- [ ] 使用 taro typescript 重构
