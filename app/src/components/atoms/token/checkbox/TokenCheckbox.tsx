import { CheckboxProps, Root as CheckboxRoot } from "@radix-ui/react-checkbox";
import { ForwardedRef, forwardRef } from "react";
import { useTheme } from "styled-components";
import { Text } from "../../../atoms";
import { MotionTokenContainer } from "../Token.styled";

export type TokenCheckboxProps = Omit<CheckboxProps, "asChild">;

/**
 * A checkbox wrapper for the Token component.
 *
 * For documentation about the underlying checkbox component see the link below.
 * @see https://www.radix-ui.com/docs/primitives/components/checkbox
 *
 * @param children text to be displayed inside token
 * @constructor
 */
export const TokenCheckbox = forwardRef((props: TokenCheckboxProps, ref: ForwardedRef<HTMLButtonElement>) => {
  const theme = useTheme();
  const { children, ...delegated } = props;

  return (
    <CheckboxRoot asChild {...delegated}>
      <MotionTokenContainer
        as={"button"}
        ref={ref}
        variant={"secondary"}
        $interactive
        {...theme.mimirorg.animation.checkboxTap}
      >
        <Text variant={"label-small"} useEllipsis ellipsisMaxLines={1}>
          {children}
        </Text>
      </MotionTokenContainer>
    </CheckboxRoot>
  );
});

TokenCheckbox.displayName = "TokenCheckbox";
