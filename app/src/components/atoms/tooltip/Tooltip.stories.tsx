import { Meta, StoryObj } from "@storybook/react";
import { Button, Text, Tooltip } from "../../atoms";
import { Box, Flexbox } from "../../layouts";

const meta: Meta<typeof Tooltip> = {
  title: "atoms/Tooltip",
  component: Tooltip,
  args: {
    children: <Button>Focusable element</Button>,
    content: "The tooltip defaults to top position if there is enough space available",
  },
} as Meta<typeof Tooltip>;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {};

export const PlacementRight: Story = {
  args: {
    placement: "right",
    content: "Right placement",
  },
};

export const PlacementBottom: Story = {
  args: {
    placement: "bottom",
    content: "Bottom placement",
  },
};

export const PlacementLeft: Story = {
  args: {
    placement: "left",
    content: "Left placement",
  },
};

export const WithDelay: Story = {
  args: {
    delay: 200,
    content: "Delay of 200ms",
  },
};

export const WithOffset: Story = {
  args: {
    offset: 50,
    content: "Offset of 50px",
  },
};

export const WithComponentContent: Story = {
  args: {
    placement: "right",
    content: (
      <Flexbox gap={"8px"}>
        <Box width={"20px"} height={"20px"} bgColor={"#5fa0ea"} />
        <Text>This tooltip contains other components</Text>
      </Flexbox>
    ),
  },
};

export default meta;
