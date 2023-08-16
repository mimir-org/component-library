import { Meta, StoryObj } from "@storybook/react";
import { TokenCheckbox } from "./TokenCheckbox";

const meta: Meta<typeof TokenCheckbox> = {
  title: "Atoms/Tokens/TokenCheckbox",
  component: TokenCheckbox,
  args: {
    children: "Token",
    checked: false,
  },
};

type Story = StoryObj<typeof TokenCheckbox>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export default meta;
