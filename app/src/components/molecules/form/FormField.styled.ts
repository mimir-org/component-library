import styled from "styled-components";
import { TextTypes } from "../../core/props";
import { getTextRole } from "../../core/theme/helpers";
import { mimirColorReference } from "../../core/theme/variables/color/reference/mimirColorReference";

interface FormFieldLabelTextProps {
  indent?: boolean;
  variant: TextTypes;
}

export const FormFieldLabelText = styled.span<FormFieldLabelTextProps>`
  ${({ variant }) => getTextRole(variant)}
  color: ${(props) =>
    props.theme.mimirorg.color.reference === mimirColorReference
      ? props.theme.mimirorg.color.text.base
      : props.theme.mimirorg.color.surface.variant.on};
  padding-left: ${(props) => props.indent && props.theme.mimirorg.spacing.l};
  border-left: ${(props) => props.indent && "1px solid transparent"};
`;
