import { Meta, StoryObj } from "@storybook/react";
import { Box } from "./Box.styled";

const meta: Meta<typeof Box> = {
  title: "Layouts/Box",
  component: Box,
};

type Story = StoryObj<typeof Box>;

const children = [...Array(3)].map((_, i) => {
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

export const WithDisplayFlex: Story = {
  args: {
    children,
    display: "flex",
  },
};

export const WithPaddingAndBorder: Story = {
  args: {
    children,
    spacing: { p: "16px" },
    border: "2px solid red",
  },
};

export const WithShadow: Story = {
  args: {
    children,
    boxShadow: "0 6px 20px -2px hsla(0, 0%, 0%, 0.2)",
  },
};

export const WithPolymorphicAs: Story = {
  args: {
    children,
    as: "section",
  },
};

export default meta;
