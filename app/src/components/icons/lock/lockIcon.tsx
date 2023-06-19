import styled from "styled-components";
import { svgMixin } from "../common/svgMixin";
import { SvgProps } from "../common/svgProps";
import Lock from "./lock.jsx.svg";
import LockClosed from "./lockClosed.jsx.svg";
import LockOpen from "./lockOpen.jsx.svg";

export const LockIcon = styled(Lock)<SvgProps>`
  ${svgMixin};
`;

export const LockClosedIcon = styled(LockClosed)<SvgProps>`
  ${svgMixin};
`;

export const LockOpenIcon = styled(LockOpen)<SvgProps>`
  ${svgMixin};
`;
