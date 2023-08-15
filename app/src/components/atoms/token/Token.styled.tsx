import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { focus } from "../../core/theme/helpers";
import { TokenBaseProps } from "./Token";
import { primaryToken } from "./variants/primaryToken";
import { secondaryToken } from "./variants/secondaryToken";

export const tokenBaseStyle = css<TokenBaseProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.theme.mimirorg.spacing.s};

  height: 32px;
  max-width: 166px;
  min-width: 65px;
  width: fit-content;

  border: 0;
  padding: ${(props) => props.theme.mimirorg.spacing.base};

  ${focus};

  ${({ variant, ...props }) => {
    const { color, spacing } = props.theme.mimirorg;

    switch (variant) {
      case "primary": {
        return primaryToken(color);
      }
      case "secondary": {
        return secondaryToken(color, spacing);
      }
    }
  }};

  ${({ $interactive, ...props }) =>
    $interactive &&
    css`
      :hover {
        cursor: pointer;
      }

      :active {
        background-color: ${props.theme.mimirorg.color.tertiary.container?.base};
      }
    `};

  ${({ $selected, ...props }) =>
    $selected &&
    css`
      background-color: ${props.theme.mimirorg.color.tertiary.container?.base};
    `};

  &[aria-checked="true"] {
    background-color: ${(props) => props.theme.mimirorg.color.tertiary.container?.base};
  }
`;

export const TokenContainer = styled.span<TokenBaseProps>`
  ${tokenBaseStyle}
`;

TokenContainer.defaultProps = {
  variant: "primary",
};

/**
 * An animation wrapper for the TokenContainer component
 *
 * @see https://github.com/framer/motion
 */
export const MotionTokenContainer = motion(TokenContainer);
