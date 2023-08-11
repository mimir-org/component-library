import { motion } from "framer-motion";
import { ButtonHTMLAttributes, ElementType } from "react";
import styled, { css } from "styled-components";
import { flexMixin, focus, sizingMixin, spacingMixin } from "../../core/theme/helpers";
import { filledButton } from "../buttons/variants/filledButton";
import { outlinedButton } from "../buttons/variants/outlinedButton";
import { roundButton } from "../buttons/variants/roundButton";
import { textButton } from "../buttons/variants/textButton";
import { Flex, Polymorphic, Sizing, Spacings } from "./../../core/props";
import { getButtonColor } from "./Button.helpers";

export type ButtonColor = "primary" | "success" | "warning" | "danger" | "error";

export type ButtonContainerProps = Flex &
  Sizing &
  Spacings &
  Polymorphic<ElementType> &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "filled" | "outlined" | "text" | "round";
    iconPlacement?: "left" | "right";
    iconOnly?: boolean;
    dangerousAction?: boolean;
    buttonColor?: ButtonColor;
  };

export const ButtonContainer = styled.button<ButtonContainerProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.theme.mimirorg.spacing.s};
  flex-direction: ${(props) => props.iconPlacement === "left" && "row-reverse"};

  white-space: nowrap;
  text-decoration: none;

  font: ${(props) => props.theme.mimirorg.typography.roles.label.large.font};
  line-height: ${(props) => props.theme.mimirorg.typography.roles.label.large.lineHeight};
  letter-spacing: ${(props) => props.theme.mimirorg.typography.roles.label.large.letterSpacing};

  height: 32px;
  width: fit-content;
  min-width: 70px;
  padding: ${(props) => props.theme.mimirorg.spacing.base} ${(props) => props.theme.mimirorg.spacing.xl};
  border-radius: ${(props) => props.theme.mimirorg.border.radius.medium};

  :hover {
    cursor: pointer;
  }

  :disabled {
    cursor: not-allowed;
  }

  img,
  svg {
    max-width: 24px;
    max-height: 24px;
  }

  ${focus};

  ${({ variant, dangerousAction, buttonColor, ...props }) => {
    const { color, border } = props.theme.mimirorg;

    switch (variant) {
      case "filled": {
        return filledButton(color, dangerousAction, getButtonColor(props.theme.mimirorg, buttonColor));
      }
      case "outlined": {
        return outlinedButton(color, dangerousAction, getButtonColor(props.theme.mimirorg, buttonColor));
      }
      case "text": {
        return textButton(color, dangerousAction);
      }
      case "round": {
        return roundButton(color, border);
      }
    }
  }};

  ${({ iconOnly, dangerousAction, ...props }) =>
    iconOnly &&
    css`
      padding: ${props.theme.mimirorg.spacing.xs};
      min-width: revert;
      width: 24px;
      height: 24px;

      img,
      svg {
        max-width: 18px;
        max-height: 18px;
      }
      &:hover {
        background-color: ${dangerousAction ? props.theme.mimirorg.color.dangerousAction.base : ""};
        color: white;
      }
    `};

  ${flexMixin};
  ${sizingMixin};
  ${spacingMixin};
`;

ButtonContainer.defaultProps = {
  variant: "filled",
};

/**
 * An animation wrapper for the ButtonContainer component
 *
 * @see https://github.com/framer/motion
 */
export const MotionButtonContainer = motion(ButtonContainer);
