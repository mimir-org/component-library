import styled from "styled-components";
import { Flex } from "../../core/props";
import { flexMixin } from "../../core/theme/helpers";

export type FormFieldsetProps = Flex;

/**
 * A simple wrapper around fieldset to control padding/margins/spacing around form inputs
 */
export const FormFieldset = styled.fieldset<FormFieldsetProps>`
  display: flex;
  gap: ${(props) => props.theme.mimir.spacing.xxl};

  padding: ${(props) => props.theme.mimir.spacing.xl} ${(props) => props.theme.mimir.spacing.xl}
    ${(props) => props.theme.mimir.spacing.multiple(6)};

  border: 0;
  border-radius: ${(props) => props.theme.mimir.border.radius.medium};
  box-shadow: ${(props) => props.theme.mimir.shadow.medium};
  background-color: ${(props) => props.theme.mimir.color.text.on};

  ${flexMixin};
`;

FormFieldset.defaultProps = {
  flexDirection: "column",
};
