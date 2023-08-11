import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckBox, CheckBoxOutlineBlank } from "@styled-icons/material-rounded";
import { motion } from "framer-motion";
import styled from "styled-components";
import { focus } from "../../../core/theme/helpers";
import { mimirColorReference } from "../../../core/theme/variables/color/reference/mimirColorReference";

export const CheckboxRoot = styled(CheckboxPrimitive.Root)`
  all: unset;
  position: relative;
  border-radius: ${(props) => props.theme.mimirorg.border.radius.small};
  color: ${(props) => props.theme.mimirorg.color.primary.base};
  height: 24px;
  width: 24px;

  :disabled {
    color: ${(props) =>
      props.theme.mimirorg.color.reference === mimirColorReference
        ? props.theme.mimirorg.color.outline.base
        : props.theme.mimirorg.color.surface.variant.on};
    cursor: not-allowed;
  }

  :not(:disabled) {
    :hover {
      background-color: ${(props) =>
        props.theme.mimirorg.color.reference === mimirColorReference
          ? props.theme.mimirorg.color.secondary.container?.base
          : props.theme.mimirorg.color.secondary.base};
    }

    :active {
      color: ${(props) => props.theme.mimirorg.color.surface.on};
    }
  }

  ${focus};
`;

export const CheckboxIndicator = styled(CheckboxPrimitive.Indicator)``;

export const CheckboxEmpty = styled(CheckBoxOutlineBlank)`
  position: absolute;
  inset: 0;
`;

export const CheckboxChecked = styled(CheckBox)`
  position: absolute;
  inset: 0;
`;

/**
 * An animation wrapper for the CheckboxRoot component
 *
 * @see https://github.com/framer/motion
 */
export const MotionCheckboxRoot = motion(CheckboxRoot);
