import { Meta, StoryObj } from "@storybook/react";
import { TokenRadioGroup } from "./TokenRadioGroup";
import { TokenRadioGroupItem } from "./TokenRadioGroupItem";

const meta: Meta<typeof TokenRadioGroup> = {
  title: "Atoms/Tokens/TokenRadioGroup",
  component: TokenRadioGroup,
};

type Story = StoryObj<typeof TokenRadioGroup>;

export const Default: Story = {
  render: () => (
    <TokenRadioGroup onValueChange={(x) => alert(`[STORYBOOK] TokenRadioGroup.onValueChange: ${x}`)}>
      <TokenRadioGroupItem value={"a"}>Choice A</TokenRadioGroupItem>
      <TokenRadioGroupItem value={"b"}>Choice B</TokenRadioGroupItem>
      <TokenRadioGroupItem value={"c"}>Choice C</TokenRadioGroupItem>
    </TokenRadioGroup>
  ),
};

export const WithChecked: Story = {
  render: () => (
    <TokenRadioGroup>
      <TokenRadioGroupItem value={"a"}>Choice A</TokenRadioGroupItem>
      <TokenRadioGroupItem checked value={"b"}>
        Choice B
      </TokenRadioGroupItem>
      <TokenRadioGroupItem value={"c"}>Choice C</TokenRadioGroupItem>
    </TokenRadioGroup>
  ),
};

export default meta;
