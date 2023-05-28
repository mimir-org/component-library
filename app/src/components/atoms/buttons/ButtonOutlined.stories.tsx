import { Meta, StoryObj } from "@storybook/react";
import { CalendarMonth } from "@styled-icons/material-outlined";
import { Library } from "../../assets";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Atoms/Buttons/Outlined",
  component: Button,
  args: {
    children: "Button",
    variant: "outlined",
    disabled: false,
    buttonColor: "primary",
  },
};

type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithIconOnly: Story = {
  args: {
    icon: Library,
    iconOnly: true,
  },
};

export const WithSmallIconOnly: Story = {
  args: {
    icon: <CalendarMonth size={12} />,
    iconOnly: true,
    height: "24px",
  },
};

export const WithIconLeftAndText: Story = {
  args: {
    icon: Library,
    iconPlacement: "left",
  },
};

export const WithIconRightAndText: Story = {
  args: {
    icon: Library,
    iconPlacement: "right",
  },
};

export default meta;
