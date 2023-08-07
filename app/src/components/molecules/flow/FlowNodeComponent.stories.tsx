import { Meta, StoryObj } from "@storybook/react";
import { Position } from "react-flow-renderer";
import { createId } from "../../core/services";
import { ConnectorDirection, FlowConnector, FlowHandle } from "../../core/types";
import { FlowNodeComponent } from "./nodes/FlowNodeComponent";

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

const meta: Meta<typeof FlowNodeComponent> = {
  title: "Molecules/Flow/Node",
  component: FlowNodeComponent,
  args: {
    connectors: defaultConnectors(),
    storybook: true,
    title: "Pump system",
    symbol: "https://tyleapi.imftools.com/v1/ont/symbol/c0eb50f6-9a77-4749-8c83-f1033e5d5d19",
    logo: "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NTAgMjUwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2Y2ZjZmNjt9LmNscy0ye2ZpbGw6I2U2MDA3ZTt9PC9zdHlsZT48L2RlZnM+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTAwLjg0LDE0NS45MmMwLC44Mi0uNDgsMS41Ny0xLjI0LDEuODktMy4xNiwxLjMxLTcuNjYsMi4wOC0xMC45NywyLjA4LTE3LjU0LDAtMjkuMi0xMi42Ni0yOS4yLTI4Ljg2czExLjY2LTI4Ljc1LDI5LjItMjguNzVjMy4yLDAsNy43NiwuNzYsMTAuOTMsMS45OSwuNzgsLjMsMS4yOCwxLjA3LDEuMjgsMS45MXYxMS4xYzAsMS41MS0xLjU3LDIuNDktMi45MywxLjg1LTIuNTUtMS4yMS01LjctMi4wOC05LjI4LTIuMDgtOC4xLDAtMTMuODgsNi4zMy0xMy44OCwxMy45OXM1Ljc3LDE0LjEsMTMuODgsMTQuMWMzLjUsMCw2LjcyLS44Nyw5LjI5LTIuMTIsMS4zNS0uNjUsMi45MiwuMzUsMi45MiwxLjg2djExLjA1WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTEzNS4yOCw5Mi4yN2MxNi4yMSwwLDI4Ljc1LDEyLjU0LDI4Ljc1LDI4Ljc1cy0xMi41NCwyOC44Ni0yOC43NSwyOC44Ni0yOC43NS0xMi42Ni0yOC43NS0yOC44NiwxMi41NC0yOC43NSwyOC43NS0yOC43NVptMCw0Mi44NWM3Ljc3LDAsMTMuMzItNi40NCwxMy4zMi0xNC4xcy01LjU1LTEzLjk5LTEzLjMyLTEzLjk5LTEzLjQzLDYuMzMtMTMuNDMsMTMuOTksNS43NywxNC4xLDEzLjQzLDE0LjFaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTg2LjUxLDk5LjkzYzIuODktNC40NCw3LjU1LTcuNjYsMTQuMS03LjY2LDcuNzcsMCwxMy44OCwzLjU1LDE2Ljk5LDkuOTksMi42Ni01LjY2LDcuOTktOS45OSwxNi4zMi05Ljk5LDEwLjY2LDAsMTguOTgsOC40NCwxOC45OCwyMC4zMnYzNC4wM2MwLDEuMTMtLjkyLDIuMDUtMi4wNSwyLjA1aC0xMC45OWMtMS4xMywwLTIuMDUtLjkyLTIuMDUtMi4wNXYtMjkuN2MwLTYuMjItMy41NS05Ljg4LTguODgtOS44OHMtOS4yMSwzLjY2LTkuMjEsOS44OHYyOS43YzAsMS4xMy0uOTIsMi4wNS0yLjA1LDIuMDVoLTEwLjk5Yy0xLjEzLDAtMi4wNS0uOTItMi4wNS0yLjA1di0yOS43YzAtNi4yMi0zLjU1LTkuODgtOC44OC05Ljg4cy04Ljg4LDMuMzMtOS4yMSw5LjF2MzAuNDhjMCwxLjEzLS45MiwyLjA1LTIuMDUsMi4wNWgtMTAuOTljLTEuMTMsMC0yLjA1LS45Mi0yLjA1LTIuMDV2LTUxLjE4YzAtMS4xMywuOTItMi4wNSwyLjA1LTIuMDVoMTAuOTljMS4xMywwLDIuMDUsLjkyLDIuMDUsMi4wNXY0LjVaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjc5LjA3LDk5LjkzYzIuODktNC40NCw3LjU1LTcuNjYsMTQuMS03LjY2LDcuNzcsMCwxMy44OCwzLjU1LDE2Ljk5LDkuOTksMi42Ni01LjY2LDcuOTktOS45OSwxNi4zMi05Ljk5LDEwLjY2LDAsMTguOTgsOC40NCwxOC45OCwyMC4zMnYzNC4wM2MwLDEuMTMtLjkyLDIuMDUtMi4wNSwyLjA1aC0xMC45OWMtMS4xMywwLTIuMDUtLjkyLTIuMDUtMi4wNXYtMjkuN2MwLTYuMjItMy41NS05Ljg4LTguODgtOS44OHMtOS4yMSwzLjY2LTkuMjEsOS44OHYyOS43YzAsMS4xMy0uOTIsMi4wNS0yLjA1LDIuMDVoLTEwLjk5Yy0xLjEzLDAtMi4wNS0uOTItMi4wNS0yLjA1di0yOS43YzAtNi4yMi0zLjU1LTkuODgtOC44OC05Ljg4cy04Ljg4LDMuMzMtOS4yMSw5LjF2MzAuNDhjMCwxLjEzLS45MiwyLjA1LTIuMDUsMi4wNWgtMTAuOTljLTEuMTMsMC0yLjA1LS45Mi0yLjA1LTIuMDV2LTUxLjE4YzAtMS4xMywuOTItMi4wNSwyLjA1LTIuMDVoMTAuOTljMS4xMywwLDIuMDUsLjkyLDIuMDUsMi4wNXY0LjVaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMzg4LjEyLDE0MS43OGMtMi43OCw0Ljc3LTcuNTUsOC4xLTE0LjU0LDguMS0xMS42NiwwLTE5LjMyLTguODgtMTkuMzItMjAuNzZ2LTMzLjdjMC0xLjEzLC45Mi0yLjA1LDIuMDUtMi4wNWgxMC45OWMxLjEzLDAsMi4wNSwuOTIsMi4wNSwyLjA1djI5LjM3YzAsNi4yMiwzLjU1LDEwLjMyLDkuMzMsMTAuMzJzOS4xLTMuNzcsOS40NC05LjU1di0zMC4xNGMwLTEuMTMsLjkyLTIuMDUsMi4wNS0yLjA1aDEwLjk5YzEuMTMsMCwyLjA1LC45MiwyLjA1LDIuMDV2NTEuMThjMCwxLjEzLS45MiwyLjA1LTIuMDUsMi4wNWgtMTAuOTljLTEuMTMsMC0yLjA1LS45Mi0yLjA1LTIuMDV2LTQuODNaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNDI4Ljk3LDEwMC4zN2MyLjkyLTQuNjUsNy40MS03LjkzLDE0LTguMSwxMS4wOC0uMjksMjAuMDgsOC45NiwyMC4wOCwyMC4wNHYzNC4zYzAsMS4xMy0uOTIsMi4wNS0yLjA1LDIuMDVoLTExLjFjLTEuMTMsMC0yLjA1LS45Mi0yLjA1LTIuMDV2LTI5LjM3YzAtNi4xMS0zLjY2LTEwLjIxLTkuNDQtMTAuMjFzLTkuMSwzLjY2LTkuNDQsOS41NXYzMC4wM2MwLDEuMTMtLjkyLDIuMDUtMi4wNSwyLjA1aC0xMC45OWMtMS4xMywwLTIuMDUtLjkyLTIuMDUtMi4wNXYtNTEuMThjMC0xLjEzLC45Mi0yLjA1LDIuMDUtMi4wNWgxMC45OWMxLjEzLDAsMi4wNSwuOTIsMi4wNSwyLjA1djQuOTRaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNTA1LjAxLDE0Ni42MXYtNDAuMzZoLTYuMzhjLTEuMTMsMC0yLjA1LS45Mi0yLjA1LTIuMDV2LTguNzdjMC0xLjEzLC45Mi0yLjA1LDIuMDUtMi4wNWg3LjI3di0xMC40NmMwLS45NiwuNjYtMS43OSwxLjYtMmwxMC4xMS0yLjI5YzEuMjgtLjI5LDIuNTEsLjY5LDIuNTEsMnYxMi43NWg3LjI3YzEuMTMsMCwyLjA1LC45MiwyLjA1LDIuMDV2OC43N2MwLDEuMTMtLjkyLDIuMDUtMi4wNSwyLjA1aC03LjI3djQwLjM2YzAsMS4xMy0uOTIsMi4wNS0yLjA1LDIuMDVoLTEwLjk5Yy0xLjEzLDAtMi4wNS0uOTItMi4wNS0yLjA1WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTU1My44NiwxNDQuNDVsLTE5LjItNDguMjZjLS41NC0xLjM1LC40Ni0yLjgxLDEuOTEtMi44MWgxMi41MmMuODYsMCwxLjYzLC41NCwxLjkzLDEuMzVsMTEuMTcsMzAuNjIsMTEuODItMzAuNjZjLjMxLS43OSwxLjA3LTEuMzEsMS45MS0xLjMxaDEyLjZjMS40NywwLDIuNDYsMS41LDEuODksMi44NWwtMzEuMTMsNzMuOTRjLS4zMiwuNzYtMS4wNywxLjI2LTEuODksMS4yNmgtMTIuOTVjLTEuNSwwLTIuNS0xLjU2LTEuODYtMi45MmwxMS4yOC0yNC4wNVoiLz48Zz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik00ODUuNTgsMTQ4LjY3aC0xMC4yMWMtMS4zNSwwLTIuNDUtMS4zLTIuNDUtMi45di00OS40OWMwLTEuNiwxLjEtMi45LDIuNDUtMi45aDEwLjIxYzEuMzUsMCwyLjQ1LDEuMywyLjQ1LDIuOXY0OS40OWMwLDEuNi0xLjEsMi45LTIuNDUsMi45WiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTQ4My41NCw5MC41NGwtNS45NS0uMDhjLTMuNDgsMC01LjMxLTQuMTMtMi45Ny02LjcxbDMuMzgtMy41NWMuNzYtLjg0LDEuODQtMS4zMSwyLjk2LTEuMzFoMTMuMTFjLjg0LDAsMS4yOCwxLC43MiwxLjYybC04LjY1LDkuMDdjLS43MywuNjItMS42NSwuOTYtMi42MSwuOTZaIi8+PC9nPjwvc3ZnPg==",
    colorMain: "#FEF445",
    colorSelected: "#FBC913",
    selected: false,
    hidden: false,
    visible: true,
    nodeWidth: 160,
    nodeHeight: 95,
    connectorWidth: 19,
    connectorHeight: 19,
  },
};

type Story = StoryObj<typeof FlowNodeComponent>;

export const Default: Story = {};

export default meta;
