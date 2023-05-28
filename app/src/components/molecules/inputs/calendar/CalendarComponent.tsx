import { CalendarMonth, Delete } from "@styled-icons/material-outlined";
import { ForwardedRef, ReactElement, forwardRef, useRef, useState } from "react";
import { useTheme } from "styled-components";
import { Button } from "../../../atoms";
import { forceDate } from "../../../core/services";
import { Popover } from "../../popover/Popover";
import {
  CalendarComponentContainer,
  CalendarComponentContainerProps,
  CalendarComponentInput,
} from "./CalendarComponent.styled";
import { CalendarContent } from "./components/CalendarContent";

export type CalendarComponentProps = CalendarComponentContainerProps & {
  icon?: ReactElement;
  onChange?: (item: Date | undefined) => void;
  value?: Date | string | null;
  placeholder?: string;
  disabled?: boolean;
  reset?: boolean;
  inputHidden?: boolean;
  iconSize?: number;
  buttonHeight?: string;
};

/**
 * Component that displays a calendar button, field and calendar popover.
 *
 * @see https://github.com/wojtekmaj/react-calendar#readme
 *
 * @param text label text
 * @param checked check status
 * @constructor
 */
export const CalendarComponent = forwardRef((props: CalendarComponentProps, ref: ForwardedRef<HTMLInputElement>) => {
  const { icon, onChange, value, placeholder, disabled, reset, inputHidden, iconSize, buttonHeight, ...rest } = props;

  const popoverButtonRef = useRef<HTMLButtonElement>(null);
  const theme = useTheme();
  const [datevalue, setDateValue] = useState(forceDate(value));

  const onItemChange = (value: Date | undefined) => {
    if (value != null && value !== undefined) {
      const now = new Date();
      value.setHours(now.getHours());
      value.setMinutes(now.getMinutes());
      value.setSeconds(now.getSeconds());
      setDateValue(value);
      if (onChange != null) onChange(value);
    } else {
      setDateValue(value);
      if (onChange != null) onChange(value);
    }
    popoverButtonRef.current?.click();
  };

  const onResetClick = () => {
    setDateValue(undefined);
    if (onChange != null) onChange(undefined);
  };

  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "2-digit",
  };

  return (
    <CalendarComponentContainer {...rest}>
      <CalendarComponentInput
        type={inputHidden ? "hidden" : "text"}
        placeholder={placeholder}
        value={datevalue?.toLocaleDateString("no", options) ?? ""}
        disabled={true}
        isDisabled={disabled}
      />
      {reset && (
        <Button
          spacing={{ ml: theme.mimir.spacing.s }}
          icon={icon != null ? icon : <Delete size={iconSize} />}
          iconOnly
          variant="outlined"
          disabled={disabled}
          onClick={onResetClick}
          height={buttonHeight}
        >
          Kalender
        </Button>
      )}
      <Popover
        content={
          <CalendarContent onItemChange={onItemChange} value={datevalue != null ? datevalue : undefined} ref={ref} />
        }
      >
        <Button
          spacing={{ ml: theme.mimir.spacing.s }}
          icon={icon != null ? icon : <CalendarMonth size={iconSize} />}
          iconOnly
          variant="outlined"
          disabled={disabled}
          ref={popoverButtonRef}
          height={buttonHeight}
        >
          Kalender
        </Button>
      </Popover>
    </CalendarComponentContainer>
  );
});

CalendarComponent.displayName = "CalendarComponent";
CalendarComponent.defaultProps = {
  alignItems: "center",
  alignContent: "center",
  value: undefined,
  placeholder: "The date is not set",
  disabled: false,
  reset: false,
  inputHidden: false,
  iconSize: 24,
  buttonHeight: "32",
};
