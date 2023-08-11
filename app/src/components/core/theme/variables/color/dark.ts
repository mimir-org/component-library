import { ColorSystem } from "../../props";
import { mimirColorReference } from "./reference/mimirColorReference";

export const dark: ColorSystem = {
  reference: mimirColorReference,
  text: {
    base: mimirColorReference.neutralVariant[100],
    on: mimirColorReference.neutralVariant[0],
  },
  primary: {
    base: mimirColorReference.primary[40],
    on: mimirColorReference.primary[99],
  },
  secondary: {
    base: mimirColorReference.secondary[80],
    on: mimirColorReference.secondary[20],
    container: {
      base: mimirColorReference.secondary[30],
      on: mimirColorReference.secondary[90],
    },
  },
  tertiary: {
    base: mimirColorReference.tertiary[80],
    on: mimirColorReference.tertiary[20],
    container: {
      base: mimirColorReference.tertiary[30],
      on: mimirColorReference.tertiary[90],
    },
  },
  success: {
    base: mimirColorReference.success[80],
    on: mimirColorReference.success[20],
  },
  error: {
    base: mimirColorReference.error[80],
    on: mimirColorReference.error[20],
  },
  warning: {
    base: mimirColorReference.warning[80],
    on: mimirColorReference.warning[10],
  },
  dangerousAction: {
    base: mimirColorReference.dangerousAction[10],
    on: mimirColorReference.dangerousAction[60],
  },
  outline: {
    base: mimirColorReference.neutralVariant[40],
  },
  background: {
    base: mimirColorReference.neutralVariant[10],
    on: mimirColorReference.neutralVariant[100],
    inverse: {
      base: mimirColorReference.neutralVariant[100],
      on: mimirColorReference.neutralVariant[10],
    },
  },
  surface: {
    base: mimirColorReference.neutral[0],
    on: mimirColorReference.neutral[99],
    inverse: {
      base: mimirColorReference.neutral[99],
      on: mimirColorReference.neutral[0],
    },
    variant: {
      base: mimirColorReference.neutralVariant[30],
      on: mimirColorReference.neutralVariant[80],
    },
    tint: {
      base: mimirColorReference.primary[80],
    },
  },
  shadow: {
    base: mimirColorReference.neutral[0],
  },
  pure: {
    base: mimirColorReference.neutral[0],
    on: mimirColorReference.neutral[100],
  },
  badge: {
    success: {
      base: mimirColorReference.secondary[80],
      on: mimirColorReference.secondary[10],
    },
    error: {
      base: mimirColorReference.error[40],
      on: mimirColorReference.error[100],
    },
    warning: {
      base: mimirColorReference.neutral[80],
      on: mimirColorReference.neutral[10],
    },
    info: {
      base: mimirColorReference.neutral[80],
      on: mimirColorReference.neutral[10],
    },
  },
  functionAspect: {
    base: mimirColorReference.functionAspect[95],
    on: mimirColorReference.functionAspect[0],
  },
  productAspect: {
    base: mimirColorReference.productAspect[90],
    on: mimirColorReference.productAspect[0],
  },
  locationAspect: {
    base: mimirColorReference.locationAspect[60],
    on: mimirColorReference.locationAspect[0],
  },
};
