import { motion } from "framer-motion";
import styled from "styled-components";
import { Sizing } from "../../core/props";
import { sizingMixin, translucify } from "../../core/theme/helpers";
import { mimirColorReference } from "../../core/theme/variables/color/reference/mimirColorReference";

export type TooltipContentProps = Sizing;

const TooltipContent = styled.div<TooltipContentProps>`
  padding: ${(props) => props.theme.mimirorg.spacing.base} ${(props) => props.theme.mimirorg.spacing.l};
  border-radius: ${(props) => props.theme.mimirorg.border.radius.large};
  background-color: ${(props) =>
    props.theme.mimirorg.color.reference === mimirColorReference
      ? props.theme.mimirorg.color.surface.inverse.base
      : translucify(props.theme.mimirorg.color.primary.base, 0.9)};
  color: ${(props) =>
    props.theme.mimirorg.color.reference === mimirColorReference
      ? props.theme.mimirorg.color.surface.inverse.on
      : props.theme.mimirorg.color.primary.on};
  box-shadow: ${(props) => props.theme.mimirorg.shadow.small};
  ${sizingMixin};
`;

export const MotionTooltipContent = motion(TooltipContent);
