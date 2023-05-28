import * as Switch from "@radix-ui/react-switch";
import styled from "styled-components";

export const SwitchRoot = styled(Switch.Root)`
  all: unset;
  width: 42px;
  height: 25px;
  background-color: ${(props) => props.theme.mimir.color.surface.variant.base};
  border-radius: 9999px;
  position: relative;
  box-shadow: ${(props) => props.theme.mimir.shadow.small};
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  :hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.mimir.color.secondary.container?.base};
  }

  :focus {
    box-shadow: ${(props) => props.theme.mimir.shadow.small};
  }
`;

export const SwitchThumb = styled(Switch.Thumb)`
  display: block;
  width: 21px;
  height: 21px;
  background-color: ${(props) => props.theme.mimir.color.text.on};
  border-radius: 9999px;
  box-shadow: ${(props) => props.theme.mimir.shadow.small};
  transition: transform 100ms;
  transform: translateX(2px);
  will-change: transform;

  &[data-state="checked"] {
    transform: translateX(19px);
    background-color: ${(props) => props.theme.mimir.color.primary.base};
  }
`;
