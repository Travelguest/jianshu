import { createGlobalStyle } from "styled-components";

export const IconfontStyles = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1607068492360'); /* IE9 */
  src: url('./iconfont.eot?t=1607068492360#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAApMAAsAAAAAEUgAAAn9AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCETAqTTJAPATYCJAMwCxoABCAFhG0HgR4bpw4zg8LGAQQkryP7nwk2uB+lCYOyHBQ/xOK30QOOKFgUl754CoswVRjylLRTWYZFWPBMPDzc7z33xY/GT0v9tATZLBIkCzCammg0pJ+4Idq0ZoXILnE0JoS4FS0xYZeNy0tSTU7hDGsdSFLT0LROxXzD1uREnDY/H/i/ONV29wIivJMHy/bpPndcOVGOFL8+PoaH0AAsgJsac9UtJNu8rZff/A3xH2LeTNIiUhqhTcQaqo2MX+c6sVNiQcPcmin4deLyYoQmUDGmI5aeV3Z4yBAKzLmg410eoVpZTmEoVRRSXGbiA7CUkjf4BuDdfvsYgZnwIJGnKKyNo+UD0i7c+9O6tJpTHdC2x6DoI0UHmUL/Uqt+AcerOFVZjHoGtLWECaUuDGX+hMGyveNoHkUl7/27wOp0cGjz4ChKFYREVa6ipDy6P16BgGtI/Rmp0oV1MUW6qJiUroeYAt1gMUE3G6lD3oG8DXIUYnJ6HtUqNokCEidyVCuDvA/lWVaMyUUbiyT/gNFVQLTZxsjJLkTBDMHiNmE+FRTx8ODibLaXuwffbGbzUHrxnhDG5gb5+bB92QFs1C3ZM9zdx1/g7ZmPs1nuvt72nvCmZodJTJDUtG6UXKgZ7dL4YBo2gQ3hDY22UGyNoL7jOG4G4CCwM5jpFqSjKB1mKiQdU0Brx83nIehN+mNi5hOS+YxyfjrqdGoYhpqZIWm6ceKBANpOMX+ZIAtBkFsIYjXThG9miiGaHtEwVLFCmiYsmZkC0o5D5vu6N+p9j3A6RywYZOJpphNIq7aLKQq7wnAqcfcNGuvod4/5evqN+rh7d+AwppGQhbOoSqLdB3jvbjulO20+qT2h6dtyQqA9aT6tO9U42ONtqLdYOO0WG8/Gbxof53eNW7lWzpsaG49xak45TXQhrSVPzuBmysol7RXj6zQ5k506apoxzyTNaIkpusNiMdl4Gmicn4CP6pkuKJo+bj4aJ9nhpOke0mrFrfxxHU+DWbZwdG+arVoL5muy6cbxhSe1hd1TmcSWY4Grgqj1CX2nzd2cKQFhsfKp7Qn8pm6yT0NObzp1aYjUHKnQEwoTT9idSlwzwyUoK1OwPoWgDmQwqZ1xXnJN9xmJ7UW/aVvQ459iHd974gSdSWMmnihwHRO2h5FQa/dxbc6w+wyJgxmaGHYyfAtdRGX4wSiIM8ROOkRIZcw2iUREzNapDh5mCqip2pVUG+xy+XVFutbyusdGHKEzt0RPJ6i3xx5mEjR8Dl0zj+q7T0E2HuakCQvHAng2G4cj+ZO4hg4Rr2P4fBvPxOFYJgR0xBQ7cD41rkFrN/h4k1XDTqNTIZkQFBwh1jMSvhuok5gUctYRJX2nq88UkhyaxrCEcb6kCtseS4QwdVuUwDlBd+mgO7FJPOo+xR/vVUvXEM0t5q/dxYWs4zxo4nW3KdnXWe8HV5TrZfq21tOn29pGZdmdsadPeSKBJxav6EgfPXkSnOktvitW3u3xdu0pnIOzqklY3jkwi0H/mjV33sXcFIglS/5/nGbAqwUvl+Z/3ErNuy7k/hUY80NMKACk6gLCYqEX0QsmcOWq5oIKsICtLt+EPGAQQ7NZrtqEcqmo2awCXOM/M++/JVSDt0356xTytQWmKz8vnvV+//D//y2PoGJ7sudZH4KnP+YFV9Xsy1ND/x8++Or5x9GzgRoxHz5m/HEBMzbYDC86fNSIpBBC1eMXE9EgOkCVXrsKnmubHIE5gA481/f1ecsoG7BfZx6pec5HRgGgB/WwwwEbA3rHAT0isgMHECuuA469YoP5ZORE5A3z0oz5MZJp9OPXyE5k+uOPp1nsrz9Gp0FN7iKQe0brB/wS758wjhrjjysjlUt1LrvdFaprfHA0ap1RaVRM7u3N78nrye8NVoA/r93R+4QaJAuLxpLWX0ExnHVFrMYwYwELx9Ar8BWcfOS2iTiTMlFb7QZ/fWO7iGuoFbXL9vrxNIGsZR86HJmyxDruIWWxoVf8/x7xRK3mZS3JYswtlUYFKByO3llfF12Zn6yO/F7xclihcqmnW+oifnAA7Be76qZbtymXe4woHQ5o+yg85TOmuAFout+9zFd+6ZPSwGIgFQpHHA7lcnR4ex+n79ABeEDSD4FcrS/2lPMUM2MzPI5uizYYjIEjMb1z59fWxoxsnNAb5O2fXCbBgoAPaG/qHFEvRPxzVSbr7pHLFHr8+7PcJ4fBNxv9GsWV37CEH+b9t7U7ZGXRvAVvRx0oNuxZkVyxpyGxoV2x94QX9BtrDCxNrWf10PacM1+PQWsy5ZWN4A1xW2unbACJefnavw650cl5f0Vo2iNwqaBOHVGb8VwlrPD94cckCW/8kp1R53fwYGUvhGDlgz9OZtXCqSlwq2qXXFHfGqiJHpNlYVox/WU13v4PX2FvaTnKU3ph7dUBZeLon3h1aS2taTJehUqwpCwJJ8kvVOJmlfCtgB7cdnyndXXNmrxxQyqr3Yo3wg0/XZLEy5KW9M23LMzIzG5Wib+Iu7LkM1kMIRB2Bj94qHxxNcVDm1IHr8uWZfjDSd4s1hbFjampyEy195fshkTyOFYfAPOH0Qh//6f1vrJnTU3KIVZ4Z5CvnxvPHe+qEuELdWak3a6crdpX/jaoEpYKZs/zu7am3sSklQF/p1dD31vZ9QW7MbGyElTJK3zsqwh4zrK//17X8m6kbAOlhYvSyjx3APD0jk9lifDRKdelJ0GZZ2VVs/of3pntW50e9C9wrjwozYbWbidj5EtEk3WfyUU9wlFBVcISoaprR0dINFB97A7xPJSq26XCCmEVLIqBmxR28O73gIuGblGA3Lmd6RkE2CW7kTtINTDZXiQVJec2LYi0RIssQrSTDiFXkCFAepEb+BMAXC82NyC+gLfrJuaOvt7ch4RfY02BP93HbG0+hb944H8HfY+/Z1eIS/rtBh7gLAiJ8isqQJ3L9Te6A9KyM5BW53LZ69TltcvYEQJ8BmEAYFwHgOtouz941gflllZcvinX58DchUAkLTUaokhN5LDgMqEbUiUcTMJVXtwfCuBsgrIyMLryAw7E1y8H5u00RJD6B1GkrjksPP8aN+TGJgejiUsfcaKggweHKuAUyiWQFjZaQzhw5r5jFTvlBJVk6RudJ2HIk+w79oKMrg07flYVIRgwTnp4Zjaw6wQGJw3qkNQYHSZpam52Ey396ICCg5RgCk6B0lKSaIKZ/YOD2Ou/Q5Woo7icFV+S35Dj0eFBLpGVSHzBXGrFsSz2ZiqFIDAD9EFH9C59Fhnq+LAAQ7qxBtKCRF1jcDCRCjuZsjjpn/ZHHI8O36p0ZEeRRBpZ5FGIYpSiHJWoRi3qkBvkjTt1sKqJFZsmkHe8RB9lV/5OfuRriQ0tSK0UHRaheab9YqOkw1dkv4y9kpJOvxrW67kK14xGAAA=') format('woff2'),
  url('./iconfont.woff?t=1607068492360') format('woff'),
  url('./iconfont.ttf?t=1607068492360') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1607068492360#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.iconpen:before {
  content: "\e61c";
}

.iconAa:before {
  content: "\e636";
}

.iconzhinanzhen:before {
  content: "\e604";
}

.iconsousuo:before {
  content: "\e783";
}

.iconsousuo1:before {
  content: "\e6b9";
}

.iconshoujixiazai:before {
  content: "\e608";
}

.iconzhinanzhen1:before {
  content: "\e602";
}

.iconsousuo2:before {
  content: "\e723";
}

.iconbi:before {
  content: "\e742";
}

.iconPensyumaobi:before {
  content: "\e708";
}

.iconxianxingyumaobi:before {
  content: "\e67e";
}
`;
