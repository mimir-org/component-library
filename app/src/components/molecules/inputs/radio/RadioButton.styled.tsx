import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { motion } from "framer-motion";
import styled from "styled-components";

export const RadioButtonRoot = styled(RadioGroupPrimitive.Root)`
  all: unset;
  display: flex;
  flex-direction: ${(props) => props.orientation && props.orientation};
  gap: ${(props) => props.theme.mimir.spacing.l};
`;

export const RadioGroupItem = styled(RadioGroupPrimitive.Item)`
  all: unset;
  background-color: ${(props) => props.theme.mimir.color.surface.variant.base};
  width: 20px;
  height: 20px;
  border-radius: ${(props) => props.theme.mimir.border.radius.round};
  box-shadow: ${(props) => props.theme.mimir.shadow.small};

  :hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.mimir.color.secondary.container?.base};
  }

  :focus {
    box-shadow: ${(props) => props.theme.mimir.shadow.small};
  }
`;

export const RadioGroupIndicator = styled(RadioGroupPrimitive.Indicator)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
  &::after {
    content: "";
    display: block;
    width: 50%;
    height: 50%;
    border-radius: ${(props) => props.theme.mimir.border.radius.round};
    background-color: ${(props) => props.theme.mimir.color.primary.base};
    margin: 25% auto;
  }
`;

/**
 * An animation wrapper for the RadioButtonGroup component
 *
 * @see https://github.com/framer/motion
 */
export const MotionRadioButtonRoot = motion(RadioButtonRoot);
