import { Theme } from "../props";
import { animation } from "./animation";
import { border } from "./border";
import { SystemColors } from "./color/color";
import { light } from "./color/light";
import { query } from "./query";
import { shadow } from "./shadow";
import { spacing } from "./spacing";
import { state } from "./state";
import { typography } from "./typography";
import { dark } from "./color/dark";

const mapColors = () => {
  const colors = new Map<string, string>();
  for (const key in SystemColors) {
    colors.set(key, SystemColors[key]);
  }
  return colors;
};

export const theme: Theme = {
  border: border,
  color: light,
  typography: typography,
  shadow: shadow,
  spacing: spacing,
  state: state,
  animation: animation,
  queries: query,
  systemColors: mapColors(),
};

export const themeBuilder = (colorTheme: string): Theme => {
  const targetTheme = colorTheme === "dark" ? dark : light;

  return {
    ...theme,
    color: {
      ...theme.color,
      ...targetTheme,
    },
  };
};
