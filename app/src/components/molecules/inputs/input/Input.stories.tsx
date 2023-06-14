import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { LibraryIcon } from "../../../icons";

const meta: Meta<typeof Input> = {
  title: "Molecules/Input",
  component: Input,
};

type Story = StoryObj<typeof Input>;

export const Text: Story = {
  args: { defaultValue: "Some input", placeholder: "placeholder", type: "text" },
};

export const Number: Story = {
  args: {
    defaultValue: 101,
    placeholder: "123",
    type: "number",
  },
};

export const Email: Story = {
  args: { defaultValue: "jane.smith@organization.com", placeholder: "jane.smith@organization.com", type: "email" },
};

export const Password: Story = {
  args: {
    defaultValue: "youbetterchooseastrongone",
    placeholder: "********************",
    type: "password",
  },
};

export const WithIcon: Story = {
  args: {
    defaultValue: "Some input",
    placeholder: "placeholder",
    type: "text",
    icon: <LibraryIcon />,
    iconPlacement: "left",
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: "Some input",
    placeholder: "placeholder",
    type: "text",
    disabled: true,
  },
};

export default meta;
