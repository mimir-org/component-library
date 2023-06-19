import { ColorSystem } from "../../props";
import { colorReference } from "./reference/colorReference";

export const dark: ColorSystem = {
  reference: colorReference,
  text: {
    base: colorReference.neutralVariant[100],
    on: colorReference.neutralVariant[0],
  },
  primary: {
    base: colorReference.primary[40],
    on: colorReference.primary[99],
  },
  secondary: {
    base: colorReference.secondary[80],
    on: colorReference.secondary[20],
    container: {
      base: colorReference.secondary[30],
      on: colorReference.secondary[90],
    },
  },
  tertiary: {
    base: colorReference.tertiary[80],
    on: colorReference.tertiary[20],
    container: {
      base: colorReference.tertiary[30],
      on: colorReference.tertiary[90],
    },
  },
  success: {
    base: colorReference.success[80],
    on: colorReference.success[20],
  },
  error: {
    base: colorReference.error[80],
    on: colorReference.error[20],
  },
  warning: {
    base: colorReference.warning[80],
    on: colorReference.warning[10],
  },
  outline: {
    base: colorReference.neutralVariant[40],
  },
  background: {
    base: colorReference.neutralVariant[10],
    on: colorReference.neutralVariant[100],
    inverse: {
      base: colorReference.neutralVariant[100],
      on: colorReference.neutralVariant[10],
    },
  },
  surface: {
    base: colorReference.neutral[0],
    on: colorReference.neutral[99],
    inverse: {
      base: colorReference.neutral[99],
      on: colorReference.neutral[0],
    },
    variant: {
      base: colorReference.neutralVariant[30],
      on: colorReference.neutralVariant[80],
    },
  },
  shadow: {
    base: colorReference.neutral[0],
  },
  pure: {
    base: colorReference.neutral[0],
    on: colorReference.neutral[100],
  },
  functionAspect: {
    base: colorReference.functionAspect[95],
    on: colorReference.functionAspect[0],
  },
  productAspect: {
    base: colorReference.productAspect[90],
    on: colorReference.productAspect[0],
  },
  locationAspect: {
    base: colorReference.locationAspect[60],
    on: colorReference.locationAspect[0],
  },
};
