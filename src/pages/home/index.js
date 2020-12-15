import React, { Component } from "react";
import Topic from "./components/Topic";
import Writing from "./components/Writing";
import Recommend from "./components/Recommend";
import List from "./components/List";
import { HomeWrapper, HomeLeft, HomeRight } from "./style";

class Home extends Component {
  render() {
    return (
      <div>
        <HomeWrapper>
          <HomeLeft>
            <img
              className="banner-img"
              src="https://img.dpm.org.cn/Uploads/Picture/2020/08/05/s5f2a7535e4f17.jpg"
            ></img>
            <Topic />
            <List />
          </HomeLeft>
          <HomeRight>
            <Recommend />
            <Writing />
          </HomeRight>
        </HomeWrapper>
      </div>
    );
  }
}

export default Home;
