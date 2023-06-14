import { Meta, StoryObj } from "@storybook/react";
import { LibraryIcon } from "../../icons";
import { Icon } from "./Icon";

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
