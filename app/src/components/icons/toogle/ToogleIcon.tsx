import styled from "styled-components";
import { svgMixin } from "../common/svgMixin";
import { SvgProps } from "../common/svgProps";
import Collapse from "./collapse.jsx.svg";
import CollapseAccordion from "./collapseAccordion.jsx.svg";
import CollapseAccordionNested from "./collapseAccordionNested.jsx.svg";
import CollapseWhite from "./collapseWhite.jsx.svg";
import Expanded from "./expand.jsx.svg";
import ExpandedAccordion from "./expandAccordion.jsx.svg";
import ExpandedAccordionNested from "./expandAccordionNested.jsx.svg";
import ExpandedWhite from "./expandWhite.jsx.svg";
import ToogleDown from "./toggleDown.jsx.svg";
import ToogleUp from "./toggleUp.jsx.svg";

export const ToogleDownIcon = styled(ToogleDown)<SvgProps>`
  ${svgMixin};
`;

export const ToogleUpIcon = styled(ToogleUp)<SvgProps>`
  ${svgMixin};
`;

export const ExpandedIcon = styled(Expanded)<SvgProps>`
  ${svgMixin};
`;
export const ExpandedWhiteIcon = styled(ExpandedWhite)<SvgProps>`
  ${svgMixin};
`;

export const CollapseIcon = styled(Collapse)<SvgProps>`
  ${svgMixin};
`;
export const CollapseAccordionIcon = styled(CollapseAccordion)<SvgProps>`
  ${svgMixin};
`;

export const CollapseAccordionNestedIcon = styled(CollapseAccordionNested)<SvgProps>`
  ${svgMixin};
`;

export const CollapseWhiteIcon = styled(CollapseWhite)<SvgProps>`
  ${svgMixin};
`;

export const ExpandedAccordionIcon = styled(ExpandedAccordion)<SvgProps>`
  ${svgMixin};
`;

export const ExpandedAccordionNestedIcon = styled(ExpandedAccordionNested)<SvgProps>`
  ${svgMixin};
`;
