import { Meta, StoryObj } from "@storybook/react";
import { Box } from "./Box.styled";
import { Gridbox } from "./Gridbox.styled";

const meta: Meta<typeof Gridbox> = {
  title: "Layouts/Gridbox",
  component: Gridbox,
};

export const Default: StoryObj<typeof Gridbox> = {
  args: {
    gridTemplateColumns: "100px auto 100px",
    gridTemplateRows: "auto auto",
    columnGap: "10px",
    rowGap: "10px",
    children: (
      <>
        {[...Array(9)].map((_, i) => {
          const color = 20 * i;
          return (
            <Box key={i} spacing={{ p: "30px" }} bgColor={`hsl(${color},60%,60%)`}>
              ITEM
            </Box>
          );
        })}
      </>
    ),
  },
};

export default meta;
