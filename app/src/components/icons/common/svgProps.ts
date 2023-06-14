import { SVGProps } from "react";
import { Sizing } from "../../core/props";

export type SvgProps = SVGProps<SVGSVGElement> &
  Sizing & {
    size?: number;
  };
