import { css } from "styled-components";
import { Borders } from "../../../props/borders";

export const bordersMixin = css<Borders>`
  border: ${(props) => props.border};
  border-top: ${(props) => props.borderTop};
  border-left: ${(props) => props.borderLeft};
  border-right: ${(props) => props.borderRight};
  border-bottom: ${(props) => props.borderBottom};
  border-color: ${(props) => props.borderColor};
  border-top-color: ${(props) => props.borderTopColor};
  border-right-color: ${(props) => props.borderRightColor};
  border-bottom-color: ${(props) => props.borderBottomColor};
  border-left-color: ${(props) => props.borderLeftColor};
  border-radius: ${(props) => props.borderRadius};
`;
