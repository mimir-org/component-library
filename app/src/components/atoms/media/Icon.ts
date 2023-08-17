import { ImgHTMLAttributes } from "react";
import styled from "styled-components";
import { Sizing } from "../../core/props";
import { sizingMixin } from "../../core/theme/helpers";

export type IconProps = ImgHTMLAttributes<HTMLImageElement> &
  Sizing & {
    size?: number;
  };

/**
 * A simple wrapper over the img-tag
 * Has a default width and height of 1em
 * @param size sets height and width of icon
 */
export const Icon = styled.img<IconProps>`
  display: inline-block;
  width: ${(props) => (props.size ? `${props.size}px` : "1em")};
  height: ${(props) => (props.size ? `${props.size}px` : "1em")};
  line-height: 1;
  ${sizingMixin};
`;
