import Library from "./library.jsx.svg";
import styled from "styled-components";
import { SvgProps } from "../common/svgProps";
import { svgMixin } from "../common/svgMixin";

export const LibraryIcon = styled(Library)<SvgProps>`
  ${svgMixin};
`;
