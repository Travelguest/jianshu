import * as constants from "./constants";
import { fromJS } from "immutable";

//从immutable库导出immutable对象————防止无意改变state而不自知

const defaultState = fromJS({
  //这里fromJS生成的list也是immutable对象，之后传递的list也要求是immutable对象，统一！
  focus: false,
  list: [],
  mouseIn: false,
  page: 1,
  totalPages: 1,
});
//reducer中是导出一个纯函数：固定输入就有固定输出，没有副作用

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.SEARCH_FOCUS:
      return state.set("focus", true);
    case constants.SEARCH_BLUR:
      return state.set("focus", false);
    case constants.CHANGE_LIST:
      return state
        .set("list", fromJS(action.data))
        .set("totalPages", action.totalPages);
    case constants.MOUSE_ENTER:
      return state.set("mouseIn", true);
    case constants.MOUSE_LEAVE:
      return state.set("mouseIn", false);
    case constants.CHANGE_PAGE:
      return state.set("page", action.page);
    default:
      return state;
  }

  // if (action.type === constants.SEARCH_FOCUS) {
  //   // immutable对象的set方法：会结合之前immutable对象的值和设置的值，返回一个全新的对象
  //   return state.set("focus", true);
  // }
  // if (action.type === constants.SEARCH_BLUR) {
  //   return state.set("focus", false);
  // }
  // if (action.type === constants.CHANGE_LIST) {
  //   return state.set("list", fromJS(action.data)); //list也得是immutable数组，不能是普通的数组
  // }
  // return state;
};
