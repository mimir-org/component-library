import { css } from "styled-components";
import { Ellipsis } from "../../../props/ellipsis";

export const ellipsisMixin = css<Ellipsis>`
  ${({ useEllipsis, ellipsisMaxLines }) => {
    if (!useEllipsis) return "";

    if (ellipsisMaxLines === 1)
      return css`
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      `;

    if (ellipsisMaxLines && ellipsisMaxLines > 1)
      return css`
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: ${ellipsisMaxLines};
        overflow: hidden;
      `;
  }}
`;
