import { Meta, StoryObj } from "@storybook/react";
import { FormHeader } from "./FormHeader";

const meta: Meta<typeof FormHeader> = {
  title: "Molecules/FormHeader",
  component: FormHeader,
};

type Story = StoryObj<typeof FormHeader>;

export const Default: Story = {
  args: {
    title: "This is the title",
  },
};

export const WithSubtitle: Story = {
  args: {
    ...Default.args,
    subtitle: "This is the subtitle",
  },
};

export default meta;
