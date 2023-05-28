import { Meta, StoryObj } from "@storybook/react";
import { Button, Text, Tooltip } from "../../atoms";
import { Box, Flexbox } from "../../layouts";

const meta: Meta<typeof Tooltip> = {
  title: "atoms/Tooltip",
  component: Tooltip,
} as Meta<typeof Tooltip>;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: () => (
    <Tooltip content={"The tooltip defaults to top position if there is enough space available"}>
      <Button>Focusable element</Button>
    </Tooltip>
  ),
};

export const PlacementRight: Story = {
  render: () => (
    <Tooltip placement={"right"} content={"Right placement"}>
      <Button>Focusable element</Button>
    </Tooltip>
  ),
};

export const PlacementBottom: Story = {
  render: () => (
    <Tooltip placement={"bottom"} content={"Bottom placement"}>
      <Button>Focusable element</Button>
    </Tooltip>
  ),
};

export const PlacementLeft: Story = {
  render: () => (
    <Tooltip placement={"left"} content={"Left placement"}>
      <Button>Focusable element</Button>
    </Tooltip>
  ),
};

export const WithDelay: Story = {
  render: () => (
    <Tooltip delay={200} content={"Delay of 200ms"}>
      <Button>Focusable element</Button>
    </Tooltip>
  ),
};

export const WithOffset: Story = {
  render: () => (
    <Tooltip offset={50} content={"Offset of 50px"}>
      <Button>Focusable element</Button>
    </Tooltip>
  ),
};

export const WithComponentContent: Story = {
  render: () => (
    <Tooltip
      placement={"right"}
      content={
        <Flexbox gap={"8px"}>
          <Box width={"20px"} height={"20px"} bgColor={"#5fa0ea"} />
          <Text>This tooltip contains other components</Text>
        </Flexbox>
      }
    >
      <Button>Focusable element</Button>
    </Tooltip>
  ),
};

export default meta;
