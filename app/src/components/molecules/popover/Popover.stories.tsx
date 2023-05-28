import { Meta, StoryObj } from "@storybook/react";
import { Button, Text } from "../../atoms";
import { Box } from "../../layouts";
import { Popover } from "./Popover";

const meta: Meta<typeof Popover> = {
  title: "Molecules/Popover",
  component: Popover,
};

type Story = StoryObj<typeof Popover>;

const Content = () => (
  <Box display={"flex"} flexDirection={"column"} gap={"8px"} maxWidth={"200px"}>
    <Text variant={"title-medium"}>Popover</Text>
    <Text>
      Popovers are usually used to provide an element with extra information. They are often used for more complex
      information than what you present with a regular tooltip.
    </Text>
  </Box>
);

export const Default: Story = {
  render: () => (
    <Popover content={<Content />}>
      <Button>Focusable element</Button>
    </Popover>
  ),
};

export const PlacementRight: Story = {
  render: () => (
    <Popover placement={"right"} content={<Content />}>
      <Button>Focusable element</Button>
    </Popover>
  ),
};

export const PlacementBottom: Story = {
  render: () => (
    <Popover placement={"bottom"} content={<Content />}>
      <Button>Focusable element</Button>
    </Popover>
  ),
};

export const PlacementLeft: Story = {
  render: () => (
    <Popover placement={"left"} content={<Content />}>
      <Button>Focusable element</Button>
    </Popover>
  ),
};

export const WithOffset: Story = {
  render: () => (
    <Popover offset={50} content={<Content />}>
      <Button>Focusable element</Button>
    </Popover>
  ),
};

export default meta;
