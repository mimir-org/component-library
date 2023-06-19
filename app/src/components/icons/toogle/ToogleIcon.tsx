import styled from "styled-components";
import { svgMixin } from "../common/svgMixin";
import { SvgProps } from "../common/svgProps";
import ToogleDown from "./toggleDown.jsx.svg";
import ToogleUp from "./toggleUp.jsx.svg";

export const ToogleDownIcon = styled(ToogleDown)<SvgProps>`
  ${svgMixin};
`;

export const ToogleUpIcon = styled(ToogleUp)<SvgProps>`
  ${svgMixin};
`;
