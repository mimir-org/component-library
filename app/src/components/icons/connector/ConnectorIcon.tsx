import styled from "styled-components";
import { svgMixin } from "../common/svgMixin";
import { SvgProps } from "../common/svgProps";
import ConnectorBidirectional from "./connectorBidirectionalIcon.jsx.svg";
import ConnectorDownstream from "./connectorDownstreamIcon.jsx.svg";
import Connector from "./connectorIcon.jsx.svg";
import ConnectorLocation from "./connectorLocationIcon.jsx.svg";
import ConnectorProduct from "./connectorProductIcon.jsx.svg";
import ConnectorTreeview from "./connectorTreeviewIcon.jsx.svg";
import ConnectorUpstream from "./connectorUpstreamIcon.jsx.svg";
import ConnectorVertical from "./connectorVerticalIcon.jsx.svg";

export const ConnectorBidirectionalIcon = styled(ConnectorBidirectional)<SvgProps>`
  ${svgMixin};
`;

export const ConnectorDownstreamIcon = styled(ConnectorDownstream)<SvgProps>`
  ${svgMixin};
`;

export const ConnectorIcon = styled(Connector)<SvgProps>`
  ${svgMixin};
`;

export const ConnectorLocationIcon = styled(ConnectorLocation)<SvgProps>`
  ${svgMixin};
`;

export const ConnectorProductIcon = styled(ConnectorProduct)<SvgProps>`
  ${svgMixin};
`;

export const ConnectorTreeviewIcon = styled(ConnectorTreeview)<SvgProps>`
  ${svgMixin};
`;

export const ConnectorUpstreamIcon = styled(ConnectorUpstream)<SvgProps>`
  ${svgMixin};
`;

export const ConnectorVerticalIcon = styled(ConnectorVertical)<SvgProps>`
  ${svgMixin};
`;
