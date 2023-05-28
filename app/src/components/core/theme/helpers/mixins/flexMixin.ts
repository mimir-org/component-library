import { css } from "styled-components";
import { Flex } from "../../../props/flex";

export const flexMixin = css<Flex>`
  flex: ${(props) => props.flex};
  flex-grow: ${(props) => props.flexGrow};
  flex-wrap: ${(props) => props.flexWrap};
  flex-shrink: ${(props) => props.flexShrink};
  flex-direction: ${(props) => props.flexDirection};
  flex-flow: ${(props) => props.flexFlow};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  align-content: ${(props) => props.alignContent};
  align-self: ${(props) => props.alignSelf};
  order: ${(props) => props.order};
  gap: ${(props) => props.gap};
`;
