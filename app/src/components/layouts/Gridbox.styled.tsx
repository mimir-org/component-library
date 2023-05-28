import { ElementType } from "react";
import styled from "styled-components";
import { Grid, Polymorphic } from "../core/props";
import { gridMixin } from "../core/theme/helpers";
import { motion } from "framer-motion";

export type GridboxProps = Grid & Polymorphic<ElementType>;

/**
 * A polymorphic layout component for grid behaviour.
 *
 * @param as polymorphic parameter for changing base element (defaults to <div>)
 * @param props can receive all standard css grid properties
 * @constructor
 */
export const Gridbox = styled.div<GridboxProps>`
  display: grid;
  ${gridMixin};
`;

/**
 * An animation wrapper for the Grid component
 *
 * @see https://github.com/framer/motion
 */
export const MotionGridbox = motion(Gridbox);
