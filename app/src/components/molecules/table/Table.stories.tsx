import { Meta, StoryObj } from "@storybook/react";
import { Input, Select } from "..";
import { Text, Token } from "../../atoms";
import { Box, Flexbox } from "../../layouts";
import { Table, Tbody, Td, Th, Thead, Tr } from "./Table";

const meta: Meta<typeof Table> = {
  title: "Molecules/Table",
  component: Table,
  parameters: {
    docs: {
      description: {
        component: `The table component offers a default desktop experience at larger viewports, 
        but falls back to a card layout when the viewport's dimensions fall below a width of 1500px.
        Alongside the table component you will find wrappers for thead, tbody, tr, th and td.
        `,
      },
    },
  },
};

type Story = StoryObj<typeof Table>;

const args = {
  borders: false,
  children: (
    <>
      <Thead>
        <Tr>
          <Th>Column A</Th>
          <Th>Column B</Th>
          <Th>Column C</Th>
          <Th>Column D</Th>
        </Tr>
      </Thead>
      <Tbody>
        {[...Array(3)].map((_, i) => (
          <Tr key={i}>
            <Td data-label="Column A">A rather lengthy value A</Td>
            <Td data-label="Column B">A bit shorter value B</Td>
            <Td data-label="Column C">Adequate value C</Td>
            <Td data-label="Column D">Small value D</Td>
          </Tr>
        ))}
      </Tbody>
    </>
  ),
};

const secondaryArgs = {
  borders: false,
  children: (
    <>
      <Thead>
        <Tr>
          <Th>
            <Text as={"span"} color={"darkgreen"} variant={"title-medium"}>
              Column A
            </Text>
          </Th>
          <Th>
            <Text as={"span"} color={"darkgreen"} variant={"title-medium"}>
              Column B
            </Text>
          </Th>
          <Th>
            <Text as={"span"} color={"darkgreen"} variant={"title-medium"}>
              Column C
            </Text>
          </Th>
          <Th>
            <Text as={"span"} color={"darkgreen"} variant={"title-medium"}>
              Column D
            </Text>
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        {[...Array(3)].map((_, i) => (
          <Tr key={i}>
            <Td data-label="Column A">
              <Flexbox alignItems={"center"} gap={"8px"}>
                <Box width={"20px"} height={"20px"} as={"span"} bgColor={"darkred"} />
                <Text as={"span"} variant={"body-medium"}>
                  Extraordinary
                </Text>
              </Flexbox>
            </Td>
            <Td data-label="Column B">
              <Input placeholder={"Your value goes here..."} />
            </Td>
            <Td data-label="Column C">
              <Select
                options={[
                  { label: "one", value: "one" },
                  { label: "two", value: "two" },
                  { label: "three", value: "three" },
                ]}
              />
            </Td>
            <Td data-label="Column D">
              <Flexbox flexWrap={"wrap"} gap={"8px"}>
                <Token variant={"secondary"}>Value</Token>
                <Token variant={"secondary"}>Value</Token>
                <Token variant={"secondary"}>Value</Token>
              </Flexbox>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </>
  ),
};

export const Default: Story = {
  render: () => <Table {...args} />,
};

export const WithBorders: Story = {
  render: () => <Table {...args} borders={true} />,
};

export const WithCustomContent: Story = {
  render: () => <Table {...secondaryArgs} />,
};

export default meta;
