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
    const {
      focus,
      list,
      page,
      totalPages,
      mouseIn,
      handleMouseEnter,
      handleMouseLeave,
      handleChangePage,
    } = this.props;
    const newList = list.toJS();
    const pageList = [];
    if (newList.length) {
      for (let i = (page - 1) * 10; i <= page * 10; i++) {
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        );
      }
    }
    if (focus || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={() => handleChangePage(page, totalPages)}
            >
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {/* immutable数组也有map方法 */}
            {/* {list.map((item) => {
              // 箭头函数别忘记return !否则无效
              return <SearchInfoItem key={item}>{item}</SearchInfoItem>;
            })} */}
            {pageList};
          </SearchInfoList>
        </SearchInfo>
      );
    } else {
      return null;
    }
  }

  render() {
    const { focus, handleInputFocus, handleInputBlur } = this.props;
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
            <CSSTransition in={focus} timeout={300} classNames="slide">
              <NavSearch
                className={focus ? "focused" : ""}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            {/* 动画只用于NavSearch中，并不包括iconfont！ */}
            <span className={focus ? "focused iconfont" : "iconfont"}>
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
    page: state.getIn(["header", "page"]),
    totalPages: state.getIn(["header", "totalPages"]),
    mouseIn: state.getIn(["header", "mouseIn"]),
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
    handleMouseEnter() {
      dispatch(actionCreator.mouseEnter());
    },

    handleMouseLeave() {
      dispatch(actionCreator.mouseLeave());
    },
    handleChangePage(page, totalPages) {
      if (page < totalPages) {
        dispatch(actionCreator.changePage(page + 1));
      } else {
        dispatch(actionCreator.changePage(1));
      }
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
