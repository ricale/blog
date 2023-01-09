import * as styledComponents from "styled-components";

import { RicalelogTheme } from "./normal";

export const {
  default: styled,
  css,
  keyframes,
  ThemeProvider,
  ThemeContext,
  createGlobalStyle,
} = styledComponents as unknown as styledComponents.ThemedStyledComponentsModule<RicalelogTheme>;
