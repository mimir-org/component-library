import { CircleLoader, ScaleLoader } from "react-spinners";
import { useTheme } from "styled-components";
import { SpinnerContainer, SpinnerOverlay } from "./Spinner.styled";

interface SpinnerProps {
  variant?: "scale" | "circle";
  disabled: boolean;
}

/**
 * Component the draws a spinner on screen
 *
 * @param variant spinner variants
 * @param disabled
 * @constructor
 */
export const Spinner = ({ variant, disabled }: SpinnerProps) => {
  const theme = useTheme();

  return (
    <>
      {!disabled && (
        <SpinnerOverlay>
          <SpinnerContainer>
            {variant && variant === "circle" && <CircleLoader color={theme.mimirorg.color.primary.base} />}
            {variant && variant === "scale" && <ScaleLoader color={theme.mimirorg.color.primary.base} />}
          </SpinnerContainer>
        </SpinnerOverlay>
      )}
    </>
  );
};

Spinner.displayName = "Spinner";
Spinner.defaultValues = {
  variant: "circle",
  disabled: true,
};
