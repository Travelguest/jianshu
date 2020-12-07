import { combineReducers } from "redux";
import { reducer as headerReducer } from "../common/header/store"; //新建index.js可以缩短两层文件夹
//as是ES6语法：取别名
const reducer = combineReducers({
  header: headerReducer,
});

export default reducer;
