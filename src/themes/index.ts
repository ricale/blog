import {
  styled,
  css,
  keyframes,
  ThemeProvider,
} from "./themedStyledComponents";

export default styled;
export { css, keyframes, ThemeProvider };

export { default as normalTheme } from "./normal";
export * from "./normal";
export { default as GlobalStyle } from "./GlobalStyle";
export { default as useTheme } from "./useTheme";
