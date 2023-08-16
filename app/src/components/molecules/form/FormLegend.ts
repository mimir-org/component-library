import styled from "styled-components";

export type FormLegendProps = {
  backgroundColor?: string;
  color?: string;
};

/**
 * A simple wrapper around legend
 */
export const FormLegend = styled.legend<FormLegendProps>`
  color: ${(props) => (props.color != null ? props.color : props.theme.mimirorg.color.text.on)};
  background-color: ${(props) =>
    props.backgroundColor != null ? props.backgroundColor : props.theme.mimirorg.color.primary.base};
  padding: ${(props) => props.theme.mimirorg.spacing.s} ${(props) => props.theme.mimirorg.spacing.l};
  padding-top: ${(props) => props.theme.mimirorg.spacing.s};
  margin-bottom: ${(props) => props.theme.mimirorg.spacing.xl};
  border-radius: ${(props) => props.theme.mimirorg.border.radius.small};
  box-shadow: ${(props) => props.theme.mimirorg.shadow.medium};
`;
