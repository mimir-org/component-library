import { css } from "styled-components";
import { ColorSystem, SpacingSystem } from "../../../core/theme/props";

export const secondaryToken = (color: ColorSystem, spacing: SpacingSystem) => css`
  gap: ${spacing.base};
  background-color: ${color.background.base};
  color: ${color.tertiary.on};
  border: 1px solid ${color.tertiary.base};
  border-radius: ${(props) => props.theme.mimirorg.border.radius.medium};
`;
