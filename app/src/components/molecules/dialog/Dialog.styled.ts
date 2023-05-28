import { motion } from "framer-motion";
import styled from "styled-components";
import { Flex, Sizing } from "../../core/props";
import { flexMixin, sizingMixin, translucify } from "../../core/theme/helpers";
import { Box } from "../../layouts";

export type DialogContentProps = Sizing & Flex;

export const DialogContent = styled(Box)<DialogContentProps>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.theme.mimir.spacing.xxxl};

  background-color: ${(props) => props.theme.mimir.color.surface.base};
  border-radius: ${(props) => props.theme.mimir.border.radius.large};

  min-height: 380px;
  padding: ${(props) => props.theme.mimir.spacing.multiple(6)};

  box-shadow: ${(props) => props.theme.mimir.shadow.small};

  ${sizingMixin};
  ${flexMixin};
`;

export const DialogOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background-color: ${(props) => translucify(props.theme.mimir.color.primary.base, 0.08)};
`;
