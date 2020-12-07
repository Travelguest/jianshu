import Header from "./common/header/index";
import { IconfontStyles } from "./statics/iconfont/iconfont";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <div>
      {/* 引入组件时要大写字母开头！ */}
      <IconfontStyles></IconfontStyles>
      {/* 将Store提供给Header组件使用 */}
      <Provider store={store}>
        <Header />
      </Provider>
    </div>
  );
}

export default App;
