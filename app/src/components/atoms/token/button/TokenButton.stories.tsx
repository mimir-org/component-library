import { Meta, StoryObj } from "@storybook/react";
import { TokenButton } from "./TokenButton";

const meta: Meta<typeof TokenButton> = {
  title: "Atoms/Tokens/TokenButton",
  component: TokenButton,
};

type Story = StoryObj<typeof TokenButton>;

export const Primary: Story = {
  render: () => (
    <TokenButton variant={"primary"} onClick={() => alert("[STORYBOOK] TokenButton.onClick")}>
      Primary token (default)
    </TokenButton>
  ),
};

export const Secondary: Story = {
  render: () => (
    <TokenButton variant={"secondary"} onClick={() => alert("[STORYBOOK] TokenButton.onClick")}>
      Secondary token
    </TokenButton>
  ),
};

export default meta;
