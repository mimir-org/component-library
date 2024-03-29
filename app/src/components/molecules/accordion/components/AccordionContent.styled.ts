import { Content } from "@radix-ui/react-accordion";
import styled, { css, keyframes } from "styled-components";
import { getTextRole } from "../../../core/theme/helpers";

const emptyState = css`
  padding-top: 0;
  padding-bottom: 0;
  opacity: 0;
  height: 0;
`;

const visibleState = css`
  opacity: 1;
  height: var(--radix-accordion-content-height);
`;

const slideDown = keyframes`
  from {
    ${emptyState}
  }
  to {
    ${visibleState}
  }
`;

const slideUp = keyframes`
  from {
    ${visibleState}
  }
  to {
    ${emptyState}
  }
`;

export const StyledAccordionContent = styled(Content)`
  overflow: hidden;
  color: ${(props) => props.theme.mimirorg.color.secondary.container?.on};
  padding: ${(props) => props.theme.mimirorg.spacing.xl};

  &[data-state="open"] {
    animation: ${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards;
  }

  &[data-state="closed"] {
    animation: ${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards;
  }

  ${getTextRole("body-large")};
`;
