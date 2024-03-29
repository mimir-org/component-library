import { css } from "styled-components";
import { Typography } from "../../../props/typography";

export const typographyMixin = css<Typography>`
  font: ${(props) => props.font};
  font-family: ${(props) => props.fontFamily};
  font-size: ${(props) => props.fontSize};
  font-style: ${(props) => props.fontStyle};
  font-weight: ${(props) => props.fontWeight};
  letter-spacing: ${(props) => props.letterSpacing};
  line-height: ${(props) => props.lineHeight};
  text-align: ${(props) => props.textAlign};
  text-transform: ${(props) => props.textTransform};
  word-break: ${(props) => props.wordBreak};
`;
