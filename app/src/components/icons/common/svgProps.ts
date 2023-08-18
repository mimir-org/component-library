import { SVGProps } from "react";
import { Sizing } from "../../core/props";

export interface SvgProps extends Omit<SVGProps<SVGSVGElement>, "height" | "width">, Sizing, SvgPartial {}

interface SvgPartial {
  size?: number;
}
