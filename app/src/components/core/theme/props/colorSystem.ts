import { Accent } from "./accent";
import { ColorReference } from "./colorReference";

export interface ColorSystem {
  reference: ColorReference;
  text: Accent;
  primary: Accent;
  secondary: Accent;
  tertiary: Accent;
  success: Accent;
  error: Accent;
  warning: Accent;
  outline: Pick<Accent, "base">;
  background: Pick<Accent, "base" | "on"> & {
    inverse: Pick<Accent, "base" | "on">;
  };
  surface: Pick<Accent, "base" | "on"> & {
    variant: Pick<Accent, "base" | "on">;
    inverse: Pick<Accent, "base" | "on">;
  };
  shadow: Pick<Accent, "base">;
  pure: Accent;
}
