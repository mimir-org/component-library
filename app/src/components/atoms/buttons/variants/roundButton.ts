import { css } from "styled-components";
import { BorderSystem, ColorSystem } from "../../../core/theme/props";
import { lighten } from "polished";

export const roundButton = (color: ColorSystem, border: BorderSystem) => {
  return css`
    height: 50px;
    width: 50px;
    border-width: 0;
    border-radius: ${border.radius.round};
    background-color: ${color.primary.base};
    color: ${color.text.on};

    :disabled {
      background-color: ${color.outline.base};
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

    img,
    svg {
      max-width: 70%;
      max-height: 70%;
      width: 50%;
      height: 50%;
    }
  `;
};
