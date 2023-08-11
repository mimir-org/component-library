import { motion } from "framer-motion";
import styled from "styled-components";
import { Sizing } from "../../core/props";
import { sizingMixin } from "../../core/theme/helpers";

export type TooltipContentProps = Sizing;

const TooltipContent = styled.div<TooltipContentProps>`
  padding: ${(props) => props.theme.mimirorg.spacing.base} ${(props) => props.theme.mimirorg.spacing.l};
  border-radius: ${(props) => props.theme.mimirorg.border.radius.large};
  background-color: ${(props) => props.theme.mimirorg.color.surface.inverse.base};
  color: ${(props) => props.theme.mimirorg.color.surface.inverse.on};
  box-shadow: ${(props) => props.theme.mimirorg.shadow.small};
  ${sizingMixin};
`;

export const MotionTooltipContent = motion(TooltipContent);
