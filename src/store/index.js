import { createStore, compose, applyMiddleware } from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk"; //中间件thunk是action和dispatch的中间件

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
