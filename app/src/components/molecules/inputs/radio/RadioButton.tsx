import { RadioGroupItemProps } from "@radix-ui/react-radio-group";
import { useState } from "react";
import { useTheme } from "styled-components";
import { Text } from "../../../atoms";
import { Flexbox } from "../../../layouts";
import { OptionItem } from "../../../types";
import { MotionRadioButtonRoot, RadioGroupIndicator, RadioGroupItem } from "./RadioButton.styled";

export type RadioGroupProps = RadioGroupItemProps & {
  options?: OptionItem[];
  direction?: "row" | "column";
  onRadioChange?: (item: OptionItem) => void;
};

/**
 * A simple Radio button wrapper, with styling that follows library conventions.
 *
 * @see https://www.radix-ui.com/docs/primitives/components/radio-group
 *
 * @constructor
 */
export const RadioButton = ({ options, direction, onRadioChange, ...rest }: RadioGroupProps) => {
  const theme = useTheme();
  const [items, setItems] = useState(options);

  const onValueChange = (value: string) => {
    const list = items?.map((item) => {
      if (item.value === value) {
        if (onRadioChange != null) {
          onRadioChange({ ...item, checked: true });
        }
        return { ...item, checked: true };
      } else {
        return { ...item, checked: false };
      }
    });
    setItems(list);
  };

  return (
    <>
      {options && (
        <MotionRadioButtonRoot onValueChange={onValueChange} orientation={direction} {...rest}>
          {items &&
            items.map((item) => {
              return (
                <Flexbox key={item.value} alignItems={"center"} alignContent="center">
                  <RadioGroupItem checked={item.checked} value={item.value} id={item.value}>
                    <RadioGroupIndicator />
                  </RadioGroupItem>
                  <Text htmlFor={item.value} as="label" variant="label-medium" spacing={{ ml: theme.mimir.spacing.l }}>
                    {item.label}
                  </Text>
                </Flexbox>
              );
            })}
        </MotionRadioButtonRoot>
      )}
    </>
  );
};

RadioButton.displayName = "RadioButton";
RadioButton.defaultProps = {
  options: [] as OptionItem[],
  direction: "row",
};
