import Logo from "./logo.jsx.svg";
import styled from "styled-components";
import { SvgProps } from "../common/svgProps";
import { svgMixin } from "../common/svgMixin";

export const LogoIcon = styled(Logo)<SvgProps>`
  ${svgMixin};
`;

LogoIcon.defaultProps = {
  width: "100px",
  height: "25px",
};
