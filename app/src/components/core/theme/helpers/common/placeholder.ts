import { css } from "styled-components";

/**
 * Common placeholder style for several components
 */
export const placeholder = css`
  ::placeholder {
    font: ${(props) => props.theme.mimir.typography.roles.body.medium.font};
    letter-spacing: ${(props) => props.theme.mimir.typography.roles.body.medium.letterSpacing};
    line-height: ${(props) => props.theme.mimir.typography.roles.body.medium.lineHeight};
    color: ${(props) => props.theme.mimir.color.outline.base};
  }
`;
