import { ForwardedRef, forwardRef, InputHTMLAttributes, isValidElement, ReactElement, useState } from "react";
import { Icon } from "../../../atoms";
import { Sizing } from "../../../core/props";
import { Box } from "../../../layouts";
import { IconContainer, InputContainer, InputIconContainer } from "./Input.styled";
import { Eye, EyeSlash } from "@styled-icons/heroicons-outline";

export type InputProps = InputHTMLAttributes<HTMLInputElement> &
  Omit<Sizing, "boxSizing"> & {
    icon?: string | ReactElement;
    iconPlacement?: "left" | "right";
  };

/**
 * A simple wrapper over the input-tag, with styling that follows library conventions.
 */
export const Input = forwardRef((props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
  const { width, maxWidth, minWidth, height, maxHeight, minHeight, icon, iconPlacement, type, ...delegated } = props;
  const isHidden = type === "hidden";

  const [showPassword, setShowPassword] = useState(false);
  const currentShowPassword = showPassword ? "text" : "password";
  const isPasswordField = type === "password" ? true : false;
  const showPasswordIcon = showPassword ? <EyeSlash height="24px" width="24px" /> : <Eye height="24px" width="24px" />;

  return (
    <Box
      display={isHidden ? "none" : undefined}
      position={"relative"}
      height={height}
      maxHeight={maxHeight}
      minHeight={minHeight}
      width={width}
      maxWidth={maxWidth}
      minWidth={minWidth}
    >
      <InputContainer
        ref={ref}
        type={isPasswordField ? currentShowPassword : type}
        iconPlacement={iconPlacement}
        icon={icon}
        {...delegated}
      />
      {isPasswordField ? (
        <IconContainer onClick={() => setShowPassword(!showPassword)}>{showPasswordIcon}</IconContainer>
      ) : (
        icon && (
          <InputIconContainer iconPlacement={iconPlacement} icon={icon} type={currentShowPassword}>
            {isValidElement(icon) ? icon : <Icon src={String(icon)} alt="" />}
          </InputIconContainer>
        )
      )}
    </Box>
  );
});
