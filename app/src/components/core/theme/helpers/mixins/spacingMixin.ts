import { css } from "styled-components";
import { Spacings } from "../../../props";

export const spacingMixin = css<Spacings>`
  padding: ${(props) => props.spacing?.p};
  ${(props) =>
    props.spacing?.px &&
    `
    padding-left: ${props.spacing?.px};
    padding-right: ${props.spacing?.px};
  `}
  ${(props) =>
    props.spacing?.py &&
    `
    padding-top: ${props.spacing?.py};
    padding-bottom: ${props.spacing?.py};
  `}
  padding-top: ${(props) => props.spacing?.pt};
  padding-right: ${(props) => props.spacing?.pr};
  padding-bottom: ${(props) => props.spacing?.pb};
  padding-left: ${(props) => props.spacing?.pl};

  margin: ${(props) => props.spacing?.m};
  ${(props) =>
    props.spacing?.mx &&
    `
    margin-left: ${props.spacing?.mx};
    margin-right: ${props.spacing?.mx};
  `}
  ${(props) =>
    props.spacing?.my &&
    `
    margin-top: ${props.spacing?.my};
    margin-bottom: ${props.spacing?.my};
  `}
  margin-top: ${(props) => props.spacing?.mt};
  margin-right: ${(props) => props.spacing?.mr};
  margin-bottom: ${(props) => props.spacing?.mb};
  margin-left: ${(props) => props.spacing?.ml};
`;
