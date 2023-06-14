import { Meta, StoryObj } from "@storybook/react";
import { CalendarMonth } from "@styled-icons/material-outlined";
import { Button } from "./Button";
import { LibraryIcon } from "../../icons";

const meta: Meta<typeof Button> = {
  title: "Atoms/Buttons/Filled",
  component: Button,
  args: {
    children: "Button",
    variant: "filled",
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
    icon: <LibraryIcon />,
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
    icon: <LibraryIcon />,
    iconPlacement: "left",
  },
};

export const WithIconRightAndText: Story = {
  args: {
    icon: <LibraryIcon />,
    iconPlacement: "right",
  },
};

export default meta;
