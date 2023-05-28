import { Meta, StoryObj } from "@storybook/react";
import { FileComponent, FileInfo } from "./FileComponent";

const files = [] as FileInfo[];
const onFileChange = (files: FileInfo[]) => {
  if (files && files.length > 0) {
    alert(files[0].fileName);
  }
};

const meta: Meta<typeof FileComponent> = {
  title: "Molecules/File",
  component: FileComponent,
};

export const Default: StoryObj<typeof FileComponent> = {
  args: {
    value: files,
    onChange: onFileChange,
    disabled: false,
  },
};

export default meta;
