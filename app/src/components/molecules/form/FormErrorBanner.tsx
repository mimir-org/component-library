import { ReactNode } from "react";
import { useTheme } from "styled-components";
import { Box } from "../../layouts";

interface FormErrorBannerProps {
  children?: ReactNode;
}

/**
 * Banner for displaying global error information in forms
 */
export const FormErrorBanner = ({ children }: FormErrorBannerProps) => {
  const theme = useTheme();

  return (
    <Box
      {...theme.mimir.animation.fade}
      spacing={{ p: theme.mimir.spacing.l }}
      bgColor={theme.mimir.color.error.on}
      color={theme.mimir.color.error.base}
    >
      {children}
    </Box>
  );
};
