import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../atoms";
import { Accordion } from "./Accordion";
import { AccordionContent } from "./components/AccordionContent";
import { AccordionItem } from "./components/AccordionItem";
import { AccordionTrigger } from "./components/AccordionTrigger";

const meta: Meta<typeof Accordion> = {
  title: "Molecules/Accordion",
  component: Accordion,
};

type Story = StoryObj<typeof Accordion>;

const Content = () => (
  <>
    <AccordionItem value={"item01"}>
      <AccordionTrigger>Accordion label 1</AccordionTrigger>
      <AccordionContent>Example with plain text as inner content of accordion</AccordionContent>
    </AccordionItem>
    <AccordionItem value={"item02"}>
      <AccordionTrigger>Accordion label 2</AccordionTrigger>
      <AccordionContent>Example with plain text as inner content of accordion</AccordionContent>
    </AccordionItem>
    <AccordionItem value={"item03"}>
      <AccordionTrigger>Accordion label 3</AccordionTrigger>
      <AccordionContent>Example with plain text as inner content of accordion</AccordionContent>
    </AccordionItem>
  </>
);

export const Default: Story = {
  render: () => (
    <Accordion>
      <AccordionItem value={"item01"}>
        <AccordionTrigger>Accordion label</AccordionTrigger>
        <AccordionContent>Example with plain text as inner content of accordion</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const WithMultipleItems: Story = {
  render: () => (
    <Accordion>
      <Content />
    </Accordion>
  ),
};

export const WithMultipleOpenItems: Story = {
  render: () => (
    <Accordion type={"multiple"}>
      <Content />
    </Accordion>
  ),
};

export const WithCustomContent: Story = {
  render: () => (
    <Accordion>
      <AccordionItem value={"item01"}>
        <AccordionTrigger>Accordion label</AccordionTrigger>
        <AccordionContent>
          <Button>A wonderful button</Button>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export default meta;
