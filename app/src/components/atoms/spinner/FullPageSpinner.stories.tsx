import { Meta, StoryObj } from "@storybook/react";
import { FullPageSpinner } from "./FullPageSpinner";

const meta: Meta<typeof FullPageSpinner> = {
  title: "Atoms/FullPageSpinner",
  component: FullPageSpinner,
};

type Story = StoryObj<typeof FullPageSpinner>;

export const Default: Story = {
  render: () => <FullPageSpinner />,
};

export const WithText: Story = {
  render: () => <FullPageSpinner text={"Loading state"} />,
};

export default meta;
