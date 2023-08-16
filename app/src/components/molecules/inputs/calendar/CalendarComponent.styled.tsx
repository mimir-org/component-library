import { HTMLAttributes } from "react";
import styled, { css } from "styled-components";
import { Flex, Sizing, Spacings } from "../../../core/props";
import { flexMixin, sizingMixin, spacingMixin } from "../../../core/theme/helpers";
import { InputContainer } from "../input/Input.styled";
import { compactCalendar } from "./variants/compactCalendar";

export type CalendarVariant = "standard" | "compact";

export type CalendarComponentContainerProps = Flex &
  Sizing &
  Spacings &
  Omit<HTMLAttributes<HTMLDivElement>, "onChange"> & {
    variant?: CalendarVariant;
  };

export const CalendarComponentContainer = styled.div<CalendarComponentContainerProps>`
  display: flex;

  ${({ variant }) => {
    switch (variant) {
      case "compact": {
        return compactCalendar();
      }
    }
  }};

  ${flexMixin};
  ${sizingMixin};
  ${spacingMixin};
`;

CalendarComponentContainer.defaultProps = {
  variant: "standard",
};

interface CalendarComponentInputProps {
  isDisabled?: boolean;
}

/**
 * The input for the calendar is always disabled, since the user interacts with the calendar through a button and modal.
 * To explicitly style the input when the "whole" calendar is disabled we use a custom isDisabled property for the input.
 */
export const CalendarComponentInput = styled(InputContainer)<CalendarComponentInputProps>`
  height: 100%;
  width: 100%;

  :disabled {
    color: ${(props) => props.theme.mimirorg.color.surface.variant.on};
    background-color: ${(props) => props.theme.mimirorg.color.surface.variant.base};
  }

  ${({ theme, isDisabled }) =>
    isDisabled &&
    css`
      color: ${theme.mimirorg.color.surface.variant.on} !important;
      background-color: ${theme.mimirorg.color.outline.base} !important;
    `};
`;
