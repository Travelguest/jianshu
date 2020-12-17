import React, { Component } from "react";
import { RecommendItem, QrCode, QrCodeInfo, QrCodeDetail } from "../style";
import { connect } from "react-redux";
import QRcode from "../../../statics/recommend/QRcode.png";
import * as actionCreator from "../store/actionCreator";

class Recommend extends Component {
  showQrCode() {
    console.log("focus = " + this.props.focus);
    if (this.props.focus) {
      return (
        <QrCodeDetail>
          <img className="pig" src={QRcode}></img>
        </QrCodeDetail>
      );
    }
  }

  render() {
    const { list } = this.props;
    return (
      <div>
        {list.map((item) => {
          return (
            <RecommendItem key={item.get("id")}>
              <img className="pig" src={item.get("imgURL")}></img>
            </RecommendItem>
          );
        })}
        <QrCode
          onMouseEnter={this.props.handleEnterQrCode}
          onMouseLeave={this.props.handleLeaveQrCode}
        >
          {this.showQrCode()}
          <img className="qr_pig" src={QRcode}></img>
          <QrCodeInfo>
            <div className="title">下载简书手机APP</div>
            <div className="description">随时随地发现和创作内容</div>
          </QrCodeInfo>
        </QrCode>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.getIn(["home", "recommendList"]),
    focus: state.getIn(["home", "focus"]),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleEnterQrCode() {
      dispatch(actionCreator.enterQrcode());
    },
    handleLeaveQrCode() {
      dispatch(actionCreator.leaveQrcode());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Recommend);
