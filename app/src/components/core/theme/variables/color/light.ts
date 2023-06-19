import { ColorSystem } from "../../props";
import { colorReference } from "./reference/colorReference";

export const light: ColorSystem = {
  reference: colorReference,
  text: {
    base: colorReference.neutralVariant[10],
    on: colorReference.neutralVariant[100],
  },
  primary: {
    base: colorReference.primary[20],
    on: colorReference.primary[100],
  },
  secondary: {
    base: colorReference.secondary[60],
    on: colorReference.secondary[100],
    container: {
      base: colorReference.secondary[95],
      on: colorReference.secondary[10],
    },
  },
  tertiary: {
    base: colorReference.tertiary[70],
    on: colorReference.tertiary[100],
    container: {
      base: colorReference.tertiary[95],
      on: colorReference.tertiary[10],
    },
  },
  success: {
    base: colorReference.success[70],
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
    base: colorReference.neutralVariant[80],
  },
  background: {
    base: colorReference.neutralVariant[100],
    on: colorReference.neutralVariant[10],
    inverse: {
      base: colorReference.neutralVariant[10],
      on: colorReference.neutralVariant[100],
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
      base: colorReference.neutralVariant[99],
      on: colorReference.neutralVariant[20],
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
