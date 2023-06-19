import { motion } from "framer-motion";
import styled from "styled-components";
import { Spacings } from "../../core/props";
import { spacingMixin } from "../../core/theme/helpers";

export type ResizablePanelContainerProps = Spacings & {
  maxTrigger?: boolean;
};

/**
 * Removes styles from react router links.
 * Useful when wrapping other elements with navigation semantics.
 */
const ResizablePanelContainer = styled.div<ResizablePanelContainerProps>`
  position: relative;
  overflow: ${(props) => (props.maxTrigger ? "auto" : "hidden")};
  ${spacingMixin};
`;

ResizablePanelContainer.defaultProps = {
  maxTrigger: false,
};

/**
 * An animation wrapper for the ResizablePanelConatiner component
 *
 * @see https://github.com/framer/motion
 */
export const MotionResizablePanelContainer = motion(ResizablePanelContainer);
