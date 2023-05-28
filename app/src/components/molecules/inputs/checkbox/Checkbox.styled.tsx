import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckBox, CheckBoxOutlineBlank } from "@styled-icons/material-rounded";
import { motion } from "framer-motion";
import styled from "styled-components";
import { focus } from "../../../core/theme/helpers";

export const CheckboxRoot = styled(CheckboxPrimitive.Root)`
  all: unset;
  position: relative;
  border-radius: ${(props) => props.theme.mimir.border.radius.small};
  color: ${(props) => props.theme.mimir.color.primary.base};
  height: 24px;
  width: 24px;

  :disabled {
    color: ${(props) => props.theme.mimir.color.outline.base};
    cursor: not-allowed;
  }

  :not(:disabled) {
    :hover {
      background-color: ${(props) => props.theme.mimir.color.secondary.container?.base};
    }

    :active {
      color: ${(props) => props.theme.mimir.color.surface.on};
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
