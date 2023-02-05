import { createGlobalStyle } from "./themedStyledComponents";

const GlobalStyle = createGlobalStyle`
  html, body, #___gatsby {
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

    background-color: ${(p) => p.theme.colors.background};
    color: ${(p) => p.theme.colors.onBackground};
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  a {
    color: skyblue;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
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
