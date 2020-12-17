//************这是Home的store里的reducer,其数据存在这*************/
import { fromJS } from "immutable";
import * as constants from "./constants";
import challenge from "../../../statics/recommend/challenge.png";
import copyright from "../../../statics/recommend/copyright.png";
import member from "../../../statics/recommend/member.png";
import serial from "../../../statics/recommend/serial.png";
import hejiong from "../../../statics/list/hejiong.webp";
import zheda from "../../../statics/list/zheda.webp";
import huge1 from "../../../statics/list/huge1.webp";
import huge2 from "../../../statics/list/huge2.webp";

const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      text: "社会热点",
      imgURL:
        "https://img.dpm.org.cn/Uploads/Picture/2020/11/30/s5fc4a0de7a53b.jpg",
    },
    {
      id: 2,
      text: "美景",
      imgURL:
        "https://img.dpm.org.cn/Uploads/Picture/2020/11/30/s5fc495a1c77e3.jpg",
    },
  ],
  articleList: [
    {
      id: 1,
      title: "赴耶鲁读研的浙大女生",
      text:
        "即将赴耶鲁大学读硕士的她，在国际顶尖会议上做过学术报告，在田野里为生态保护流过汗水；是前浙大武术队队员，也是校园摇滚乐队主唱。她说：“我要用有限的时间体味生命的无限性。”",
      imgURL: zheda,
    },
    {
      id: 2,
      title: "胡歌12年后首谈车祸：既然活下来了，就不能白白活着",
      text:
        "生存还是毁灭，这是一个值得思考的问题。默默忍受命运暴虐的毒箭，或是挺身反抗人世无涯的苦难，通过斗争把它们扫清，这两种行为哪种更高贵？死了，睡着了，什么都完了……",
      imgURL: huge1,
    },
    {
      id: 3,
      title: "37岁胡歌的人生观让我明白：成人世界里，请停止低层次的忙碌",
      text:
        "说起胡歌，他身上似乎总有一种神奇的魅力，或因为他谦逊有礼，或因为他温润如云，但我想更为重要的，是因为他的人生观。胡歌曾在采访中说过一件小事。……",
      imgURL: huge2,
    },
    {
      id: 4,
      title: "何炅曝光疫情宅家日常：我为什么劝你一定要多读书？",
      text:
        "知乎上有个问题：有哪些事情你坚持了3年以上？网友们纷纷留言：“听CNN和BBC，坚持了6年以上”；“每天练字20分钟，练了4年”；“每天出门擦防晒霜，坚持了7年”；",
      imgURL: hejiong,
    },
  ],
  recommendList: [
    {
      id: 1,
      imgURL: challenge,
    },
    {
      id: 2,
      imgURL: member,
    },
    {
      id: 3,
      imgURL: serial,
    },
    {
      id: 4,
      imgURL: copyright,
    },
  ],
  focus: false,
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.ENTER_QRCODE:
      return state.set("focus", true); //别忘记return
    case constants.LEAVE_QRCODE:
      return state.set("focus", false);
    default:
      return state;
  }
};
