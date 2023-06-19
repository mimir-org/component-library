import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";
import useMeasure from "react-use-measure";
import { ignoreCircularReferences } from "../../core/services/common";
import { MotionResizablePanelContainer, ResizablePanelContainerProps } from "./MotionPanel.styled";

export type ResizablePanelProps = ResizablePanelContainerProps & {
  children: ReactNode;
  duration: number;
  maxHeight?: number;
};

export const ResizablePanel = ({ children, duration, maxHeight }: ResizablePanelProps) => {
  const [ref, { height }] = useMeasure();
  let h = height;
  let maxTrigger = false;

  if (maxHeight != null && h != null && height >= maxHeight) {
    h = maxHeight;
    maxTrigger = true;
  }

  return (
    <MotionResizablePanelContainer animate={{ height: h || "auto" }} maxTrigger={maxTrigger}>
      <AnimatePresence initial={false}>
        <motion.div
          key={JSON.stringify(children, ignoreCircularReferences())}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: duration / 2, delay: duration / 2 } }}
          exit={{ opacity: 0, transition: { duration: duration / 2 } }}
        >
          <div ref={ref} style={{ position: "absolute" }}>
            {children}
          </div>
        </motion.div>
      </AnimatePresence>
    </MotionResizablePanelContainer>
  );
};
