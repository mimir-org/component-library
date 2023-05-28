import { Palette } from "./palette";

export interface ColorReference {
  primary: Palette;
  secondary: Palette;
  tertiary: Palette;
  success: Palette;
  error: Palette;
  warning: Palette;
  neutral: Palette;
  neutralVariant: Palette;
}
