import { ForwardedRef, forwardRef, InputHTMLAttributes, isValidElement, ReactElement } from "react";
import { Icon } from "../../../atoms/media/Icon";
import { Sizing } from "../../../core/props";
import { Box } from "../../../layouts";
import { InputContainer, InputIconContainer } from "./Input.styled";

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
      <InputContainer ref={ref} type={type} iconPlacement={iconPlacement} icon={icon} {...delegated} />
      {icon && (
        <InputIconContainer iconPlacement={iconPlacement} icon={icon}>
          {isValidElement(icon) ? icon : <Icon src={String(icon)} alt="" />}
        </InputIconContainer>
      )}
    </Box>
  );
});

Input.displayName = "Input";
Input.defaultProps = {
  height: "40px",
  iconPlacement: "right",
};
