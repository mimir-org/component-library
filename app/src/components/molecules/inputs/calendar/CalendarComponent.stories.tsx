import { Meta, StoryObj } from "@storybook/react";
import { CalendarComponent } from "./CalendarComponent";

const meta: Meta<typeof CalendarComponent> = {
  title: "Molecules/Calendar",
  component: CalendarComponent,
};

type Story = StoryObj<typeof CalendarComponent>;

export const Default: Story = {
  args: {
    value: new Date(),
    placeholder: "This is the calendar placeholder",
    variant: "standard",
  },
};

export const Compact: Story = {
  args: {
    value: new Date(),
    placeholder: "This is the calendar placeholder",
    variant: "compact",
  },
};

export const WithNoDefaultValue: Story = {
  args: {
    ...Default.args,
    value: null,
  },
};

export const WithReadOnly: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const WithReset: Story = {
  args: {
    ...Default.args,
    disabled: false,
    reset: true,
  },
};

export const WithInputHidden: Story = {
  args: {
    ...Default.args,
    disabled: false,
    reset: true,
    inputHidden: true,
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export default meta;
