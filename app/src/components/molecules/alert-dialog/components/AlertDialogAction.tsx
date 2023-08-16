import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { ButtonHTMLAttributes } from "react";
import { Button } from "../../../atoms";

export type AlertDialogActionItem = Pick<ButtonHTMLAttributes<HTMLButtonElement>, "form" | "type"> & {
  name: string;
  onAction?: () => void;
};

export const AlertDialogAction = ({ name, onAction, ...delegated }: AlertDialogActionItem) => (
  <AlertDialogPrimitive.Action asChild>
    <Button variant={"filled"} onClick={onAction} {...delegated}>
      {name}
    </Button>
  </AlertDialogPrimitive.Action>
);
