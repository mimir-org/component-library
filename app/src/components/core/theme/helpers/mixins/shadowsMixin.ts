import { css } from "styled-components";
import { Shadows } from "../../../props/shadows";

export const shadowsMixin = css<Shadows>`
  box-shadow: ${(props) => props.boxShadow};
`;
