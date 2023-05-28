import { css } from "styled-components";
import { Display } from "../../../props/display";

export const displayMixin = css<Display>`
  display: ${(props) => props.display};
  overflow: ${(props) => props.overflow};
  text-overflow: ${(props) => props.textOverflow};
  visibility: ${(props) => props.visibility};
  white-space: ${(props) => props.whiteSpace};
`;
