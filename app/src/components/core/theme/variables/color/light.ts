import { ColorSystem } from "../../props";
import { colorReference } from "./reference/colorReference";

export const light: ColorSystem = {
  reference: colorReference,
  text: {
    base: colorReference.neutralVariant[0],
    on: colorReference.neutralVariant[100],
  },
  primary: {
    base: colorReference.primary[10],
    on: colorReference.primary[100],
  },
  secondary: {
    base: colorReference.secondary[90],
    on: colorReference.secondary[0],
    container: {
      base: colorReference.secondary[99],
      on: colorReference.secondary[0],
    },
  },
  tertiary: {
    base: colorReference.tertiary[99],
    on: colorReference.tertiary[0],
    container: {
      base: colorReference.neutralVariant[40],
      on: colorReference.tertiary[100],
    },
  },
  success: {
    base: colorReference.success[60],
    on: colorReference.success[100],
  },
  error: {
    base: colorReference.error[40],
    on: colorReference.error[100],
  },
  warning: {
    base: colorReference.warning[95],
    on: colorReference.warning[0],
  },
  outline: {
    base: colorReference.neutralVariant[50],
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
    base: colorReference.neutral[99],
    on: colorReference.neutral[10],
    inverse: {
      base: colorReference.neutral[10],
      on: colorReference.neutral[99],
    },
    variant: {
      base: colorReference.neutral[95],
      on: colorReference.neutralVariant[0],
    },
  },
  shadow: {
    base: colorReference.neutral[0],
  },
  pure: {
    base: colorReference.neutral[100],
    on: colorReference.neutral[0],
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
