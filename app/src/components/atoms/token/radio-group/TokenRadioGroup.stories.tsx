import { Meta, StoryObj } from "@storybook/react";
import { TokenRadioGroup } from "./TokenRadioGroup";
import { TokenRadioGroupItem } from "./TokenRadioGroupItem";

const meta: Meta<typeof TokenRadioGroup> = {
  title: "Atoms/Tokens/TokenRadioGroup",
  component: TokenRadioGroup,
  args: {},
};

type Story = StoryObj<typeof TokenRadioGroup>;

export const Default: Story = {
  args: {
    onValueChange: (x) => alert(`[STORYBOOK] TokenRadioGroup.onValueChange: ${x}`),
    children: (
      <>
        <TokenRadioGroupItem value={"a"}>Choice A</TokenRadioGroupItem>
        <TokenRadioGroupItem value={"b"}>Choice B</TokenRadioGroupItem>
        <TokenRadioGroupItem value={"c"}>Choice C</TokenRadioGroupItem>
      </>
    ),
  },
};

export const WithChecked: Story = {
  args: {
    children: (
      <>
        <TokenRadioGroupItem value={"a"}>Choice A</TokenRadioGroupItem>
        <TokenRadioGroupItem checked value={"b"}>
          Choice B
        </TokenRadioGroupItem>
        <TokenRadioGroupItem value={"c"}>Choice C</TokenRadioGroupItem>
      </>
    ),
  },
};

export default meta;
