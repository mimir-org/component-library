import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ReactNode } from "react";
import { ConditionalWrapper, Text, VisuallyHidden } from "../../../atoms";

interface DialogTitleProps {
  children: ReactNode;
  hide?: boolean;
}

export const DialogTitle = ({ children, hide }: DialogTitleProps) => (
  <ConditionalWrapper condition={hide} wrapper={(c) => <VisuallyHidden asChild>{c}</VisuallyHidden>}>
    <DialogPrimitive.Title asChild>
      <Text variant={"title-large"} textAlign={"center"}>
        {children}
      </Text>
    </DialogPrimitive.Title>
  </ConditionalWrapper>
);
