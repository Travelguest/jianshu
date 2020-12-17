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
  border-bottom: 1px solid #dcdcdc;
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

export const ListItem = styled.div`
  padding: 15px 0 20px;
  margin-bottom: 15px;
  border-bottom: 1px solid #dcdcdc;
  overflow: hidden;
  .pig {
    display: block;
    width: 150px;
    height: 100px;
    float: right;
    border-radius: 4px;
  }
`;

export const ListInfo = styled.div`
  width: 458px;
  // height: 110px;
  float: left;
  .title {
    color: #2f2f2f;
    margin: 0 0 4px;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
  }
  .desc {
    margin: 0 0 4px;
    font-size: 13px;
    color: #9999b3;
    line-height: 24px;
  }
`;

export const ListMeta = styled.div`
  width: 458px;
  heigth: 20px;
  color: #b4b4b4;

  .iconfont {
    line-height: 20px;
    margin-right: 2px;
  }
  .text {
    margin-right: 10px;
    font-size: 12px;
    line-height: 20px;
    text-decoration: none;
  }
  .diamond {
    color: #ea6f5a;
  }
`;

export const RecommendItem = styled.div`
  margin-bottom: 0 0 6px;
  .pig {
    width: 280px;
    height: 50px;
  }
`;

export const QrCode = styled.a`
  cursor: pointer;
  display: block;
  height: 60px;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  width: 100%;
  padding: 10px 22px;
  margin-bottom: 30px;
  .qr_pig {
    vertical-align: middle;
    border: 0;
    box-sizing: border-box;
    width: 60px;
    height: 60px;
    opacity: 0.85;
  }
`;

export const QrCodeInfo = styled.div`
  display: inline-block; //关键在于此，转化为行内块才在同一行且可以margin-left生效
  vertical-align: middle; //垂直居中
  margin-left: 7px;
  width: 143px;
  height: 44px;

  .title {
    font-size: 16px;
    color: #333;
  }
  .description {
    margin-top: 4px;
    font-size: 13px;
    color: #999;
  }
`;

export const QrCodeDetail = styled.div`
  position: absolute;
  top: 127px;
  margin-left: 25px;
  background: #fff;
  height: 160px;
  width: 160px;
  padding: 10px;

  .pig {
    width: 160px;
    height: 160px;
    border: 0;
    transition: all 2s ease-in-out;
  }
`;
