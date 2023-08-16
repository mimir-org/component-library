import { useTheme } from "styled-components";
import { Heading } from "../../atoms";
import { FullPageSpinnerContainer } from "./FullPageSpinner.styled";
import { Spinner } from "./Spinner";

interface Props {
  text?: string;
}

/**
 * Spinner that is centered and fills the whole screen
 * @param text Text which is shown to the left of the spinner animation
 * @constructor
 */
export const FullPageSpinner = ({ text }: Props) => {
  const theme = useTheme();

  return (
    <FullPageSpinnerContainer>
      <Heading color={theme.mimirorg.color.background.on}>{text}</Heading>
      <Spinner disabled={false} />
    </FullPageSpinnerContainer>
  );
};
