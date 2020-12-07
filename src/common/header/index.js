import React, { Component } from "react";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  NavSearchWrapper,
} from "./style";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { actionCreator } from "./store";
//  HeaderWrapper是带样式的div标签

const Header = (props) => {
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
          <CSSTransition in={props.focus} timeout={300} classNames="slide">
            <NavSearch
              className={props.focus ? "focused" : ""}
              onFocus={props.handleInputFocus}
              onBlur={props.handleInputBlur}
            ></NavSearch>
          </CSSTransition>
          {/* 动画只用于NavSearch中，并不包括iconfont！ */}
          <span className={props.focus ? "focused iconfont" : "iconfont"}>
            &#xe783;
          </span>
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
};

const mapStateToProps = (state) => {
  //这里的state是Store的state！
  return {
    focus: state.header.focus, //store的state传递到了该组件的props
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreator.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreator.searchBlur());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
