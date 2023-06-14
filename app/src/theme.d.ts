import { Theme } from "./components/core/theme/props";

declare module "styled-components" {
  export interface DefaultTheme {
    mimir: Theme;
  }
}
