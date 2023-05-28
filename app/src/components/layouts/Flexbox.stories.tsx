import { Meta, StoryObj } from "@storybook/react";
import { Box } from "./Box.styled";
import { Flexbox } from "./Flexbox.styled";

const meta: Meta<typeof Flexbox> = {
  title: "Layouts/Flexbox",
  component: Flexbox,
};

type Story = StoryObj<typeof Flexbox>;

const children = [...Array(5)].map((_, i) => {
  const color = 20 * i;
  return (
    <Box
      key={i}
      spacing={{
        p: "16px",
      }}
      bgColor={`hsl(${color},60%,60%)`}
    >
      ITEM
    </Box>
  );
});

export const Default: Story = {
  args: {
    children,
  },
};

export const DirectionColumn: Story = {
  args: {
    children,
    flexDirection: "column",
  },
};

export const WithWrap: Story = {
  args: {
    children,
    flexWrap: "wrap",
  },
};

export const WithGap: Story = {
  args: {
    children,
    gap: "16px",
  },
};

export const WithGapAndWrap: Story = {
  args: {
    children,
    gap: "16px",
    flexWrap: "wrap",
  },
};

export default meta;
