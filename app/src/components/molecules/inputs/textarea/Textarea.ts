import { TextareaHTMLAttributes } from "react";
import styled from "styled-components";
import { Sizing } from "../../../core/props";
import { focus, getTextRole, placeholder, sizingMixin } from "../../../core/theme/helpers";

/**
 * A simple wrapper over the textarea-tag, with styling that follows library conventions.
 */

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & Sizing;

export const Textarea = styled.textarea<TextareaProps>`
  border: 1px solid ${(props) => props.theme.mimir.color.outline.base};
  border-radius: ${(props) => props.theme.mimir.border.radius.medium};
  min-height: 150px;
  width: 100%;
  padding: ${(props) => props.theme.mimir.spacing.base};
  color: ${(props) => props.theme.mimir.color.text.base};

  background-color: ${(props) => props.theme.mimir.color.pure.base};
  color: ${(props) => props.theme.mimir.color.background.on};

  :disabled {
    color: ${(props) => props.theme.mimir.color.surface.variant.on};
    background-color: ${(props) => props.theme.mimir.color.outline.base};
  }

  ${getTextRole("body-large")};
  ${focus};
  ${placeholder};
  ${sizingMixin};
`;
