import styled from "styled-components";
import { TextTypes } from "../../core/props";
import { getTextRole } from "../../core/theme/helpers";

interface FormFieldLabelTextProps {
  indent?: boolean;
  variant: TextTypes;
}

export const FormFieldLabelText = styled.span<FormFieldLabelTextProps>`
  ${({ variant }) => getTextRole(variant)}
  color: ${(props) => props.theme.mimirorg.color.text.base};
  padding-left: ${(props) => props.indent && props.theme.mimirorg.spacing.l};
  border-left: ${(props) => props.indent && "1px solid transparent"};
`;
