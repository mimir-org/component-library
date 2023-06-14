import { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./Icon";
import { LibraryIcon } from "../../icons";

const meta: Meta<typeof Icon> = {
  title: "Atoms/Icon",
  component: Icon,
};

export const Default: StoryObj<typeof Icon> = {
  args: {
    src: <LibraryIcon />,
    size: 16,
  },
};

export default meta;
