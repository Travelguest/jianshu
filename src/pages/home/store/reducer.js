//************这是Home的store里的reducer,其数据存在这*************/
import { fromJS } from "immutable";

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
      title: "三毛：你只看到我的潇洒，却不曾读懂我的悲伤",
      text:
        "我要是男人，定要找个像三毛一样的女子，给我的生活，带来丰盛的色彩。我要是女人，定要找个像荷西一样的男子，给足我尊严和惊喜。有人常常在我耳...",
      imgURL:
        "https://upload-images.jianshu.io/upload_images/1554515-a6b53c4e71afc4b1?imageMogr2/auto-orient/strip|imageView2/2/w/460/format/webp",
    },
    {
      id: 2,
      title: "胡歌12年后首谈车祸：既然活下来了，就不能白白活着",
      text:
        "生存还是毁灭，这是一个值得思考的问题。默默忍受命运暴虐的毒箭，或是挺身反抗人世无涯的苦难，通过斗争把它们扫清，这两种行为哪种更高贵？死了，睡着了，什么都完了……",
      imgURL:
        "https://upload-images.jianshu.io/upload_images/2259045-c55bb2fca8928ac1?imageMogr2/auto-orient/strip|imageView2/2/w/658/format/webp",
    },
    {
      id: 3,
      title: "37岁胡歌的人生观让我明白：成人世界里，请停止低层次的忙碌",
      text:
        "说起胡歌，他身上似乎总有一种神奇的魅力，或因为他谦逊有礼，或因为他温润如云，但我想更为重要的，是因为他的人生观。胡歌曾在采访中说过一件小事。……",
      imgURL:
        "https://upload-images.jianshu.io/upload_images/1202579-3822c5d82453f516?imageMogr2/auto-orient/strip|imageView2/2/w/1080/format/webp",
    },
    {
      id: 4,
      title: "知乎高赞：哪件事每天坚持10分钟，会让你有巨大改变？",
      text:
        "知乎上有个问题：有哪些事情你坚持了3年以上？网友们纷纷留言：“听CNN和BBC，坚持了6年以上”；“每天练字20分钟，练了4年”；“每天出门擦防晒霜，坚持了7年”；",
      imgURL:
        "https://upload-images.jianshu.io/upload_images/1554515-a6b53c4e71afc4b1?imageMogr2/auto-orient/strip|imageView2/2/w/460/format/webp",
    },
  ],
});

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
