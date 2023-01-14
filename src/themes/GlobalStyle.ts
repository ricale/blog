import { createGlobalStyle } from "./themedStyledComponents";

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    width: 100%;
    margin: 0;
    padding: 0;

    font-family: -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      "Noto Sans",
      Helvetica,
      Arial,
      sans-serif,
      "Apple Color Emoji",
      "Segoe UI Emoji";

    overflow-x: hidden;

    background-color: ${(p) => p.theme.colors.background};
    color: ${(p) => p.theme.colors.onBackground};
  }

  a {
    color: skyblue;
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
