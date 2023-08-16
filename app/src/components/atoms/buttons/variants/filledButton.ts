import { lighten, meetsContrastGuidelines } from "polished";
import { css } from "styled-components";
import { ColorSystem } from "../../../core/theme/props";
import { mimirColorReference } from "../../../core/theme/variables/color/reference/mimirColorReference";

export const filledButton = (color: ColorSystem, dangerousAction?: boolean, buttonColor?: string) => {
  const baseColor = buttonColor ? buttonColor : color.primary.base;

  const hoverColor = lighten(0.1, baseColor);
  const hoverTextColor = meetsContrastGuidelines(color.text.base, hoverColor).AAA ? color.text.base : color.text.on;

  const activeColor = lighten(0.3, baseColor);
  const activeTextColor = meetsContrastGuidelines(color.text.base, activeColor).AAA ? color.text.base : color.text.on;

  return css`
    border: 0;
    background-color: ${dangerousAction ? color.dangerousAction.base : baseColor};
    color: ${dangerousAction
      ? color.dangerousAction.on
      : color.reference === mimirColorReference
      ? color.text.on
      : color.primary.on};

    :disabled {
      background-color: ${color.outline.base};
      color: ${color.surface.variant.on};
    }

    :not(:disabled) {
      :hover {
        background-color: ${dangerousAction
          ? color.dangerousAction.on
          : color.reference === mimirColorReference
          ? hoverColor
          : color.secondary.base};
        color: ${dangerousAction
          ? color.dangerousAction.base
          : color.reference === mimirColorReference
          ? hoverTextColor
          : color.primary.base};
      }

      :active {
        background-color: ${color.reference === mimirColorReference ? activeColor : color.surface.on};
        color: ${color.reference === mimirColorReference ? activeTextColor : color.primary.on};
      }
    }
  `;
};
