import { ExclamationCircle } from "@styled-icons/heroicons-outline";
import { PropsWithChildren } from "react";
import { useTheme } from "styled-components";
import { ConditionalWrapper } from "../../atoms/conditional/ConditionalWrapper";
import { Text } from "../../atoms/text/Text";
import { Flexbox } from "../../layouts";
import { FormFieldLabelText } from "./FormField.styled";

interface FormFieldProps {
  label?: string;
  error?: { message?: string };
  indent?: boolean;
}

/**
 * A component for wrapping form inputs with an error message and/or a label
 *
 * @param label describing the input
 * @param error message for the given input
 * @param indent if the label should be indented
 * @param children
 * @constructor
 */
export const FormField = ({ label, error, indent = true, children }: PropsWithChildren<FormFieldProps>) => {
  const theme = useTheme();
  const hasLabel = !!label?.length;

  return (
    <Flexbox flexDirection={"column"} gap={theme.mimir.spacing.s}>
      <Flexbox as={hasLabel ? "label" : "div"} flexDirection={"column"} gap={theme.mimir.spacing.xs}>
        <ConditionalWrapper
          condition={hasLabel}
          wrapper={(c) => (
            <>
              <FormFieldLabelText indent={indent} variant={"label-medium"}>
                {label}
              </FormFieldLabelText>
              {c}
            </>
          )}
        >
          <>{children}</>
        </ConditionalWrapper>
      </Flexbox>

      {error && error.message && (
        <Flexbox alignItems={"center"} gap={theme.mimir.spacing.s} {...theme.mimir.animation.fade}>
          <ExclamationCircle size={"14px"} color={theme.mimir.color.error.base} />
          <Text variant={"label-medium"} color={theme.mimir.color.error.base}>
            {error.message}
          </Text>
        </Flexbox>
      )}
    </Flexbox>
  );
};
