import { Meta, StoryObj } from "@storybook/react";
import { Heading } from "./Heading";

const meta: Meta<typeof Heading> = {
  title: "Atoms/Heading",
  component: Heading,
  args: {
    children: "A pretty lengthy text displaying the capabilities of this component.",
  },
};

type Story = StoryObj<typeof Heading>;

export const H1: Story = {
  args: {
    as: "h1",
  },
};

export const H2: Story = {
  args: {
    as: "h2",
  },
};

export const H3: Story = {
  args: {
    as: "h3",
  },
};

export const H4: Story = {
  args: {
    as: "h4",
  },
};

export const H5: Story = {
  args: {
    as: "h5",
  },
};

export const WithEllipsis: Story = {
  args: {
    ...H1.args,
    useEllipsis: true,
    ellipsisMaxLines: 2,
  },
  decorators: [
    (Story) => (
      <div>
        <p>Container width: 400px</p>
        <br />
        <div
          style={{
            width: "400px",
            border: "2px solid red",
          }}
        >
          <Story />
        </div>
      </div>
    ),
  ],
};

export default meta;
