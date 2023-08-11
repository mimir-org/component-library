import { lighten, meetsContrastGuidelines } from "polished";
import { css } from "styled-components";
import { ColorSystem } from "../../../core/theme/props";
import { mimirColorReference } from "../../../core/theme/variables/color/reference/mimirColorReference";

export const outlinedButton = (color: ColorSystem, dangerousAction?: boolean, buttonColor?: string) => {
  const baseColor = buttonColor ? buttonColor : color.primary.base;

  const hoverColor = lighten(0.1, baseColor);
  const hoverTextColor = meetsContrastGuidelines(color.text.base, hoverColor).AAA ? color.text.base : color.text.on;

  const activeColor = lighten(0.3, baseColor);
  const activeTextColor = meetsContrastGuidelines(color.text.base, activeColor).AAA ? color.text.base : color.text.on;

  return css`
    outline: 0;
    background-color: transparent;
    border: 1px solid ${dangerousAction ? color.dangerousAction.on : baseColor};
    color: ${dangerousAction
      ? color.dangerousAction.on
      : color.reference === mimirColorReference
      ? color.text.base
      : color.primary.base};

    :disabled {
      border-color: ${color.outline.base};
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
        background-color: ${dangerousAction
          ? color.dangerousAction.base
          : color.reference === mimirColorReference
          ? activeColor
          : color.tertiary.container?.base};
        color: ${dangerousAction
          ? color.dangerousAction.on
          : color.reference === mimirColorReference
          ? activeTextColor
          : color.primary.base};
      }
    }
  `;
};
