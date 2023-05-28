import { css } from "styled-components";
import { ColorSystem } from "../../../core/theme/props";
import { lighten, meetsContrastGuidelines } from "polished";

export const filledButton = (color: ColorSystem, buttonColor?: string) => {
  const baseColor = buttonColor ? buttonColor : color.primary.base;

  const hoverColor = lighten(0.1, baseColor);
  const hoverTextColor = meetsContrastGuidelines(color.text.base, hoverColor).AAA ? color.text.base : color.text.on;

  const activeColor = lighten(0.3, baseColor);
  const activeTextColor = meetsContrastGuidelines(color.text.base, activeColor).AAA ? color.text.base : color.text.on;

  return css`
    border: 0;
    background-color: ${baseColor};
    color: ${color.text.on};

    :disabled {
      background-color: ${color.outline.base};
      color: ${color.surface.variant.on};
    }

    :not(:disabled) {
      :hover {
        background-color: ${hoverColor};
        color: ${hoverTextColor};
      }

      :active {
        background-color: ${activeColor};
        color: ${activeTextColor};
      }
    }
  `;
};
