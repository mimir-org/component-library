import { createGlobalStyle } from "styled-components";
import { getTextRole } from "../theme/helpers";
import { globalResetStyle } from "./globalResetStyle";

export const GlobalStyle = createGlobalStyle`
  ${globalResetStyle};

  body {
    background: ${({ theme }) => theme.mimirorg.color.background.base};
  }

  // Global typography styles
  body {
    font-family: ${({ theme }) => theme.mimirorg.typography.typeface.brand};
    font-weight: ${({ theme }) => theme.mimirorg.typography.typeface.weights.normal};
    font-size: 100%;
    color: ${({ theme }) => theme.mimirorg.color.text.base};
  }

  h1 {
    ${getTextRole("display-large")};
  }

  h2 {
    ${getTextRole("display-medium")};
  }

  h3 {
    ${getTextRole("display-small")};
  }

  h4 {
    ${getTextRole("headline-large")};
  }

  h5 {
    ${getTextRole("headline-medium")};
  }

  h6 {
    ${getTextRole("headline-small")};
  }

  p,
  a {
    ${getTextRole("body-large")};
  }

  a:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  b,
  strong {
    ${getTextRole("body-large")};
    font-weight: ${({ theme }) => theme.mimirorg.typography.typeface.weights.bold};
  }

  small {
    ${getTextRole("body-small")};
  }

  ::-webkit-scrollbar {
    width: 14px;
    height: 18px;
  }

  ::-webkit-scrollbar-thumb {
    border: 4px solid rgba(0, 0, 0, 0);
    background-clip: padding-box;
    border-radius: 7px;
    background-color: #C4C4C4;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;
