import { Global, css } from "@emotion/react";

// @font-face {
//     font-family: 'S-CoreDream-6Bold';
//     src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-6Bold.woff') format('woff');
//     font-weight: normal;
//     font-style: normal;
// }

const defaultStyle = css`
  @import url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-6Bold.woff");
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Noto Sans KR", sans-serif;
  }
  html,
  body {
    height: 100%;
  }
  html {
    font-size: 10px;
  }
  body {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    // css custom property : theme
    &.dark {
    }
    &.light {
    }
  }
  a,
  a:hover {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
`;

function GlobalStyle() {
  return <Global styles={defaultStyle} />;
}

export default GlobalStyle;