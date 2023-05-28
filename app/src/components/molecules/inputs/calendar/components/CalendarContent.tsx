import { ForwardedRef, forwardRef } from "react";
import { CalendarContentContainer } from "./CalendarContent.styled";
import { Calendar } from "react-calendar";

export interface CalendarContentProps {
  value: Date | string | null | undefined;
  onItemChange: (item: Date | undefined) => void;
}

export const CalendarContent = forwardRef((props: CalendarContentProps, ref: ForwardedRef<HTMLInputElement>) => {
  const { value, onItemChange } = props;
  return (
    <CalendarContentContainer>
      <Calendar
        locale={"no"}
        inputRef={ref}
        onChange={(value) => onItemChange(value ?? undefined)}
        value={value ?? undefined}
      />
    </CalendarContentContainer>
  );
});

CalendarContent.displayName = "CalendarContent";
