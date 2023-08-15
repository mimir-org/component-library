import { Meta, StoryObj } from "@storybook/react";
import { LibraryIcon } from "../../icons";
import { Token } from "./Token";

const meta: Meta<typeof Token> = {
  title: "Atoms/Tokens/Token",
  component: Token,
};

type Story = StoryObj<typeof Token>;

export const Primary: Story = {
  render: () => <Token variant={"primary"}>Primary token (default)</Token>,
};

export const Secondary: Story = {
  render: () => <Token variant={"secondary"}>Secondary token</Token>,
};

export const Actionable: Story = {
  render: () => (
    <Token
      actionable={true}
      actionIcon={LibraryIcon}
      actionText={"Trigger action"}
      onAction={() => alert("[STORYBOOK] Token.onAction")}
    >
      Actionable token
    </Token>
  ),
};

export default meta;
