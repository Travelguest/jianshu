import React, { Component } from "react";
import { ListItem, ListInfo, ListMeta } from "../style";
import { connect } from "react-redux";

class List extends Component {
  render() {
    const { list } = this.props;
    return (
      <div>
        {list.map((item) => {
          return (
            <ListItem key={item.get("id")}>
              <img className="pig" alt="" src={item.get("imgURL")}></img>
              <ListInfo>
                <h3 className="title">{item.get("title")}</h3>
                <p className="desc">{item.get("text")}</p>
              </ListInfo>
              <ListMeta>
                <span className="text diamond">
                  <span className="iconfont">&#xe600;</span>
                  24.2
                </span>
                <a className="text" href="#">
                  臻选即刻
                </a>
                <a className="text" href="#">
                  <span className="iconfont">&#xe8b9;</span>
                  999+
                </a>
                <span className="text">
                  <span className="iconfont">&#xe656;</span>
                  999+
                </span>
              </ListMeta>
            </ListItem>
          );
        })}
      </div>
    );
  }
}

//箭头函数别忘了return
const mapStateToProps = (state) => {
  return {
    list: state.getIn(["home", "articleList"]),
  };
};

export default connect(mapStateToProps, null)(List);
