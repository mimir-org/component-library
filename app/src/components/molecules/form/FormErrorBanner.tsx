import { ReactNode } from "react";
import { useTheme } from "styled-components";
import { mimirColorReference } from "../../core/theme/variables/color/reference/mimirColorReference";
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
      bgColor={
        theme.mimirorg.color.reference === mimirColorReference
          ? theme.mimirorg.color.error.on
          : theme.mimirorg.color.error.base
      }
      color={
        theme.mimirorg.color.reference === mimirColorReference
          ? theme.mimirorg.color.error.base
          : theme.mimirorg.color.error.on
      }
    >
      {children}
    </Box>
  );
};
