import { Meta, StoryObj } from "@storybook/react";
import { Form } from "./Form";
import { Default as FormErrorBannerStory } from "./FormErrorBanner.stories";
import { Default as FormFieldsetStory, WithError as FormFieldsetWithErrorStory } from "./FormFieldset.stories";
import { WithSubtitle as FormHeaderStory } from "./FormHeader.stories";
import { FormFieldset } from "./FormFieldset";
import { FormErrorBanner } from "./FormErrorBanner";
import { FormHeader } from "./FormHeader";

const meta: Meta<typeof Form> = {
  title: "Molecules/Form",
  component: Form,
};

type Story = StoryObj<typeof Form>;

export const Default: Story = {
  args: {
    children: (
      <>
        <FormHeader {...FormHeaderStory.args} />
        <FormFieldset {...FormFieldsetStory.args} />
      </>
    ),
  },
};

export const WithError: Story = {
  args: {
    children: (
      <>
        <FormHeader {...FormHeaderStory.args} />
        <FormErrorBanner {...FormErrorBannerStory.args} />
        <FormFieldset {...FormFieldsetWithErrorStory.args} />
      </>
    ),
  },
};

export default meta;
