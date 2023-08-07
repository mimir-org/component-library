import styled from "styled-components";

export type FlowNodeBoxProps = {
  colorMain?: string;
  colorSelected?: string;
  selected?: boolean;
  hidden?: boolean;
  visible?: boolean;
  nodeWidth?: number;
  nodeHeight?: number;
  connectorWidth?: number;
  connectorHeight?: number;
};

export const FlowNodeContainer = styled.div<FlowNodeBoxProps>`
  display: flex;
  width: fit-content;
  height: fit-content;
  margin: auto;
  flex-direction: row;
`;

export const FlowNodeBox = styled.div<FlowNodeBoxProps>`
  display: flex;
  border-radius: 10px;
  min-height: ${(props) => props.nodeHeight}px;
  width: ${(props) => props.nodeWidth}px;
  font-size: 11px;
  text-align: center;
  box-shadow: 0 5px 5px -2px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.colorMain};
  opacity: ${(props) => (props.hidden ? 0 : 1)};
  transition: border 250ms, opacity 250ms;
  padding: 0;
  border: 3px solid;
  border-color: ${(props) => props.colorMain} !important;
  margin: 0;
  opacity: ${(props) => (props.visible ? 1 : 0)};

  &:hover {
    border: 3px solid;
    border-color: ${(props) => props.colorSelected} !important;
  }

  &.selected {
    border: 3px solid;
    border-color: ${(props) => props.colorSelected} !important;
  }
`;

export const FlowNodeContentBox = styled.div`
  position: relative;
  display: flex;
  flex: 1 1 auto;
  gap: 5px;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
`;
