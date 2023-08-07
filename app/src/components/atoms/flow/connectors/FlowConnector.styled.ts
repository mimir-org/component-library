import styled from "styled-components";

export type FlowHandleProps = {
  hidden?: boolean;
  visible?: boolean;
  connectorWidth?: number;
  connectorHeight?: number;
};

export type FlowHandleBoxProps = {
  hidden?: boolean;
  visible?: boolean;
  left: string;
  top: string;
};

export const FlowHandleContainer = styled.div<FlowHandleProps>`
  display: flex;
  flex: 0 0 ${(props) => props.connectorWidth}px;
  gap: 4px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5px 4px;
`;

export const FlowHandleBox = styled.div<FlowHandleBoxProps>`
  position: relative;
  line-height: 0;
  transition: top 0.2s ease-out, left 0.2s ease-out;
  display: ${(props) => (props.visible && props.visible === true ? "block" : "none")};

  top: ${(props) => props.top};
  left: ${(props) => props.left};
  transform: revert;

  width: fit-content;
  height: fit-content;
  padding: 0;
  margin: 0;

  .react-flow__handle-block {
    visibility: ${(props) => (props.visible ? "visible" : "hidden")};
    transition: top 0.2s ease-out, left 0.2s ease-out;
  }
`;
