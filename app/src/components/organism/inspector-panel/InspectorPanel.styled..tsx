import styled from "styled-components";
import { spacingMixin } from "../../../components/core/theme/helpers";
import { Spacings } from "../../core/props";

export type InspectorHeaderProps = {
  bgColor?: string;
};

interface InspectorTabHeaderProps {
  active: boolean;
  color: string;
}

/**
 * Removes styles from react router links.
 * Useful when wrapping other elements with navigation semantics.
 */
export const InspectorHeader = styled.div<InspectorHeaderProps>`
  display: flex;
  align-items: center;
  background-color: ${(props) => (props.bgColor != null ? props.bgColor : "inherit")};
  height: 44px;
`;

/**
 * Removes styles from react router links.
 * Useful when wrapping other elements with navigation semantics.
 */
export const InspectorHeaderContent = styled.div<Spacings>`
  display: flex;
  width: 100%;
  align-items: center;
  ${spacingMixin};
`;

export const InspectorContent = styled.div<Spacings>`
  ${spacingMixin};
`;

/**
 * Removes styles from react router links.
 * Useful when wrapping other elements with navigation semantics.
 */
export const InspectorTabHeader = styled.div<InspectorTabHeaderProps>`
  pointer-events: initial;
  box-sizing: border-box;
  min-width: 120px;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
  color: #000;
  margin-right: 7px;
  height: ${(props) => (props.active ? 44 : 35)}px;
  margin-top: ${(props) => (props.active ? 0 : 9)}px;
  background-color: ${(props) => (props.active ? props.theme.mimir.color.reference.neutral[99] : props.color)};
  padding: ${(props) => (props.active ? "17px 14px 0px 14px;" : "8px 14px 0px 14px")};
  box-shadow: -4px 0 4px -5px rgba(0, 0, 0, 0.4), 4px 0 3px -5px rgba(0, 0, 0, 0.4);

  :hover {
    cursor: pointer;
  }
  p {
    bottom: ${(props: { active: boolean }) => (props.active ? 20 : 16)}px;
    font-weight: ${(props) => props.active && props.theme.mimir.typography.typeface.weights.bold};
    text-align: center;
  }
`;
