import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { MotionConfig } from "framer-motion";
import { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";
import { Toaster } from "../../molecules/toaster/Toaster";
import { GlobalStyle } from "../globals/globalStyle";
import { usePrefersTheme } from "../hooks/usePrefersTheme";
import { themeBuilder } from "./variables/theme";

export interface MimirorgThemeProviderProps {
  theme?: "light" | "dark" | "tyleLight" | "tyleDark";
}

/**
 * Custom theme provider which exposes a namespaced theme.
 * Also wraps its children with other global dependencies that the components are dependent upon.
 *
 * @param theme
 * @param children
 * @constructor
 */
export const MimirorgThemeProvider = ({ theme = "light", children }: PropsWithChildren<MimirorgThemeProviderProps>) => {
  const [colorTheme] = usePrefersTheme(theme);

  const applicationTheme = {
    mimirorg: themeBuilder(colorTheme),
  };

  return (
    <ThemeProvider theme={applicationTheme}>
      <GlobalStyle />
      <MotionConfig reducedMotion="user">
        <TooltipProvider>{children}</TooltipProvider>
        <Toaster />
      </MotionConfig>
    </ThemeProvider>
  );
};
