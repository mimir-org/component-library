import { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter as Router } from "react-router-dom";
import { ErrorMessage } from "./ErrorMessage";

const meta: Meta<typeof ErrorMessage> = {
  title: "Organism/ErrorMessage",
  component: ErrorMessage,
  decorators: [
    (Story) => (
      <Router>
        <Story />
      </Router>
    ),
  ],
};

type Story = StoryObj<typeof ErrorMessage>;

export const Default: Story = {
  args: {
    title: "This is the error title",
    subtitle: "This is the error subtitle",
    status: "This is the status",
    linkText: "This is the link text",
    linkPath: "/",
  },
};

export default meta;
