import Header from "./common/header"; //没有写清楚，默认去index.js中找
import { IconfontStyles } from "./statics/iconfont/iconfont";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import store from "./store";
import Home from "./pages/home";
import Detail from "./pages/detail";

function App() {
  return (
    <div>
      {/* 引入组件时要大写字母开头！ */}
      <IconfontStyles></IconfontStyles>
      {/* Provider使得：内部组件都可以使用store */}
      <Provider store={store}>
        <Header />
        <BrowserRouter>
          {/* Route是路由规则 */}
          <Route path="/" exact component={Home}></Route>
          <Route path="/detail" exact component={Detail}></Route>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
