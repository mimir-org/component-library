import { TypefaceReference } from "./typefaceReference";
import { TypeScaleSpecification } from "./typeScaleSpecification";
import { TypographyRoles } from "./typographyRoles";

export interface TypographySystem {
  typeface: TypefaceReference;
  typeScale: TypeScaleSpecification<number>;
  typeScaleSystem: TypeScaleSpecification<string>;
  roles: TypographyRoles;
}
