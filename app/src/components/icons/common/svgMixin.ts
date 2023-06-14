import { css } from "styled-components";
import { sizingMixin } from "../../core/theme/helpers";
import { SvgProps } from "./svgProps";

export const svgMixin = css<SvgProps>`
  display: inline-block;
  width: ${(props) => (props.size ? `${props.size}px` : "1em")};
  height: ${(props) => (props.size ? `${props.size}px` : "1em")};
  line-height: 1;
  ${sizingMixin};
`;
