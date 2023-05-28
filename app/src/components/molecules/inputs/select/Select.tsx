import { Ref } from "react";
import ReactSelect, { GroupBase, Props, StylesConfig } from "react-select";
import { default as ReactSelectType } from "react-select/base";
import { useTheme } from "styled-components";
import { Theme } from "../../../core/theme/props";
import { getCompactSelectStyle } from "./variants/compactSelect";
import { getStandardSelectStyle } from "./variants/standardSelect";

export type SelectVariant = "standard" | "compact";

/**
 * Select component built on top of react-select. Offers a generic api to allow for using almost any data-structure as options.
 *
 * See documentation links below for details.
 * @see https://react-select.com
 * @see https://react-select.com/typescript#select-generics
 *
 * @param variant
 * @param selectRef reference forwarded to underlying react-select component
 * @param reactSelectProps all built-in react-select properties
 * @constructor
 */
export const Select = <Option, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>({
  variant,
  selectRef,
  ...reactSelectProps
}: Props<Option, IsMulti, Group> & {
  variant?: SelectVariant;
  selectRef?: Ref<ReactSelectType<Option, IsMulti, Group>>;
}) => {
  const theme = useTheme();
  const customStyles = getSelectStyle<Option, IsMulti, Group>(theme.mimir, variant);

  return <ReactSelect ref={selectRef} styles={customStyles} {...reactSelectProps} />;
};

/**
 * Uses the css-in-js wrapper for styling react-select
 *
 * See documentation link below for details.
 * @see https://react-select.com/styles#styles
 *
 * @param theme used to style the third party component to match the application's design
 * @param variant
 */
const getSelectStyle = <Option, IsMulti extends boolean, Group extends GroupBase<Option>>(
  theme: Theme,
  variant?: SelectVariant
): StylesConfig<Option, IsMulti, Group> => {
  switch (variant) {
    case "compact": {
      return getCompactSelectStyle(theme);
    }
    default:
      return getStandardSelectStyle(theme);
  }
};
