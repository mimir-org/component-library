import { HandleType, Position } from "react-flow-renderer";

export interface FlowHandle {
  id: string;
  connectorId: string;
  position: Position;
  handleType: HandleType;
  side: "inside" | "outside";
  hidden: boolean;
  visible: boolean;
  className: string;
  color: string;
}

export interface FlowConnector {
  id: string;
  handles: FlowHandle[];
  hidden: boolean;
  visible: boolean;
  direction: ConnectorDirection;
}

export enum ConnectorDirection {
  Input = 0,
  Output = 1,
  Bidirectional = 2,
}
