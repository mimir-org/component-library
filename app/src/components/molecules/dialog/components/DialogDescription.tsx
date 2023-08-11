import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ReactNode } from "react";
import { useTheme } from "styled-components";
import { ConditionalWrapper, Text, VisuallyHidden } from "../../../atoms";

interface DialogDescriptionProps {
  children: ReactNode;
  hide?: boolean;
}

export const DialogDescription = ({ children, hide }: DialogDescriptionProps) => {
  const theme = useTheme();

  return (
    <ConditionalWrapper condition={hide} wrapper={(c) => <VisuallyHidden asChild>{c}</VisuallyHidden>}>
      <DialogPrimitive.Description asChild>
        <Text variant={"title-medium"} textAlign={"center"} color={theme.mimirorg.color.surface.on}>
          {children}
        </Text>
      </DialogPrimitive.Description>
    </ConditionalWrapper>
  );
};
