import { css } from "styled-components";
import { Palette } from "../../../props/palette";

export const paletteMixin = css<Palette>`
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor};
`;
