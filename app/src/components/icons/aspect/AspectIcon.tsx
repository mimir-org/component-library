import styled from "styled-components";
import { svgMixin } from "../common/svgMixin";
import { SvgProps } from "../common/svgProps";
import Function from "./function.jsx.svg";
import FunctionFilter from "./functionFilterIcon.jsx.svg";
import Location from "./location.jsx.svg";
import LocationFilter from "./locationFilterIcon.jsx.svg";
import Product from "./product.jsx.svg";
import ProductFilter from "./productFilterIcon.jsx.svg";

export const FunctionIcon = styled(Function)<SvgProps>`
  ${svgMixin};
`;

export const FunctionFilterIcon = styled(FunctionFilter)<SvgProps>`
  ${svgMixin};
`;

export const LocationIcon = styled(Location)<SvgProps>`
  ${svgMixin};
`;

export const LocationFilterIcon = styled(LocationFilter)<SvgProps>`
  ${svgMixin};
`;

export const ProductIcon = styled(Product)<SvgProps>`
  ${svgMixin};
`;

export const ProductFilterIcon = styled(ProductFilter)<SvgProps>`
  ${svgMixin};
`;
