import React, { Component } from "react";
import { TopicWrapper, TopicItem } from "../style";
import { connect } from "react-redux";

class Topic extends Component {
  render() {
    const { list } = this.props;
    return (
      <TopicWrapper>
        {list.map((item) => {
          return (
            //   return的是<TopicItem>一个整体，一起return
            <TopicItem key={item.get("id")}>
              <img className="topic-pic" alt="" src={item.get("imgURL")}></img>
              {item.get("text")}
            </TopicItem>
          );
        })}
      </TopicWrapper>
    );
  }
}

//只需要从store中获取数据，无action，只需定义第一个参数
const mapStateToProps = (state) => {
  return {
    // list: state.get("home").get("topicList"),
    list: state.getIn(["home", "topicList"]), //注意immutable对象的写法：getIn里要加[],而get只有一个参数！
  };
};

export default connect(mapStateToProps, null)(Topic); //是Topic组件与Home的store相联系
