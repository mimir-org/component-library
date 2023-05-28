export interface QuerySystem {
  breakpoints: {
    phoneMax: number;
    tabletMax: number;
    laptopMax: number;
  };
  phoneAndBelow: () => string;
  tabletAndBelow: () => string;
  laptopAndBelow: () => string;
}
