import { Meta, StoryObj } from "@storybook/react";
import { Text as TextStory } from "../inputs/input/Input.stories";
import { FormField } from "./FormField";
import { Input } from "../inputs/input/Input";

const meta: Meta<typeof FormField> = {
  title: "Molecules/FormField",
  component: FormField,
};

type Story = StoryObj<typeof FormField>;

export const Default: Story = {
  args: {
    label: "Label for input",
    children: <Input {...TextStory.args} />,
  },
};

export const WithError: Story = {
  args: {
    ...Default.args,
    error: { message: "Field is required." },
  },
};

export default meta;
