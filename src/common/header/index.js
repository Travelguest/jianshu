import React, { Component } from "react";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList,
  NavSearchWrapper,
} from "./style";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { actionCreator } from "./store";
//  HeaderWrapper是带样式的div标签

class Header extends Component {
  //本组件中的方法，用this.方法名调用
  showSearchInfoList() {
    if (this.props.focus) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch>换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {/* immutable数组也有map方法 */}
            {this.props.list.map((item) => {
              // 箭头函数别忘记return !否则无效
              return <SearchInfoItem key={item}>{item}</SearchInfoItem>;
            })}
          </SearchInfoList>
        </SearchInfo>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          {/* 增加的类名active用空格分隔！ */}
          <NavItem className="left active">
            <span className="iconfont">&#xe602;</span>
            首页
          </NavItem>
          <NavItem className="left">
            <span className="iconfont">&#xe608;</span>
            下载康康
          </NavItem>
          <NavItem className="right">来不及解释了</NavItem>
          <NavItem className="right">
            <span className="iconfont">&#xe636;</span>
          </NavItem>
          <NavSearchWrapper>
            <CSSTransition
              in={this.props.focus}
              timeout={300}
              classNames="slide"
            >
              <NavSearch
                className={this.props.focus ? "focused" : ""}
                onFocus={this.props.handleInputFocus}
                onBlur={this.props.handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            {/* 动画只用于NavSearch中，并不包括iconfont！ */}
            <span
              className={this.props.focus ? "focused iconfont" : "iconfont"}
            >
              &#xe783;
            </span>
            {this.showSearchInfoList()}
          </NavSearchWrapper>
          <Addition>
            {/* 在前的先渲染，先显示在右边 */}
            <Button className="writing">
              <span className="iconfont">&#xe708;</span>
              写文章
            </Button>
            <Button className="register">注册</Button>
          </Addition>
        </Nav>
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  //这里的state是Store的state！
  return {
    focus: state.getIn(["header", "focus"]), //另一种写法:去到header中找到focus
    // focus: state.get("header").get("focus"),
    //此时state是JS对象，想利用redux-immutable转化成immutable对象来统一操作
    //focus: state.header.get("focus"), //store的state传递到了该组件的props

    list: state.getIn(["header", "list"]),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreator.searchList());
      dispatch(actionCreator.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreator.searchBlur());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
