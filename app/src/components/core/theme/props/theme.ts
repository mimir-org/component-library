import { AnimationSystem } from "./animationSystem";
import { BorderSystem } from "./borderSystem";
import { ColorSystem } from "./colorSystem";
import { QuerySystem } from "./querySystem";
import { ShadowSystem } from "./shadowSystem";
import { SpacingSystem } from "./spacingSystem";
import { StateSystem } from "./stateSystem";
import { TypographySystem } from "./typographySystem";

export interface Theme {
  border: BorderSystem;
  color: ColorSystem;
  typography: TypographySystem;
  shadow: ShadowSystem;
  spacing: SpacingSystem;
  state: StateSystem;
  animation: AnimationSystem;
  queries: QuerySystem;
}
