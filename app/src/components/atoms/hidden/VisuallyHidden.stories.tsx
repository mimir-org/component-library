import { Meta, StoryObj } from "@storybook/react";
import { VisuallyHidden } from "./VisuallyHidden";

const meta: Meta<typeof VisuallyHidden> = {
  title: "Atoms/VisuallyHidden",
  component: VisuallyHidden,
  parameters: {
    viewMode: "docs",
    previewTabs: {
      canvas: { hidden: true },
    },
    docs: {
      source: {
        state: "open",
      },
    },
  },
};

type Story = StoryObj<typeof VisuallyHidden>;

export const Default: Story = {
  args: {
    children: "Some hidden text goes here.",
  },
};

export default meta;
