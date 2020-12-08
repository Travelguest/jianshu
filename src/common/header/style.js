import styled from "styled-components";
import logoPic from "../../statics/logo.png";
export const HeaderWrapper = styled.div`
  width: 1440px;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
  position: relative;
  left: 550px;
  top: 0px;
`;

export const Logo = styled.a.attrs({
  href: "/",
})`
  // 定位Logo的位置
  // position: absolute;
  // top: 0;
  // left: 0;
  float: left;
  display: block; //别忘记把<a>转化为块状元素
  height: 56px;
  width: 100px;
  margin: 0 auto;
  background: url(${logoPic});
  background-size: contain; //contain:保持图像的纵横比并将图像缩放成将适合背景定位区域的最大大小。
`;

export const Nav = styled.div`
  height: 100%;
  width: 945px;
  margin: 0 auto;
  bottom: 5px;
`;

export const NavItem = styled.div`
  color: #333;
  line-height: 26px;
  padding: 15px;
  font-size: 17px;
  &.left {
    //&表示嵌套的意思，同属于一个标签<NavItem className = 'left'> 这样
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`;

export const NavSearchWrapper = styled.div`
  float: left;
  position: relative;

  .iconfont {
    //这里className = iconfont的标签是其子代，不能用&
    position: absolute; //absolute的定位是相对于离自己最近的设置了相对/绝对position的父元素
    right: 5px;
    bottom: 5px;
    line-height: 30px;
    text-align: center;
    width: 30px;
    border-radius: 15px;
    background: #eeeeee;
    &.focused {
      background: #777;
      color: #fff;
    }
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: "搁这搜索呢",
})`
  height: 38px;
  width: 178px;
  background: #eeeeee;
  font-size: 14px;
  padding: 0 40px 0 20px;
  color: #333;
  border-sizing: border-box; //让margin的增加在原定宽度内，不会使宽度变大
  margin-top: 9px;
  margin-left: 20px;
  border: none;
  outline: none;
  border-radius: 19px;
  ::placeholder {
    //伪元素
    color: #a0a0a0;
  }
  &.focused {
    width: 250px;
  }
  &.slide-enter {
    //因为是同级，需要加上&
    //动画用于NacSearch，加到其身上
    transition: all 0.3s ease-in-out; //注意动画的写法！！！
  }
  &.slice-enter-active {
    width: 250px;
  }
  &.slide-exit {
    transition: all 0.3s ease;
  }
  &.slide-exit-active {
    width: 178px;
  }
`;
export const SearchInfo = styled.div`
  position: absolute;
  top: 56px;
  left: 25px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
`;

export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  color: #787878;
  font-size: 15px;
`;

export const SearchInfoSwitch = styled.span`
  font-size: 14px;
  float: right;
`;
export const SearchInfoList = styled.div`
  overflow: hidden;
`;
export const SearchInfoItem = styled.a`
  float: left;
  display: block;
  padding: 0px 5px;
  margin-right: 10px;
  margin-bottom: 10px;
  line-height: 20px;
  font-size: 13px;
  color: #787878;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const Addition = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  heigth: 56px;
`;

export const Button = styled.button`
  cursor: pointer;
  float: right;
  line-height: 26px;
  padding: 6px 12px;
  margin-top: 8px;
  margin-right: 17px;
  border: 1px solid #ea6f5a;
  border-radius: 19px;
  font-size: 14px;
  outline: none;
  &.register {
    color: #ec6149;
    width: 80px;
  }
  &.writing {
    background: #ec6149;
    color: #fff;
    width: 100px;
  }
`;
