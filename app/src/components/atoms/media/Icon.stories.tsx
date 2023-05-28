import { Meta, StoryObj } from "@storybook/react";
import { Library } from "../../assets";
import { Icon } from "./Icon";

const meta: Meta<typeof Icon> = {
  title: "Atoms/Icon",
  component: Icon,
};

export const Default: StoryObj<typeof Icon> = {
  args: {
    src: Library,
    size: 16,
  },
};

export default meta;
