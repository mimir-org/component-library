import { Text } from "../../atoms/text/Text";
import { Flexbox } from "../../layouts/Flexbox.styled";

interface Props {
  title?: string;
  subtitle?: string;
}

/**
 * A component for describing a given form
 * @param title
 * @param subTitle
 * @constructor
 */
export const FormHeader = ({ title, subtitle }: Props) => (
  <Flexbox as={"header"} flexDirection={"column"}>
    {title && <Text as={"h1"}>{title}</Text>}
    {subtitle && <Text as={"h2"}>{subtitle}</Text>}
  </Flexbox>
);
