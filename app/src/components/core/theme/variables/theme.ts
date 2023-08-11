import { Theme } from "../props";
import { animation } from "./animation";
import { border } from "./border";
import { dark } from "./color/dark";
import { light } from "./color/light";
import { tyleDark } from "./color/tyleDark";
import { tyleLight } from "./color/tyleLight";
import { elevation } from "./elevation";
import { query } from "./query";
import { shadow } from "./shadow";
import { spacing } from "./spacing";
import { state } from "./state";
import { typography } from "./typography";

export const theme: Theme = {
  border: border,
  color: light,
  typography: typography,
  shadow: shadow,
  spacing: spacing,
  state: state,
  elevation: elevation,
  animation: animation,
  queries: query,
};

export const themeBuilder = (colorTheme: string): Theme => {
  let targetTheme = light;
  switch (colorTheme) {
    case "dark":
      targetTheme = dark;
      break;
    case "tyleLight":
      targetTheme = tyleLight;
      break;
    case "tyleDark":
      targetTheme = tyleDark;
      break;
  }

  return {
    ...theme,
    color: {
      ...theme.color,
      ...targetTheme,
    },
  };
};
