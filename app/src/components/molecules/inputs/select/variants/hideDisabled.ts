import { GroupBase, StylesConfig } from "react-select";
import { Theme } from "../../../../core/theme/props";
import { mimirColorReference } from "../../../../core/theme/variables/color/reference/mimirColorReference";

export const getHideDisabledStyle = <Option, IsMulti extends boolean, Group extends GroupBase<Option>>(
  theme: Theme
): StylesConfig<Option, IsMulti, Group> => ({
  container: (base, state) => ({
    ...base,
    height: state.isMulti ? "auto" : "40px",
  }),
  control: (base, state) => ({
    ...base,
    boxShadow: "none",
    minWidth: "250px",
    width: "100%",
    minHeight: "40px",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: theme.color.outline.base,
    backgroundColor: state.isDisabled ? theme.color.outline.base : theme.color.pure.base,
    outline: state.isFocused ? `1px solid ${theme.color.primary.base}` : "revert",
    outlineOffset: "1px",
    "&:hover": {},
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
  }),
  placeholder: (base, state) => ({
    ...base,
    color:
      theme.color.reference === mimirColorReference
        ? state.isDisabled
          ? theme.color.surface.variant.on
          : theme.color.background.on
        : theme.color.outline.base,
  }),
  menu: (base) => ({
    ...base,
    minWidth: "250px",
    width: "100%",
    color: theme.color.surface.on,
    boxShadow: "none",
  }),
  menuList: (base) => ({
    ...base,
    boxShadow: "none",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: theme.color.outline.base,
    borderRadius: theme.border.radius.medium,
  }),
  valueContainer: (base) => ({
    ...base,
    paddingLeft: theme.spacing.l,
    paddingRight: theme.spacing.l,
    paddingTop: theme.spacing.xs,
    paddingBottom: theme.spacing.xs,
  }),
  dropdownIndicator: (base, state) => ({
    ...base,
    color:
      theme.color.reference === mimirColorReference
        ? theme.color.outline.base
        : state.isDisabled
        ? theme.color.surface.variant.on
        : theme.color.outline.base,
  }),
  singleValue: (base, state) => ({
    ...base,
    margin: 0,
    color: state.isDisabled ? theme.color.surface.variant.on : theme.color.background.on,
    font: theme.typography.roles.body.large.font,
    letterSpacing: theme.typography.roles.body.large.letterSpacing,
    lineHeight: theme.typography.roles.body.large.lineHeight,
  }),
  multiValue: (base, state) => ({
    ...base,
    color: state.isDisabled ? theme.color.surface.on : theme.color.background.on,
    backgroundColor: state.isDisabled ? theme.color.surface.on : theme.color.secondary.container?.base,
    borderRadius: theme.border.radius.small,
    font: theme.typography.roles.label.large.font,
    letterSpacing: theme.typography.roles.label.large.letterSpacing,
    lineHeight: theme.typography.roles.label.large.lineHeight,
  }),
  multiValueLabel: (base) => ({
    ...base,
    padding: theme.spacing.s,
    paddingLeft: theme.spacing.base,
  }),
  multiValueRemove: (base) => ({
    ...base,
    paddingLeft: theme.spacing.s,
    paddingRight: theme.spacing.s,
  }),
  option: (base, state) => {
    let backgroundColor = state.isDisabled ? theme.color.surface.variant.on : theme.color.pure.base;

    if (state.isFocused) {
      backgroundColor = theme.color.secondary.container?.base ?? "";
    } else if (state.isSelected) {
      backgroundColor = theme.color.tertiary.container?.base ?? "";
    }

    return {
      ...base,
      backgroundColor,
      paddingLeft: theme.spacing.l,
      color: theme.color.background.on,
      display: state.isDisabled ? "none" : "block",
    };
  },
});
