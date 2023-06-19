import styled from "styled-components";
import { svgMixin } from "../common/svgMixin";
import { SvgProps } from "../common/svgProps";
import Delete from "./delete.jsx.svg";
import DeleteActive from "./deleteActive.jsx.svg";
import DeleteDisabled from "./deleteDisabled.jsx.svg";

export const DeleteIcon = styled(Delete)<SvgProps>`
  ${svgMixin};
`;

export const DeleteActiveIcon = styled(DeleteActive)<SvgProps>`
  ${svgMixin};
`;

export const DeleteDisabledIcon = styled(DeleteDisabled)<SvgProps>`
  ${svgMixin};
`;
