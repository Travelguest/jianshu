//注意这里返回的花括号要加()
import * as constants from "./constants";

export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS,
});
export const searchBlur = () => ({
  type: constants.SEARCH_BLUR,
});
