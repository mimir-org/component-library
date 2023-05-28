import { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./Textarea";

const meta: Meta<typeof Textarea> = {
  title: "Molecules/Textarea",
  component: Textarea,
};

export const Default: StoryObj<typeof Textarea> = {
  args: {
    defaultValue: "Some input",
    placeholder: "placeholder",
    disabled: false,
  },
};

export default meta;
