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
  gap: ${(props) => props.theme.mimirorg.spacing.xxxl};

  background-color: ${(props) => props.theme.mimirorg.color.surface.base};
  border-radius: ${(props) => props.theme.mimirorg.border.radius.large};

  min-height: 380px;
  padding: ${(props) => props.theme.mimirorg.spacing.multiple(6)};

  box-shadow: ${(props) => props.theme.mimirorg.shadow.small};

  ${sizingMixin};
  ${flexMixin};
`;

export const DialogOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background-color: ${(props) => translucify(props.theme.mimirorg.color.primary.base, 0.08)};
`;
