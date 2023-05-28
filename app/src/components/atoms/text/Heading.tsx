import { ElementType } from "react";
import styled from "styled-components";
import { Display, Palette, Polymorphic, Sizing, Spacings, TextVariant, Typography } from "../../core/props";
import { Ellipsis } from "../../core/props/ellipsis";
import {
  displayMixin,
  ellipsisMixin,
  getTextRole,
  paletteMixin,
  sizingMixin,
  spacingMixin,
  typographyMixin,
} from "../../core/theme/helpers";

type HeadingProps = Spacings &
  Sizing &
  Pick<Palette, "color"> &
  Pick<Display, "whiteSpace" | "display"> &
  Pick<Typography, "font" | "fontSize" | "fontWeight" | "textAlign" | "textTransform" | "wordBreak"> &
  Polymorphic<ElementType> &
  TextVariant &
  Ellipsis;

/**
 * A polymorphic component for heading elements
 *
 * @param as element to display component as (defaults to <h1>)
 * @param font overrides font of text element
 * @param fontSize overrides default size of the text element
 * @param fontWeight overrides default font-weight of the text element
 * @param color overrides default color of the text element
 * @param useEllipsis enable truncation of text
 * @param ellipsisMaxLines set how many lines to display before truncation
 * @constructor
 */
export const Heading = styled.h1<HeadingProps>`
  ${({ variant }) => getTextRole(variant)};
  ${spacingMixin};
  ${paletteMixin};
  ${displayMixin};
  ${ellipsisMixin};
  ${typographyMixin};
  ${sizingMixin};
`;

Heading.displayName = "Heading";

Heading.defaultProps = {
  useEllipsis: false,
  ellipsisMaxLines: 1,
};
