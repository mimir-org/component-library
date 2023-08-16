import { Meta, StoryObj } from "@storybook/react";
import { FullPageSpinner } from "./FullPageSpinner";

const meta: Meta<typeof FullPageSpinner> = {
  title: "Atoms/FullPageSpinner",
  component: FullPageSpinner,
  args: {},
};

type Story = StoryObj<typeof FullPageSpinner>;

export const Default: Story = {};

export const WithText: Story = {
  args: {
    text: "Loading state",
  },
};

export default meta;
