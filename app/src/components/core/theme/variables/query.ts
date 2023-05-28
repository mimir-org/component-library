import { QuerySystem } from "../props";

export const query: QuerySystem = {
  breakpoints: {
    phoneMax: 550,
    tabletMax: 1100,
    laptopMax: 1500,
  },
  phoneAndBelow: () => `(max-width: ${query.breakpoints.phoneMax}px)`,
  tabletAndBelow: () => `(max-width: ${query.breakpoints.tabletMax}px)`,
  laptopAndBelow: () => `(max-width: ${query.breakpoints.laptopMax}px)`,
};
