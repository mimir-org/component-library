import { Meta, StoryObj } from "@storybook/react";
import { InspectorPanel } from "./InspectorPanel";

const meta: Meta<typeof InspectorPanel> = {
  title: "Organism/InspectorPanel",
  component: InspectorPanel,
};

type Story = StoryObj<typeof InspectorPanel>;

export const Default: Story = {
  args: {
    duration: 0.5,
    children: (
      <div style={{ margin: "10px 0" }}>
        <p>Here is some demo content</p>
        <p>Here is some demo content</p>
        <p>Here is some demo content</p>
      </div>
    ),
    bgColor: "#FFFAA9",
    tabColor: "#FFDE7A",
    spacing: { pl: "45px", pr: "45px" },
    name: "Reidar tester",
    icon: "http://localhost:5001/symbol/dd20b5da-98a6-4afe-b390-4e649afc5807.svg",
    selectedTab: "relation",
  },
};

export default meta;
