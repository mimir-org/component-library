import { Meta, StoryObj } from "@storybook/react";
import { LibraryIcon } from "../../icons";
import { Token } from "./Token";

const meta: Meta<typeof Token> = {
  title: "Atoms/Tokens/Token",
  component: Token,
  args: {
    children: "Primary token (default)",
    variant: "primary",
  },
};

type Story = StoryObj<typeof Token>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    children: "Secondary token",
    variant: "secondary",
  },
};

export const Actionable: Story = {
  args: {
    children: "Actionable token",
    actionable: true,
    actionIcon: LibraryIcon,
    actionText: "Trigger action",
    onAction: () => alert("[STORYBOOK] Token.onAction"),
  },
};

export default meta;
