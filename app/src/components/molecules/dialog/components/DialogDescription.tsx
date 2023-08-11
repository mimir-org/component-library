import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ReactNode } from "react";
import { useTheme } from "styled-components";
import { ConditionalWrapper, Text, VisuallyHidden } from "../../../atoms";
import { mimirColorReference } from "../../../core/theme/variables/color/reference/mimirColorReference";

interface DialogDescriptionProps {
  children: ReactNode;
  hide?: boolean;
}

export const DialogDescription = ({ children, hide }: DialogDescriptionProps) => {
  const theme = useTheme();

  return (
    <ConditionalWrapper condition={hide} wrapper={(c) => <VisuallyHidden asChild>{c}</VisuallyHidden>}>
      <DialogPrimitive.Description asChild>
        <Text
          variant={"title-medium"}
          textAlign={"center"}
          color={
            theme.mimirorg.color.reference === mimirColorReference
              ? theme.mimirorg.color.surface.on
              : theme.mimirorg.color.surface.variant.on
          }
        >
          {children}
        </Text>
      </DialogPrimitive.Description>
    </ConditionalWrapper>
  );
};
