import { Meta, StoryObj } from "@storybook/react";
import { LibraryIcon } from "../../icons";
import { Icon } from "./Icon";

const meta: Meta<typeof Icon> = {
  title: "Atoms/Icon",
  component: Icon,
  args: {
    src: <LibraryIcon />,
    size: 16,
  },
};

export const Default: StoryObj<typeof Icon> = {};

export default meta;
