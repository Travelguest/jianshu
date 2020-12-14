import * as constants from "./constants";
//注意这里返回的花括号要加() ：返回JS对象，除非用了thunk，才可以返回函数
import axios from "axios";
// import { fromJS } from "immutable";

const changeList = (data) => ({
  type: constants.CHANGE_LIST,
  // data: fromJS(data), //传递的list:也要是immutable数组
  data, //在下一步转化为immutable数组也行
  totalPages: Math.ceil(data.length / 10),
});

export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS,
});

export const searchBlur = () => ({
  type: constants.SEARCH_BLUR,
});

export const mouseEnter = () => ({
  type: constants.MOUSE_ENTER,
});

export const mouseLeave = () => ({
  type: constants.MOUSE_LEAVE,
});

export const changePage = (page) => ({
  type: constants.CHANGE_PAGE,
  page,
});

export const searchList = () => {
  //异步获取数据拆分到actionCreator：返回函数需要用thunk
  return (dispatch) => {
    axios
      .get("api/headerList.json")
      .then((res) => {
        const data = res.data;
        dispatch(changeList(data.data)); //data中的data才是list应该存放的数据——可通过console.log(data)来调试
      })
      .catch(() => {
        console.log("error");
      });
  };
};
