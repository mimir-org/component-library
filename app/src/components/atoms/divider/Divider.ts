import * as Separator from "@radix-ui/react-separator";
import styled, { css } from "styled-components";
import { mimirColorReference } from "../../core/theme/variables/color/reference/mimirColorReference";

interface DividerProps {
  orientation?: "horizontal" | "vertical";
  decorative?: boolean;
  color?: string;
}

/**
 * A simple divider for creating a clear separation between content
 *
 * See documentation link below for details.
 * @see https://www.radix-ui.com/docs/primitives/components/separator
 */
export const Divider = styled(Separator.Root)<DividerProps>`
  background-color: ${(props) =>
    props.color
      ? props.color
      : props.theme.mimirorg.color.reference === mimirColorReference
      ? props.theme.mimirorg.color.primary.base
      : props.theme.mimirorg.color.secondary.base};
  margin: 0 auto;
  height: 1px;
  width: 100%;
  flex-shrink: 0;

  ${(props) =>
    props.orientation === "vertical" &&
    css`
      height: 100%;
      margin: auto 0;
      width: 1px;
    `}
`;

Divider.defaultProps = {
  orientation: "horizontal",
  decorative: false,
};
