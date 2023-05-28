import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Button, Text } from "../../atoms";
import { MotionBox } from "../../layouts";
import { Toaster } from "./Toaster";
import { toast } from "./toast";

const meta: Meta<typeof Toaster> = {
  title: "Molecules/Toaster",
  component: Toaster,
};

type Story = StoryObj<typeof Toaster>;

export const Default: Story = {
  render: () => <Button onClick={() => toast("The default toast experience")}>Click to toast</Button>,
};

export const Success: Story = {
  render: () => <Button onClick={() => toast.success("A successful toast")}>Click to toast</Button>,
};

export const Error: Story = {
  render: () => <Button onClick={() => toast.error("A toast following an error")}>Click to toast</Button>,
};

export const WithCustomContent: Story = {
  render: () => (
    <Button
      onClick={() =>
        toast.custom(
          <MotionBox display={"flex"} alignItems={"baseline"} bgColor={"gold"} gap={"16px"} spacing={{ p: "8px" }}>
            <Text variant={"title-medium"}>Custom</Text>
            <Text variant={"body-medium"}>This toast takes JSX as param</Text>
            <Button variant={"filled"}>An action</Button>
          </MotionBox>
        )
      }
    >
      Click to toast
    </Button>
  ),
};

export default meta;
