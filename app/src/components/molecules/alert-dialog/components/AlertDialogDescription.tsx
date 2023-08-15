import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { ReactElement, ReactNode } from "react";
import { useTheme } from "styled-components";
import { ConditionalWrapper, Text, VisuallyHidden } from "../../../atoms";

interface DialogDescriptionProps {
  children: ReactNode;
  hide?: boolean;
}

const WrappedComponent = (c: ReactElement) => <VisuallyHidden asChild>{c}</VisuallyHidden>;

export const AlertDialogDescription = ({ children, hide }: DialogDescriptionProps) => {
  const theme = useTheme();

  return (
    <ConditionalWrapper condition={hide} wrapper={WrappedComponent}>
      <AlertDialogPrimitive.Description asChild>
        <Text variant={"title-medium"} textAlign={"center"} color={theme.mimirorg.color.surface.variant.on}>
          {children}
        </Text>
      </AlertDialogPrimitive.Description>
    </ConditionalWrapper>
  );
};
