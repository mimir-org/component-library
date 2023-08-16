import styled from "styled-components";
import { Palette, Sizing } from "../../core/props";
import { focus, paletteMixin, sizingMixin, translucify } from "../../core/theme/helpers";

export type PopoverContentProps = Sizing & Palette;

export const PopoverContent = styled.div<PopoverContentProps>`
  padding: ${(props) => props.theme.mimirorg.spacing.xl};
  border-radius: ${(props) => props.theme.mimirorg.border.radius.large};
  background-color: ${(props) => translucify(props.theme.mimirorg.color.surface.base, 0.98)};
  color: ${(props) => props.theme.mimirorg.color.surface.on};
  box-shadow: ${(props) => props.theme.mimirorg.shadow.small};
  ${paletteMixin};
  ${sizingMixin};
  ${focus};
`;
