import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Molecules/Checkbox",
  component: Checkbox,
};

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    checked: true,
    disabled: true,
  },
};

export default meta;
