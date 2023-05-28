import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Close } from "@styled-icons/material";
import { useTheme } from "styled-components";
import { Button } from "../../../atoms";
import { Box } from "../../../layouts";

export const DialogExit = ({ closeText }: { closeText?: string }) => {
  const theme = useTheme();
  return (
    <DialogPrimitive.Close asChild>
      <Box position={"absolute"} top={theme.mimir.spacing.xl} right={theme.mimir.spacing.xl}>
        <Button width="25px" height="25px" variant={"text"} icon={<Close />} iconOnly>
          {closeText ?? "Close dialog"}
        </Button>
      </Box>
    </DialogPrimitive.Close>
  );
};
