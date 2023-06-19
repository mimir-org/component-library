import styled from "styled-components";
import { svgMixin } from "../common/svgMixin";
import { SvgProps } from "../common/svgProps";
import Checkmark from "./checkmark.jsx.svg";
import CheckmarkChecked from "./checkmarkChecked.jsx.svg";
import CheckmarkEmpty from "./checkmarkEmpty.jsx.svg";

export const CheckmarkIcon = styled(Checkmark)<SvgProps>`
  ${svgMixin};
`;

export const CheckmarkCheckedIcon = styled(CheckmarkChecked)<SvgProps>`
  ${svgMixin};
`;

export const CheckmarkEmptyIcon = styled(CheckmarkEmpty)<SvgProps>`
  ${svgMixin};
`;
