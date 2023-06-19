import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "..";
import { MotionPanel } from "./MotionPanel";

const Demo = () => {
  const [expanded, setExpanded] = useState<boolean>(false);
  return (
    <MotionPanel
      duration={0.3}
      open={expanded}
      maxHeight={600}
      header={
        <div>
          <Button onClick={() => setExpanded(!expanded)}>Show children</Button>
        </div>
      }
    >
      <div>
        <p>Her er litt tekst</p>
        <p>Her er litt tekst</p>
        <p>Her er litt tekst</p>
      </div>
    </MotionPanel>
  );
};

const meta: Meta<typeof MotionPanel> = {
  title: "Molecules/MotionPanel",
  component: Demo,
};

type Story = StoryObj<typeof MotionPanel>;

export const Default: Story = {
  args: {},
};

export default meta;
