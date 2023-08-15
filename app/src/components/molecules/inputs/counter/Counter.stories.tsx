import { Meta, StoryObj } from "@storybook/react";
import { Counter } from "./Counter";

const meta: Meta<typeof Counter> = {
  title: "Molecules/Counter",
  component: Counter,
};

type Story = StoryObj<typeof Counter>;

export const Default: Story = {
  render: () => <Counter value={1} />,
};

export const Disabled: Story = {
  render: () => <Counter id={"somethingunique"} disabled={true} value={1} />,
};

export default meta;
