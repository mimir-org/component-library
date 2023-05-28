import { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

const meta: Meta<typeof Text> = {
  title: "Atoms/Text",
  component: Text,
  args: {
    children: "A pretty lengthy text displaying the capabilities of this component.",
  },
};

type Story = StoryObj<typeof Text>;

export const Paragraph: Story = {
  args: {
    as: "p",
  },
};

export const Small: Story = {
  args: {
    as: "small",
  },
};

export const Bold: Story = {
  args: {
    as: "b",
  },
};

export const Idiomatic: Story = {
  args: {
    as: "i",
  },
};

export const Emphasized: Story = {
  args: {
    as: "em",
  },
};

export default meta;
