import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { ReactNode } from "react";
import { ConditionalWrapper, Text, VisuallyHidden } from "../../../atoms";

interface DialogTitleProps {
  children: ReactNode;
  hide?: boolean;
}

const WrappedComponent = (c: ReactNode) => <VisuallyHidden asChild>{c}</VisuallyHidden>;

export const AlertDialogTitle = ({ children, hide }: DialogTitleProps) => (
  <ConditionalWrapper condition={hide} wrapper={(c) => WrappedComponent(c)}>
    <AlertDialogPrimitive.Title asChild>
      <Text variant={"title-large"} textAlign={"center"}>
        {children}
      </Text>
    </AlertDialogPrimitive.Title>
  </ConditionalWrapper>
);
