import { createGlobalStyle } from "styled-components";

export const IconfontStyles = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1608124550123'); /* IE9 */
  src: url('./iconfont.eot?t=1608124550123#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1608124550123') format('woff'),
  url('./iconfont.ttf?t=1608124550123') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1608124550123#iconfont') format('svg'); /* iOS 4.1- */
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;
