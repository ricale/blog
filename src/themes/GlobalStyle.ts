import { createGlobalStyle } from "./themedStyledComponents";

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    width: 100%;
    margin: 0;
    padding: 0;
    font-size: 16px;
    line-height: 180%;

    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: ${(p) => p.theme.dimens.margin}px  0;
    padding: 0;
    word-break: keep-all;
  }

  h1, h2, h3 {
    margin-top: ${(p) => p.theme.dimens.bigMargin}px;
  }

  pre {
    margin: ${(p) => p.theme.dimens.margin}px  0;
    padding: ${(p) => p.theme.dimens.margin}px;
    background-color: lightgray;

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
