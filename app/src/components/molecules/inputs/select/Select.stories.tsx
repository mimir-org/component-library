import { Meta, StoryObj } from "@storybook/react";
import { LibraryIcon } from "../../../icons";
import { Text } from "../../../atoms";
import { Flexbox } from "../../../layouts";
import { Select } from "./Select";

const mockData = [
  { label: "Item A", value: "Value A" },
  { label: "Item B", value: "Value B" },
  { label: "Item C", value: "Value C" },
  { label: "Item D", value: "Value D" },
  { label: "Item E", value: "Value E" },
];

const meta: Meta<typeof Select> = {
  title: "Molecules/Select",
  component: Select,
};

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    options: mockData,
    variant: "standard",
  },
};

export const Compact: Story = {
  args: {
    options: mockData,
    variant: "compact",
    isClearable: true,
  },
};

export const WithComponentOptions: Story = {
  render: () => (
    <Select
      options={mockData}
      getOptionLabel={(x) => x.label}
      getOptionValue={(x) => x.value}
      isMulti
      formatOptionLabel={(x) => (
        <Flexbox alignItems={"center"} gap={"8px"}>
          <LibraryIcon />
          <Text>{x.label}</Text>
        </Flexbox>
      )}
    />
  ),
};

export const Disabled: Story = {
  render: () => (
    <Select options={mockData} getOptionLabel={(x) => x.label} getOptionValue={(x) => x.value} isDisabled />
  ),
};

export default meta;
