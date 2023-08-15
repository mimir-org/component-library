import { Meta, StoryObj } from "@storybook/react";
import { TokenCheckbox } from "./TokenCheckbox";

const meta: Meta<typeof TokenCheckbox> = {
  title: "Atoms/Tokens/TokenCheckbox",
  component: TokenCheckbox,
};

type Story = StoryObj<typeof TokenCheckbox>;

export const Default: Story = {
  render: () => <TokenCheckbox>Token</TokenCheckbox>,
};

export const Checked: Story = {
  render: () => <TokenCheckbox checked={true}>Token</TokenCheckbox>,
};

export default meta;
