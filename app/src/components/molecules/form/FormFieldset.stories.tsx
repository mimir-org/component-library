import { Meta, StoryObj } from "@storybook/react";
import { Default as FormFieldStory, WithError as FormFieldWithErrorStory } from "./FormField.stories";
import { FormFieldset } from "./FormFieldset";
import { FormLegend } from "./FormLegend";
import { FormField } from "./FormField";

const meta: Meta<typeof FormFieldset> = {
  title: "Molecules/FormFieldset",
  component: FormFieldset,
};

type Story = StoryObj<typeof FormFieldset>;

export const Default: Story = {
  args: {
    children: (
      <>
        <FormLegend>This is a legend</FormLegend>
        <FormField {...FormFieldStory.args} />
        <FormField {...FormFieldStory.args} />
        <FormField {...FormFieldStory.args} />
      </>
    ),
  },
};

export const WithError: Story = {
  args: {
    children: (
      <>
        <FormLegend>This is a legend</FormLegend>
        <FormField {...FormFieldStory.args} />
        <FormField {...FormFieldWithErrorStory.args} />
        <FormField {...FormFieldStory.args} />
        <FormField {...FormFieldWithErrorStory.args} />
      </>
    ),
  },
};

export default meta;
