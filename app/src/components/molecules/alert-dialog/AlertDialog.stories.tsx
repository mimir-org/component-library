import { Meta, StoryObj } from "@storybook/react";
import { Button, Token } from "../../atoms";
import { Box } from "../../layouts";
import { AlertDialog } from "./AlertDialog";

const meta: Meta<typeof AlertDialog> = {
  title: "Molecules/AlertDialog",
  component: AlertDialog,
};

type Story = StoryObj<typeof AlertDialog>;

const args = {
  content: "Plain example text",
  title: "Dialog title",
  description: "Description of the dialog's contents",
  children: <Button>Show dialog</Button>,
  actions: [
    {
      name: "Example action",
      onAction: () => alert("[STORYBOOK] AlertDialog.Action"),
    },
  ],
};

export const Default: Story = {
  render: () => <AlertDialog {...args} />,
};

export const WithCustomContent: Story = {
  render: () => (
    <AlertDialog
      {...args}
      content={
        <Box display={"flex"} gap={"8px"} spacing={{ p: "16px" }} borderRadius={"5px"} bgColor={"green"}>
          <Token variant={"secondary"}>YOUR</Token>
          <Token>CUSTOM</Token>
          <Token variant={"secondary"}>CONTENT</Token>
        </Box>
      }
    />
  ),
};

export const WithHiddenTitle: Story = {
  render: () => <AlertDialog {...args} hideTitle={true} />,
};

export const WithHiddenTitleAndDescription: Story = {
  render: () => <AlertDialog {...args} hideTitle={true} hideDescription={true} />,
};

export default meta;
