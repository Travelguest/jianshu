# jianshu

React学习：实现简书网站

---

## 难点总结

1.React 是面向数据编程，最难的地方在于 reducer 中的数据（defaultState）应该怎样被设计？

2.若想改变 React 中数据，需遵循 redux 中的单向数据流的形式：先派发 action，给 store，store 再给 reducer,reducer 再返回一个新的数据给 store，store 再去变更自己的内容，当数据发生变更，页面也跟着自动变更。
