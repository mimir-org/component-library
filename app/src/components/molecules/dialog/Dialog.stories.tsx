import { Meta, StoryObj } from "@storybook/react";
import { Button, Text } from "../../atoms";
import { Box } from "../../layouts";
import { RadioButton } from "../inputs/radio/RadioButton";
import { Dialog } from "./Dialog";

const meta: Meta<typeof Dialog> = {
  title: "Molecules/Dialog",
  component: Dialog,
};

type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  args: {
    content: "Plain example text",
    title: "Dialog title",
    description: "Description of the dialog's contents",
    children: <Button>Show dialog</Button>,
  },
};

export const WithCustomContent: Story = {
  args: {
    ...Default.args,
    content: (
      <Box>
        <Text as="label">View</Text>
        <RadioButton
          options={[
            { checked: false, value: "12234", label: "Answer A" },
            { checked: true, value: "12334", label: "Answer B" },
            { checked: false, value: "12434", label: "Answer C" },
          ]}
          value="ddd"
        />
      </Box>
    ),
  },
};

export const WithHiddenTitle: Story = {
  args: {
    ...Default.args,
    hideTitle: true,
  },
};

export const WithHiddenTitleAndDescription: Story = {
  args: {
    ...WithHiddenTitle.args,
    hideDescription: true,
  },
};

export default meta;
