import * as constants from "./constants";

const defaultState = {
  focus: false,
};
//reducer中是导出一个纯函数：固定输入就有固定输出，没有副作用

export default (state = defaultState, action) => {
  if (action.type === constants.SEARCH_FOCUS) {
    return {
      focus: true,
    };
  }
  if (action.type === constants.SEARCH_BLUR) {
    return {
      focus: false,
    };
  }
  return state;
};
