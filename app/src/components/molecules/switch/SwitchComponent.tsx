import { SwitchProps } from "@radix-ui/react-switch";
import { useState } from "react";
import { useTheme } from "styled-components";
import { Text } from "../../atoms";
import { Spacings } from "../../core/props";
import { Flexbox } from "../../layouts/Flexbox.styled";
import { SwitchRoot, SwitchThumb } from "./SwitchComponent.styled";

export type SwitchComponentProps = Spacings &
  SwitchProps & {
    text?: string;
    onSwitchChange?: (status: boolean) => void;
  };

/**
 * Component that displays a switch with label.
 *
 * @see https://www.radix-ui.com/docs/primitives/components/switch
 *
 * @param text label text
 * @param checked check status
 * @constructor
 */
export const SwitchComponent = (props: SwitchComponentProps) => {
  const theme = useTheme();
  const [status, setStatus] = useState(props.checked);

  const onCheckedChange = (status: boolean) => {
    setStatus(status);
    if (props.onSwitchChange != null) {
      props.onSwitchChange(status);
    }
  };

  return (
    <Flexbox alignItems={"center"}>
      <Text htmlFor="airplane-mode" as="label" variant="label-medium" spacing={{ mr: theme.mimirorg.spacing.l }}>
        {props.text}
      </Text>
      <SwitchRoot id="airplane-mode" checked={status} onCheckedChange={onCheckedChange}>
        <SwitchThumb />
      </SwitchRoot>
    </Flexbox>
  );
};

SwitchComponent.displayName = "SwitchComponent";
SwitchComponent.defaultProps = {
  text: "",
  checked: false,
};
