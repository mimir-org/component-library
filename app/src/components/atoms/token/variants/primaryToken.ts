import { css } from "styled-components";
import { ColorSystem } from "../../../core/theme/props";

export const primaryToken = (color: ColorSystem) => css`
  background-color: ${color.tertiary.base};
  color: ${color.tertiary.on};
  border-radius: ${(props) => props.theme.mimirorg.border.radius.large};
`;
