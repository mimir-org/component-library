import styled from "styled-components";
import { focus, getTextRole, placeholder, sizingMixin } from "../../../core/theme/helpers";
import { InputProps } from "./Input";

export const InputContainer = styled.input<InputProps>`
  height: 100%;
  width: 100%;

  border: 1px solid ${(props) => props.theme.mimir.color.outline.base};
  border-radius: ${(props) => props.theme.mimir.border.radius.medium};
  padding: ${(props) => props.theme.mimir.spacing.base} ${(props) => props.theme.mimir.spacing.l};
  padding-right: ${(props) => props.icon && props.iconPlacement === "right" && props.theme.mimir.spacing.multiple(6)};
  padding-left: ${(props) => props.icon && props.iconPlacement === "left" && props.theme.mimir.spacing.multiple(6)};

  background-color: ${(props) => props.theme.mimir.color.pure.base};
  color: ${(props) => props.theme.mimir.color.background.on};

  :disabled {
    color: ${(props) => props.theme.mimir.color.surface.variant.on};
    background-color: ${(props) => props.theme.mimir.color.outline.base};
  }

  box-sizing: border-box;

  ${getTextRole("body-large")};
  ${sizingMixin};
  ${placeholder};
  ${focus};
`;

export const InputIconContainer = styled.span<InputProps>`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  left: ${(props) => props.icon && props.iconPlacement === "left" && props.theme.mimir.spacing.xl};
  right: ${(props) => props.icon && props.iconPlacement === "right" && props.theme.mimir.spacing.xl};
  color: ${(props) => props.theme.mimir.color.primary.base};
  line-height: 0;

  img,
  svg {
    width: 24px;
    height: 24px;
  }
`;
