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
      {...theme.mimirorg.animation.fade}
      spacing={{ p: theme.mimirorg.spacing.l }}
      bgColor={theme.mimirorg.color.error.on}
      color={theme.mimirorg.color.error.base}
    >
      {children}
    </Box>
  );
};
