import { Global, css } from "@emotion/react";



const defaultStyle = css`
@import url("../asset/S-Core-Dream-light/s-core-dream.css");
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "s-core-dream-light", sans-serif !important;
    font-size:50px;
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