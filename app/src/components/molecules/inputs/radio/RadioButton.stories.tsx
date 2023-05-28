import { Meta, StoryObj } from "@storybook/react";
import { OptionItem } from "../../../types";
import { RadioButton } from "./RadioButton";

const mockData: OptionItem[] = [
  { value: "12234", label: "Item A", checked: false },
  { value: "12334", label: "Item B", checked: true },
  { value: "12434", label: "Item C", checked: false },
];

const meta: Meta = {
  title: "Molecules/Radio",
  component: RadioButton,
};

export const Default: StoryObj<typeof RadioButton> = {
  args: {
    options: mockData,
    direction: "row",
  },
};

export default meta;
