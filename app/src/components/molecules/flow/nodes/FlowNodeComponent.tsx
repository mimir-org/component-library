import { useMimirorgTheme } from "../../../..";
import { FlowConnectorComponent, LogoBox, Symbol, SymbolBox, Text } from "../../../atoms";

import { ConnectorDirection, FlowConnector } from "../../../core/types";
import { FlowNodeBox, FlowNodeBoxProps, FlowNodeContainer, FlowNodeContentBox } from "./FlowNodeComponent.styled";

export type FlowNodeComponentProps = FlowNodeBoxProps & {
  connectors: FlowConnector[];
  storybook?: boolean;
  title?: string;
  symbol?: string;
  logo?: string;
};

/**
 * A button with different variants.
 * A typical use case is in forms or navigation purposes.
 * original component props with the props of the supplied element/component and change the underlying DOM node.
 *
 * @param props Typical button properties as sizing, spacing, icons and variants.
 * @constructor
 */
export const FlowNodeComponent = (props: FlowNodeComponentProps) => {
  const theme = useMimirorgTheme();
  const { connectors, title, symbol, logo, ...delegated } = props;

  return (
    <>
      {props.hidden == null ||
        (!props.hidden && (
          <FlowNodeContainer>
            <FlowConnectorComponent
              side="inside"
              direction={ConnectorDirection.Input}
              connectors={connectors}
              {...delegated}
            />
            <FlowNodeBox {...delegated} className={props.selected ? "selected" : ""}>
              <FlowNodeContentBox>
                {title != null && (
                  <Text
                    as="p"
                    variant="title-medium"
                    fontWeight={theme.typography.typeface.weights.bold}
                    useEllipsis={true}
                    ellipsisMaxLines={2}
                  >
                    {title}
                  </Text>
                )}
                {title != null && symbol != null && (
                  <SymbolBox>
                    <Symbol source={symbol} text={`${title} symbol`} />
                  </SymbolBox>
                )}
                {logo != null && (
                  <LogoBox className="FlowNodeComponent-LogoBox">
                    <Symbol source={logo} text={"Logo"} />
                  </LogoBox>
                )}
              </FlowNodeContentBox>
            </FlowNodeBox>

            <FlowConnectorComponent
              side="outside"
              direction={ConnectorDirection.Output}
              connectors={connectors}
              {...delegated}
            />
          </FlowNodeContainer>
        ))}
    </>
  );
};

FlowNodeComponent.displayName = "FlowNodeComponent";
FlowNodeComponent.defaultProps = {
  connectors: [],
  storybook: false,
  title: undefined,
  symbol: undefined,
  logo: undefined,
  colorMain: "#FEF445",
  colorSelected: "#FBC913",
  selected: false,
  hidden: false,
  visible: true,
  nodeWidth: 160,
  nodeHeight: 95,
  connectorWidth: 19,
  connectorHeight: 19,
};
