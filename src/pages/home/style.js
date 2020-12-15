import styled from "styled-components";

// 由于内层元素是浮动的，外层元素要加上overflow，
// 触发它的BFC,使得它的高度可以自适应内部的高度
export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`;

export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  width: 640px;
  .banner-img {
    width: 640px;
    height: 360px;
  }
`;

export const HomeRight = styled.div`
  float: right;
  width: 280px;
  padding-top: 30px;
`;

export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  overflow: hidden;
  margin-left: -18px; //外层整体左移18px,内部左边间距18px,能使得各块之间保持相同间距
`;

export const TopicItem = styled.div`
  height: 32px;
  float: left;
  margin-left: 18px;
  margin-bottom: 18px;
  background: #f7f7f7;
  line-height: 32px;
  font-size: 14px;
  border-radius: 4px;
  padding-right: 10px;
  border: 1px solid #dcdcdc;
  color: #000;
  .topic-pic {
    display: block;
    float: left; //让图片浮动才不会影响这里面的文字
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`;
