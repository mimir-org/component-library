import { Meta, StoryObj } from "@storybook/react";
import { TokenButton } from "./TokenButton";

const meta: Meta<typeof TokenButton> = {
  title: "Atoms/Tokens/TokenButton",
  component: TokenButton,
  args: {
    variant: "primary",
    onClick: () => alert("[STORYBOOK] TokenButton.onClick"),
    children: "Primary token (default)",
  },
};

type Story = StoryObj<typeof TokenButton>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary token",
  },
};

export default meta;
