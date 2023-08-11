import { TextareaHTMLAttributes } from "react";
import styled from "styled-components";
import { Sizing } from "../../../core/props";
import { focus, getTextRole, placeholder, sizingMixin } from "../../../core/theme/helpers";
import { mimirColorReference } from "../../../core/theme/variables/color/reference/mimirColorReference";

/**
 * A simple wrapper over the textarea-tag, with styling that follows library conventions.
 */

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & Sizing;

export const Textarea = styled.textarea<TextareaProps>`
  border: 1px solid ${(props) => props.theme.mimirorg.color.outline.base};
  border-radius: ${(props) => props.theme.mimirorg.border.radius.medium};
  min-height: 150px;
  width: 100%;
  padding: ${(props) => props.theme.mimirorg.spacing.base};
  color: ${(props) =>
    props.theme.mimirorg.color.reference === mimirColorReference
      ? props.theme.mimirorg.color.text.base
      : props.theme.mimirorg.color.surface.on};

  background-color: ${(props) => props.theme.mimirorg.color.pure.base};
  color: ${(props) => props.theme.mimirorg.color.background.on};

  :disabled {
    color: ${(props) => props.theme.mimirorg.color.surface.variant.on};
    background-color: ${(props) => props.theme.mimirorg.color.outline.base};
  }

  ${getTextRole("body-large")};
  ${focus};
  ${placeholder};
  ${sizingMixin};
`;
