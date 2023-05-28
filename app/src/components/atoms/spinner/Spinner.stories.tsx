import { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "./Spinner";

const meta: Meta<typeof Spinner> = {
  title: "Atoms/Spinner",
  component: Spinner,
  args: {
    variant: "circle",
  },
};

export const Default: StoryObj<typeof Spinner> = {};

export default meta;
