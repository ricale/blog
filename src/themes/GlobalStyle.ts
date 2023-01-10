import { createGlobalStyle } from "./themedStyledComponents";

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    width: 100%;
    margin: 0;
    padding: 0;
    font-size: 16px;
    line-height: 180%;

    overflow-x: hidden;

    background-color: black;
    color: white;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: ${(p) => p.theme.dimens.margin}px  0;
    padding: 0;
    word-break: keep-all;
  }

  h1, h2, h3 {
    margin-top: ${(p) => p.theme.dimens.bigMargin}px;
  }

  a {
    color: skyblue;
  }

  blockquote {
    margin-left: 0;
    margin-right: 0;
    padding: 16px 20px;
    border: 1px solid dimgray;
    border-left-width: 10px;

    /* background-color: dimgray; */
    > :first-child  {
      margin-top: 0;
    }
    > :last-child  {
      margin-bottom: 0;
    }
  }


  pre {
    margin: ${(p) => p.theme.dimens.margin}px  0;
    padding: ${(p) => p.theme.dimens.margin}px;
    background-color: gray;

    line-height: 140%;
    overflow-x: auto;
  }

  input, button, select {
    margin: 0;
    padding: 0;
    font-size: 16px;
    appearance: none;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
