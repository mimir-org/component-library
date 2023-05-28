import { Meta, StoryObj } from "@storybook/react";
import { FormErrorBanner } from "./FormErrorBanner";

const meta: Meta<typeof FormErrorBanner> = {
  title: "Molecules/FormErrorBanner",
  component: FormErrorBanner,
};

export const Default: StoryObj<typeof FormErrorBanner> = {
  args: {
    children: "An error occurred when submitting the form.",
  },
};

export default meta;
