import { motion } from "framer-motion";
import { ElementType } from "react";
import styled, { css } from "styled-components";
import { Polymorphic } from "../../core/props";
import { ColorSystem } from "../../core/theme/props";

type CardProps = Polymorphic<ElementType> & {
  variant?: "selected" | "filled";
};

export const Card = styled.div<CardProps>`
  padding: ${(props) => props.theme.mimirorg.spacing.xxxl};
  background-color: ${(props) => props.theme.mimirorg.color.surface.base};
  box-shadow: ${(props) => props.theme.mimirorg.shadow.small};
  border-radius: ${(props) => props.theme.mimirorg.border.radius.large};

  ${({ variant, ...props }) => {
    const { color } = props.theme.mimirorg;

    if (variant === "selected") {
      return selectedCard(color);
    }
  }};
`;

Card.defaultProps = {
  variant: "filled",
};

const selectedCard = (color: ColorSystem) => css`
  background-color: ${color.tertiary.container?.base};
  box-shadow: none;
`;

/**
 * An animation wrapper for the Card component
 *
 * @see https://github.com/framer/motion
 */
export const MotionCard = motion(Card);
