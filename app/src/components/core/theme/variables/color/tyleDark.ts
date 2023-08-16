import { ColorSystem } from "../../props";
import { tyleColorReference } from "./reference/tyleColorReference";

export const tyleDark: ColorSystem = {
  reference: tyleColorReference,
  text: {
    base: tyleColorReference.neutralVariant[100],
    on: tyleColorReference.neutralVariant[0],
  },
  primary: {
    base: tyleColorReference.neutral[60],
    on: tyleColorReference.primary[0],
  },
  secondary: {
    base: tyleColorReference.secondary[70],
    on: tyleColorReference.secondary[0],
    container: {
      base: tyleColorReference.secondary[10],
      on: tyleColorReference.secondary[0],
    },
  },
  tertiary: {
    base: tyleColorReference.tertiary[20],
    on: tyleColorReference.primary[99],
    container: {
      base: tyleColorReference.tertiary[50],
      on: tyleColorReference.primary[0],
    },
  },
  success: {
    base: tyleColorReference.success[80],
    on: tyleColorReference.success[20],
  },
  error: {
    base: tyleColorReference.error[80],
    on: tyleColorReference.error[20],
  },
  warning: {
    base: tyleColorReference.warning[90],
    on: tyleColorReference.warning[10],
  },
  dangerousAction: {
    base: tyleColorReference.dangerousAction[10],
    on: tyleColorReference.dangerousAction[60],
  },
  outline: {
    base: tyleColorReference.neutralVariant[30],
  },
  background: {
    base: tyleColorReference.neutral[10],
    on: tyleColorReference.neutral[90],
    inverse: {
      base: tyleColorReference.neutral[90],
      on: tyleColorReference.neutral[20],
    },
  },
  surface: {
    base: tyleColorReference.neutral[20],
    on: tyleColorReference.neutral[80],
    variant: {
      base: tyleColorReference.neutralVariant[30],
      on: tyleColorReference.neutralVariant[50],
    },
    inverse: {
      base: tyleColorReference.neutral[90],
      on: tyleColorReference.neutral[20],
    },
    tint: {
      base: tyleColorReference.primary[80],
    },
  },
  shadow: {
    base: tyleColorReference.neutral[50],
  },
  pure: {
    base: tyleColorReference.neutral[20],
    on: tyleColorReference.neutral[100],
  },
  badge: {
    success: {
      base: tyleColorReference.secondary[80],
      on: tyleColorReference.secondary[10],
    },
    error: {
      base: tyleColorReference.error[40],
      on: tyleColorReference.error[100],
    },
    warning: {
      base: tyleColorReference.neutral[80],
      on: tyleColorReference.neutral[10],
    },
    info: {
      base: tyleColorReference.neutral[80],
      on: tyleColorReference.neutral[10],
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
