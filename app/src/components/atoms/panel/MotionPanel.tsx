import { MotionConfig } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import { ResizablePanel, ResizablePanelProps } from "./ResizablePanel";

export type MotionPanelProps = ResizablePanelProps & {
  header: ReactNode;
  open: boolean;
};

export const MotionPanel = (props: MotionPanelProps) => {
  const { header, open, duration, children, ...delegated } = props;
  const [expanded, setExpanded] = useState<boolean>(false);

  useEffect(() => {
    setExpanded(open);
  }, [open]);

  return (
    <MotionConfig transition={{ duration }}>
      <>
        {header}
        <ResizablePanel duration={duration} {...delegated}>
          {expanded && children}
        </ResizablePanel>
      </>
    </MotionConfig>
  );
};

MotionPanel.displayName = "MotionPanel";
