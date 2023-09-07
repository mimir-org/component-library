import { mimirColorReference } from "./reference/mimirColorReference";
import { ColorSystem } from "../../props";

export const light: ColorSystem = {
  reference: mimirColorReference,
  text: {
    base: mimirColorReference.neutralVariant[10],
    on: mimirColorReference.neutralVariant[100],
  },
  primary: {
    base: mimirColorReference.primary[20],
    on: mimirColorReference.primary[100],
  },
  secondary: {
    base: mimirColorReference.secondary[60],
    on: mimirColorReference.secondary[100],
    container: {
      base: mimirColorReference.secondary[95],
      on: mimirColorReference.secondary[10],
    },
  },
  tertiary: {
    base: mimirColorReference.tertiary[70],
    on: mimirColorReference.tertiary[100],
    container: {
      base: mimirColorReference.tertiary[95],
      on: mimirColorReference.tertiary[10],
    },
  },
  success: {
    base: mimirColorReference.success[70],
    on: mimirColorReference.success[100],
  },
  error: {
    base: mimirColorReference.error[40],
    on: mimirColorReference.error[100],
  },
  warning: {
    base: mimirColorReference.warning[95],
    on: mimirColorReference.warning[0],
  },
  dangerousAction: {
    base: mimirColorReference.dangerousAction[95],
    on: mimirColorReference.dangerousAction[10],
  },
  outline: {
    base: mimirColorReference.neutralVariant[80],
  },
  background: {
    base: mimirColorReference.neutralVariant[100],
    on: mimirColorReference.neutralVariant[10],
    inverse: {
      base: mimirColorReference.neutralVariant[10],
      on: mimirColorReference.neutralVariant[100],
    },
  },
  surface: {
    base: mimirColorReference.neutral[99],
    on: mimirColorReference.neutral[10],
    inverse: {
      base: mimirColorReference.neutral[10],
      on: mimirColorReference.neutral[99],
    },
    variant: {
      base: mimirColorReference.neutralVariant[99],
      on: mimirColorReference.neutralVariant[20],
    },
    tint: {
      base: mimirColorReference.primary[10],
    },
  },
  shadow: {
    base: mimirColorReference.neutral[0],
  },
  pure: {
    base: mimirColorReference.neutral[100],
    on: mimirColorReference.neutral[0],
  },
  badge: {
    success: {
      base: mimirColorReference.secondary[90],
      on: mimirColorReference.secondary[10],
    },
    error: {
      base: mimirColorReference.error[40],
      on: mimirColorReference.error[100],
    },
    warning: {
      base: mimirColorReference.warning[90],
      on: mimirColorReference.warning[30],
    },
    info: {
      base: mimirColorReference.tertiary[90],
      on: mimirColorReference.tertiary[10],
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
