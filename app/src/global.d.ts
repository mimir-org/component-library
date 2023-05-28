import { FunctionComponent, SVGProps } from "react";
import { Theme } from "./components/core/theme/props";

declare module "*.module.css";

declare module "styled-components" {
  export interface DefaultTheme {
    mimir: Theme;
  }
}

declare module "*.svg" {
  export const ReactComponent: FunctionComponent<SVGProps<SVGSVGElement> & { title?: string }>;
  const src: string;
  export default src;
}
declare module "*.png" {
  const value: unknown;
  export default value;
}
