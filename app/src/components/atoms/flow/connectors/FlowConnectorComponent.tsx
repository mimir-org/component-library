import { Handle } from "react-flow-renderer";
import { ConnectorDirection, FlowConnector, FlowHandle } from "../../../core/types";
import { ConnectorIcon } from "../../../icons";
import { FlowHandleBox, FlowHandleContainer, FlowHandleProps } from "./FlowConnector.styled";

export type FlowConnectorComponentProps = FlowHandleProps & {
  connectors: FlowConnector[];
  direction: ConnectorDirection;
  side: "inside" | "outside";
  storybook?: boolean;
};

/**
 * A flow connector collection component.
 * The component is used to draw all connectors from a given list.
 * If the connector has property hidden, the connector will be removed from the list. The visible property is only visually
 * hiding the connector with css.
 *
 * @param connectors a collection of connectors, default is empty collection
 * @param direction a collection direction filter, default is left connectors
 * @constructor
 */
export const FlowConnectorComponent = (props: FlowConnectorComponentProps) => {
  const { connectors, direction, ...delegated } = props;
  const filteredConnectors = connectors?.filter((x) => x.direction === direction && !x.hidden);

  return (
    <FlowHandleContainer {...delegated}>
      {filteredConnectors &&
        filteredConnectors.map((x) => {
          if (x.hidden) return null;
          return (
            <FlowHandleComponent
              key={`handle-${x.id}`}
              handles={x.handles.filter((x) => !x.hidden)}
              connectors={connectors}
              direction={direction}
              {...delegated}
            />
          );
        })}
    </FlowHandleContainer>
  );
};

FlowConnectorComponent.displayName = "FlowConnectorComponent";
FlowConnectorComponent.defaultProps = {
  connectors: [] as FlowConnector[],
  direction: ConnectorDirection.Input,
  storybook: false,
  connectorWidth: 20,
  connectorHeight: 20,
};

export type FlowHandleComponentProps = FlowConnectorComponentProps & {
  handles?: FlowHandle[];
};

/**
 * Handle part of a connector.
 * @param props Inherit props from parent component
 * @returns
 */
const FlowHandleComponent = (props: FlowHandleComponentProps) => {
  const { handles, connectorWidth, connectorHeight, storybook } = props;

  const calculateTopPosition = (handle: FlowHandle, side: "inside" | "outside"): string => {
    if (side === "inside" && handle.side === "outside") return "-24px";
    if (side === "outside" && handle.side === "inside") return "24px";
    return "0px";
  };

  return (
    <>
      {handles?.map((x) => {
        return (
          <FlowHandleBox
            key={x.id}
            id={`handle-${x.id}`}
            top={calculateTopPosition(x, props.side)}
            left={"0px"}
            visible={x.side === props.side}
            hidden={x.hidden}
          >
            <ConnectorIcon
              style={{ fill: x.color }}
              className={x.className}
              width={`${connectorWidth}px`}
              height={`${connectorHeight}px`}
            />
            {!storybook && (
              <Handle hidden={x.hidden} type={x.handleType} position={x.position} id={x.id} className={x.className} />
            )}
          </FlowHandleBox>
        );
      })}
    </>
  );
};

FlowHandleComponent.displayName = "FlowHandleComponent";
FlowHandleComponent.defaultProps = {
  handles: [],
  storybook: false,
  connectorWidth: 20,
  connectorHeight: 20,
};
