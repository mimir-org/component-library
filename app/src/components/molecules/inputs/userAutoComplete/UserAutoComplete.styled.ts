import styled from "styled-components";

export type UserAutoCompleteItemElementProps = {
  active: boolean;
};

export const UserAutoCompleteContainer = styled.div``;

export const UserAutoCompleteItemContainer = styled.ul`
  border: 1px solid ${(props) => props.theme.mimir.color.outline.base};
  border-top-width: 0;
  list-style: none;
  margin-top: 3px;
  max-height: 143px;
  overflow-y: auto;
  padding-left: 0;
`;

export const UserAutoCompleteItemElement = styled.li<UserAutoCompleteItemElementProps>`
  padding: 0.5rem;

  &:active,
  &:hover,
  .user-active {
    background-color: ${(props) => props.theme.mimir.color.primary.base};
    color: ${(props) => props.theme.mimir.color.primary.on};
    cursor: pointer;
    font-weight: ${(props) => props.theme.mimir.typography.typeface.weights.bold};
  }

  &:not(:last-of-type) {
    border-bottom: 1px solid ${(props) => props.theme.mimir.color.outline.base};
  }

  background-color: ${(props) => props.active && props.theme.mimir.color.primary.base};
  color: ${(props) => props.active && props.theme.mimir.color.primary.on};
  cursor: ${(props) => props.active && "pointer"};
  font-weight: ${(props) => props.active && props.theme.mimir.typography.typeface.weights.bold};
`;
