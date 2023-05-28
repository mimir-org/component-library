import { Link } from "react-router-dom";
import styled from "styled-components";
import { Sizing } from "../../core/props";
import { sizingMixin } from "../../core/theme/helpers";

type PlainLinkProps = Sizing;

/**
 * Removes styles from react router links.
 * Useful when wrapping other elements with navigation semantics.
 */
export const PlainLink = styled(Link)<PlainLinkProps>`
  color: inherit;
  text-decoration: inherit;

  :link,
  :hover {
    color: inherit;
    text-decoration: inherit;
  }

  ${sizingMixin};
`;
