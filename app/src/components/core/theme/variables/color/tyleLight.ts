import { ColorSystem } from "../../props";
import { tyleColorReference } from "./reference/tyleColorReference";

export const tyleLight: ColorSystem = {
  reference: tyleColorReference,
  text: {
    base: tyleColorReference.neutralVariant[10],
    on: tyleColorReference.neutralVariant[100],
  },
  primary: {
    base: tyleColorReference.primary[10],
    on: tyleColorReference.primary[100],
  },
  secondary: {
    base: tyleColorReference.secondary[80],
    on: tyleColorReference.secondary[0],
    container: {
      base: tyleColorReference.secondary[99],
      on: tyleColorReference.secondary[0],
    },
  },
  tertiary: {
    base: tyleColorReference.tertiary[80],
    on: tyleColorReference.primary[10],
    container: {
      base: tyleColorReference.tertiary[95],
      on: tyleColorReference.primary[10],
    },
  },
  success: {
    base: tyleColorReference.success[70],
    on: tyleColorReference.success[100],
  },
  error: {
    base: tyleColorReference.error[40],
    on: tyleColorReference.error[100],
  },
  warning: {
    base: tyleColorReference.warning[95],
    on: tyleColorReference.warning[0],
  },
  dangerousAction: {
    base: tyleColorReference.dangerousAction[95],
    on: tyleColorReference.dangerousAction[10],
  },
  outline: {
    base: tyleColorReference.neutralVariant[60],
  },
  background: {
    base: tyleColorReference.neutral[99],
    on: tyleColorReference.neutral[10],
    inverse: {
      base: tyleColorReference.neutral[10],
      on: tyleColorReference.neutral[99],
    },
  },
  surface: {
    base: tyleColorReference.neutral[95],
    on: tyleColorReference.neutral[10],
    variant: {
      base: tyleColorReference.neutralVariant[90],
      on: tyleColorReference.neutralVariant[30],
    },
    inverse: {
      base: tyleColorReference.neutral[10],
      on: tyleColorReference.neutral[95],
    },
    tint: {
      base: tyleColorReference.primary[10],
    },
  },
  shadow: {
    base: tyleColorReference.neutral[0],
  },
  pure: {
    base: tyleColorReference.neutral[100],
    on: tyleColorReference.neutral[0],
  },
  badge: {
    success: {
      base: tyleColorReference.secondary[90],
      on: tyleColorReference.secondary[10],
    },
    error: {
      base: tyleColorReference.error[40],
      on: tyleColorReference.error[100],
    },
    warning: {
      base: tyleColorReference.warning[90],
      on: tyleColorReference.warning[30],
    },
    info: {
      base: tyleColorReference.tertiary[90],
      on: tyleColorReference.tertiary[10],
    },
  },
  functionAspect: {
    base: tyleColorReference.functionAspect[95],
    on: tyleColorReference.functionAspect[0],
  },
  productAspect: {
    base: tyleColorReference.productAspect[90],
    on: tyleColorReference.productAspect[0],
  },
  locationAspect: {
    base: tyleColorReference.locationAspect[60],
    on: tyleColorReference.locationAspect[0],
  },
};
