import { TextTypes } from "../../../props";
import { NominalScale, TypographyRoles } from "../../props";
import { theme } from "../../variables";
import { css } from "styled-components";

export const getTextRole = (variant?: TextTypes) => {
  if (!variant) return "";

  const [type, size] = variant.split("-");
  const textType = theme.typography.roles[type as keyof TypographyRoles][size as keyof NominalScale];

  return css`
    font: ${textType.font};
    letter-spacing: ${textType.letterSpacing};
    line-height: ${textType.lineHeight};
  `;
};
