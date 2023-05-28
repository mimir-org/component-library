import { css } from "styled-components";
import { ColorSystem } from "../../../core/theme/props";
import { lighten } from "polished";

export const textButton = (color: ColorSystem) =>
  css`
    border: 0;
    background-color: transparent;
    color: ${color.primary.base};

    :disabled {
      color: ${color.surface.variant.on};
    }

    :not(:disabled) {
      :hover {
        background-color: ${lighten(0.1, color.primary.base)};
        color: ${color.text.on};
      }

      :active {
        background-color: ${lighten(0.3, color.primary.base)};
        color: ${color.text.on};
      }
    }
  `;
