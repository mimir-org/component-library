import { Meta, StoryObj } from "@storybook/react";
import { Divider } from "./Divider";

const meta: Meta<typeof Divider> = {
  title: "Atoms/Divider",
  component: Divider,
  args: {
    decorative: false,
  },
};

type Story = StoryObj<typeof Divider>;

export const Horizontal: Story = {
  args: {
    orientation: "horizontal",
  },
};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
  },
};

export default meta;
