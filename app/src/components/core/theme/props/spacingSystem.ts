export interface SpacingSystem {
  unit: number;
  xs: string;
  s: string;
  base: string;
  l: string;
  xl: string;
  xxl: string;
  xxxl: string;
  multiple: (scalar: number) => string;
}
