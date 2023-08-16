import { lighten } from "polished";
import { css } from "styled-components";
import { ColorSystem } from "../../../core/theme/props";
import { mimirColorReference } from "../../../core/theme/variables/color/reference/mimirColorReference";

export const textButton = (color: ColorSystem, dangerousAction?: boolean) =>
  css`
    border: 0;
    background-color: transparent;
    color: ${dangerousAction ? color.dangerousAction.on : color.primary.base};

    :disabled {
      color: ${color.surface.variant.on};
    }

    :not(:disabled) {
      :hover {
        background-color: ${dangerousAction
          ? color.dangerousAction.on
          : color.reference === mimirColorReference
          ? lighten(0.1, color.primary.base)
          : color.secondary.base};
        color: ${dangerousAction
          ? color.dangerousAction.base
          : color.reference === mimirColorReference
          ? color.text.on
          : color.primary.base};
      }

      :active {
        background-color: ${color.reference === mimirColorReference
          ? lighten(0.3, color.primary.base)
          : color.tertiary.container?.base};
        color: ${dangerousAction
          ? color.dangerousAction.on
          : color.reference === mimirColorReference
          ? color.text.on
          : color.primary.base};
      }
    }
  `;
