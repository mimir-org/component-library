import styled from "styled-components";
import { Flex } from "../../core/props";
import { flexMixin } from "../../core/theme/helpers";

export type FormFieldsetProps = Flex;

/**
 * A simple wrapper around fieldset to control padding/margins/spacing around form inputs
 */
export const FormFieldset = styled.fieldset<FormFieldsetProps>`
  display: flex;
  gap: ${(props) => props.theme.mimirorg.spacing.xxl};

  padding: ${(props) => props.theme.mimirorg.spacing.xl} ${(props) => props.theme.mimirorg.spacing.xl}
    ${(props) => props.theme.mimirorg.spacing.multiple(6)};

  border: 0;
  border-radius: ${(props) => props.theme.mimirorg.border.radius.medium};
  box-shadow: ${(props) => props.theme.mimirorg.shadow.medium};
  background-color: ${(props) => props.theme.mimirorg.color.text.on};

  ${flexMixin};
`;

FormFieldset.defaultProps = {
  flexDirection: "column",
};
