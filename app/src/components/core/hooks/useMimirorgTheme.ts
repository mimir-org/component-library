import { useTheme } from "styled-components";
import { Theme } from "../theme/props";

export const useMimirorgTheme = (): Theme => {
  const theme = useTheme();
  return theme.mimirorg;
};
