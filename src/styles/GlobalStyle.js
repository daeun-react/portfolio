import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Noto+Serif+KR&display=swap");

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: "Noto Serif KR",serif;
    font-weight: 600;
    font-size: 1.75rem;
    color: #000;
    background-color: #fff;
  }

  nav {
    font-weight: 300;
    font-size: 1rem;
  }

  img {
    width: 100%;
    height: 100%;
  }

  a {
      text-decoration: none;
      font-size: 14px;
      text-transform: uppercase;
  }

  ul {
      list-style-type: none;
  }

`;

export default GlobalStyle;
