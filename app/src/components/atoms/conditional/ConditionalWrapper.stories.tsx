import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../buttons/Button";
import { ConditionalWrapper } from "./ConditionalWrapper";

const meta: Meta<typeof ConditionalWrapper> = {
  title: "Atoms/ConditionalWrapper",
  component: ConditionalWrapper,
  args: {
    wrapper: (c) => <div>{c}</div>,
    children: <Button>Wrapped?</Button>,
  },
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
};

type Story = StoryObj<typeof ConditionalWrapper>;

export const Example: Story = {};

export default meta;
