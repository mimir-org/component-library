import { Theme } from "../../core/theme/props";
import { ButtonColor } from "./Button.styled";

export const getButtonColor = (theme?: Theme, buttonColor?: ButtonColor) => {
  switch (buttonColor) {
    case "primary":
      return theme?.color.primary.base;
    case "success":
      return theme?.color.success.base;
    case "warning":
      return theme?.color.tertiary.base;
    case "danger":
    case "error":
      return theme?.color.error.base;
    default:
      return "";
  }
};
