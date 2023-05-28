import { DocsContainer } from "@storybook/addon-docs";
import React from "react";
import { MimirorgThemeProvider } from "../src/components/core/theme";

window.React = React;

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    container: ({ children, context }) => (
      <MimirorgThemeProvider>
        <DocsContainer context={context}>{children}</DocsContainer>
      </MimirorgThemeProvider>
    ),
  },
  backgrounds: {
    default: 'white',
    values: [
      {
        name: 'gray',
        value: '#F3F5FB',
      },
      {
        name: 'white',
        value: '#FFFFFF',
      },
      {
        name: 'black',
        value: '#000000',
      },
      {
        name: 'blue',
        value: '#2E48A0',
      },
    ],
  },
};

export const decorators = [
  (Story) => (
    <MimirorgThemeProvider>
      <Story />
    </MimirorgThemeProvider>
  ),
];