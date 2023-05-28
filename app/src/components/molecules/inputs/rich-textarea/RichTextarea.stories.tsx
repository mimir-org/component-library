import { Meta, StoryObj } from "@storybook/react";
import { RichTextarea } from "./RichTextarea";

const onChange = (value: string) => {
  console.log(value);
};

const meta: Meta<typeof RichTextarea> = {
  title: "Molecules/RichTextarea",
  component: RichTextarea,
};

export const Text: StoryObj<typeof RichTextarea> = {
  args: {
    value:
      "<h1>Lorem Ipsum</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet imperdiet risus. Aenean sed sem convallis, consectetur enim vel, blandit dolor. Aenean aliquam, quam in placerat dignissim, velit orci commodo dui, et scelerisque dui arcu et leo.</p>",
    onChange: onChange,
    disabled: false,
  },
};

export default meta;
