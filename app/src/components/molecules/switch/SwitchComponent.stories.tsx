import { Meta, StoryObj } from "@storybook/react";
import { SwitchComponent } from "./SwitchComponent";

const meta: Meta<typeof SwitchComponent> = {
  title: "Molecules/Switch",
  component: SwitchComponent,
};

export const Default: StoryObj<typeof SwitchComponent> = {
  args: {
    text: "Label text",
  },
};

export default meta;
