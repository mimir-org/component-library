import { ForwardedRef, forwardRef, isValidElement, ReactElement, ReactNode } from "react";
import { useTheme } from "styled-components";
import { TextTypes } from "./../../core/props/textVariant";
import { VisuallyHidden } from "./../hidden/VisuallyHidden";
import { Icon } from "./../media/Icon";
import { Text } from "./../text/Text";
import { ButtonContainerProps, MotionButtonContainer } from "./Button.styled";

export type ButtonProps = ButtonContainerProps & {
  children: ReactNode;
  icon?: string | ReactElement;
  iconPlacement?: "left" | "right";
  iconOnly?: boolean;
  textVariant?: TextTypes;
  dangerousAction?: boolean;
  buttonColor?: "primary" | "success" | "warning" | "error";
};

/**
 * A button with different variants.
 * A typical use case is in forms or navigation purposes.
 * original component props with the props of the supplied element/component and change the underlying DOM node.
 *
 * @param props Typical button properties as sizing, spacing, icons and variants.
 * @constructor
 */
export const Button = forwardRef((props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
  const theme = useTheme();
  const { children, icon, iconPlacement, iconOnly, textVariant, buttonColor, ...delegated } = props;

  return (
    <MotionButtonContainer
      ref={ref}
      iconOnly={iconOnly}
      iconPlacement={iconPlacement}
      buttonColor={buttonColor}
      {...theme.mimirorg.animation.buttonTap}
      {...delegated}
    >
      {icon && iconOnly ? (
        <VisuallyHidden>{children}</VisuallyHidden>
      ) : (
        <Text as={"span"} variant={textVariant}>
          {children}
        </Text>
      )}
      {icon && (isValidElement(icon) ? icon : <Icon src={String(icon)} alt="" />)}
    </MotionButtonContainer>
  );
});

Button.displayName = "Button";
Button.defaultProps = {
  type: "button",
  iconPlacement: "right",
  textVariant: "body-small",
};
