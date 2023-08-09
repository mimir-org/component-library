import { Meta, StoryObj } from "@storybook/react";
import { Position } from "reactflow";
import { ConnectorDirection, FlowConnector, FlowHandle } from "../../core/types";
import { createId } from "../../core/services";
import { FlowConnectorComponent } from "./connectors/FlowConnectorComponent";

const createHandle = (
  connectorId: string,
  side: "inside" | "outside",
  position: Position,
  hidden: boolean,
  visiible: boolean
): FlowHandle => {
  const handle: FlowHandle = {
    id: createId(),
    connectorId: connectorId,
    position: position,
    handleType: side === "inside" ? "target" : "source",
    side: side,
    hidden: hidden,
    className: "connector-handle",
    color: "#222425",
    visible: visiible,
  };
  return handle;
};

const createConnector = (direction: ConnectorDirection, hidden: boolean, visiible: boolean): FlowConnector => {
  const connector: FlowConnector = {
    id: createId(),
    handles: [],
    hidden: hidden,
    direction: direction,
    visible: visiible,
  };
  return connector;
};

const defaultConnectors = (): FlowConnector[] => {
  const connectors: FlowConnector[] = [];

  const connA = createConnector(ConnectorDirection.Input, false, true);
  connA.handles = [
    createHandle(connA.id, "inside", Position.Left, false, true),
    createHandle(connA.id, "outside", Position.Left, false, true),
  ];
  connectors.push(connA);

  const connB = createConnector(ConnectorDirection.Input, false, true);
  connB.handles = [
    createHandle(connB.id, "inside", Position.Left, false, true),
    createHandle(connB.id, "outside", Position.Left, false, true),
  ];
  connectors.push(connB);

  const connC = createConnector(ConnectorDirection.Input, false, true);
  connC.handles = [
    createHandle(connC.id, "inside", Position.Left, false, true),
    createHandle(connC.id, "outside", Position.Left, false, true),
  ];
  connectors.push(connC);

  const connD = createConnector(ConnectorDirection.Output, false, true);
  connD.handles = [
    createHandle(connD.id, "inside", Position.Right, false, true),
    createHandle(connD.id, "outside", Position.Right, false, true),
  ];
  connectors.push(connD);

  const connE = createConnector(ConnectorDirection.Output, false, true);
  connE.handles = [
    createHandle(connE.id, "inside", Position.Right, false, true),
    createHandle(connE.id, "outside", Position.Right, false, true),
  ];
  connectors.push(connE);

  const connF = createConnector(ConnectorDirection.Output, false, true);
  connF.handles = [
    createHandle(connF.id, "inside", Position.Right, false, true),
    createHandle(connF.id, "outside", Position.Right, false, true),
  ];
  connectors.push(connF);

  return connectors;
};

const meta: Meta<typeof FlowConnectorComponent> = {
  title: "Atoms/Flow/Connector",
  component: FlowConnectorComponent,
  args: {
    connectors: defaultConnectors(),
    direction: ConnectorDirection.Input,
    side: "inside",
    storybook: true,
  },
};

type Story = StoryObj<typeof FlowConnectorComponent>;

export const Default: Story = {};

export default meta;
