import { useContext } from "react";

import { RicalelogTheme } from "./normal";
import { ThemeContext } from "./themedStyledComponents";

export default function useTheme() {
  return useContext<RicalelogTheme>(ThemeContext);
}
