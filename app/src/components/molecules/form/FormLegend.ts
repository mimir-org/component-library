import styled from "styled-components";

export type FormLegendProps = {
  backgroundColor?: string;
  color?: string;
};

/**
 * A simple wrapper around legend
 */
export const FormLegend = styled.legend<FormLegendProps>`
  color: ${(props) => (props.color != null ? props.color : props.theme.mimir.color.text.on)};
  background-color: ${(props) =>
    props.backgroundColor != null ? props.backgroundColor : props.theme.mimir.color.primary.base};
  padding: ${(props) => props.theme.mimir.spacing.s} ${(props) => props.theme.mimir.spacing.l};
  padding-top: ${(props) => props.theme.mimir.spacing.s};
  margin-bottom: ${(props) => props.theme.mimir.spacing.xl};
  border-radius: ${(props) => props.theme.mimir.border.radius.small};
  box-shadow: ${(props) => props.theme.mimir.shadow.medium};
`;
