import styled from "styled-components";
import { sizingMixin } from "../../core/theme/helpers";
import { AccordionProps } from "./Accordion";

export const StyledAccordionRoot = styled.div<Pick<AccordionProps, "type">>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => (props.type === "multiple" ? props.theme.mimirorg.spacing.base : props.theme.mimirorg.spacing.xs)};
  ${sizingMixin};
`;
