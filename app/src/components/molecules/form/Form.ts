import { FormHTMLAttributes } from "react";
import styled from "styled-components";
import { Flex } from "../../core/props";
import { flexMixin } from "../../core/theme/helpers";

type FormProps = FormHTMLAttributes<HTMLFormElement> & Flex;

/**
 * A simple wrapper around form to control general form layout
 */
export const Form = styled.form<FormProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${(props) => props.theme.mimirorg.spacing.xxxl};
  width: 100%;

  ${flexMixin};
`;
