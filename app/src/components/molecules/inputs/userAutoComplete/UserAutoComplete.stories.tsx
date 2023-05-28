import { Meta, StoryObj } from "@storybook/react";
import { UserAutoComplete } from "./UserAutoComplete";

const onItemChange = (id: string) => {
  console.log(id);
};

const meta: Meta<typeof UserAutoComplete> = {
  title: "Molecules/UserAutoComplete",
  component: UserAutoComplete,
};

export const Default: StoryObj<typeof UserAutoComplete> = {
  args: {
    users: [
      { id: "1", value: "Hans Hansen" },
      { id: "2", value: "Nils Hansen" },
      { id: "3", value: "Kari Hansen" },
    ],
    onItemChange: onItemChange,
    value: "2",
    placeholder: "Search for user",
  },
};

export default meta;
