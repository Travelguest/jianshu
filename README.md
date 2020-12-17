# jianshu

用 React 实现简书网站

——by Dai Yong

---

## 开发日志

【12.7】学完廖雪峰 git 教程,在该项目中实践 git

【12.8】引入 immutable.js 来防止改变 state 而不自知

【12.14】实现 Header 中“换一批”功能

【12.15】实现 Topic 样式以及 Home 的 store 建立，同时 Topic 能够从 Home 的 store 来获得数据

【12.16】实现左侧 List

【12.17】实现右侧 Recommend 以及二维码

---

## 难点总结

1.React 是面向数据编程，最难的地方在于 reducer 中的数据（defaultState）应该怎样被设计？

2.若想改变 React 中数据，需遵循 redux 中的单向数据流的形式：先派发 action，给 store，store 再给 reducer,reducer 再返回一个新的数据给 store，store 再去变更自己的内容，当数据发生变更，页面也跟着自动变更。
