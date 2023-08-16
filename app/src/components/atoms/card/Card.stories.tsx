import { Meta, StoryObj } from "@storybook/react";
import { Button, Heading, Text } from "../../atoms";
import { Box, Flexbox } from "../../layouts";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: "Atoms/Card",
  component: Card,
};

type Story = StoryObj<typeof Card>;

const Content = () => (
  <Flexbox flexDirection={"column"} gap={"20px"}>
    <Heading variant={"title-large"}>A rather nice card</Heading>
    <Text>
      {"This card's dimensions are constrained by its parent, use common layout components to populate it's surface"}
    </Text>
    <Button>Action</Button>
  </Flexbox>
);

export const Filled: Story = {
  render: () => (
    <Box width={"250px"}>
      <Card>
        <Content />
      </Card>
    </Box>
  ),
};

export const Selected: Story = {
  render: () => (
    <Box width={"250px"}>
      <Card variant={"selected"}>
        <Content />
      </Card>
    </Box>
  ),
};

export default meta;
