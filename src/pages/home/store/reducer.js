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
});

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
