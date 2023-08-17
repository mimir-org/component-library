import { motion } from "framer-motion";
import { ElementType } from "react";
import styled from "styled-components";
import { Flex, Polymorphic } from "../core/props/";
import { flexMixin, focus } from "../core/theme/helpers";

export type FlexBoxProps = Flex & Polymorphic<ElementType>;

/**
 * A polymorphic layout component for flexbox behaviour.
 *
 * @param as polymorphic parameter for changing base element (defaults to <div>)
 * @param props can receive all standard css flexbox properties
 * @constructor
 */
export const Flexbox = styled.div<FlexBoxProps>`
  display: flex;
  ${focus};
  ${flexMixin};
`;

/**
 * An animation wrapper for the Flexbox component
 *
 * @see https://github.com/framer/motion
 */
export const MotionFlexbox = motion(Flexbox);
