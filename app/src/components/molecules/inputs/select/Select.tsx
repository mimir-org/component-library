import { Ref } from "react";
import ReactSelect, { GroupBase, Props, StylesConfig } from "react-select";
import { default as ReactSelectType } from "react-select/base";
import { Theme } from "../../../core/theme/props";
import { getCompactSelectStyle } from "./variants/compactSelect";
import { getStandardSelectStyle } from "./variants/standardSelect";
import { useTheme } from "styled-components";
import { getHideDisabledStyle } from "./variants/hideDisabled";

export type SelectVariant = "standard" | "compact" | "hideDisabledOptions";

interface SelectProps<Option, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>
  extends Props<Option, IsMulti, Group> {
  variant?: SelectVariant;
  selectRef?: Ref<ReactSelectType<Option, IsMulti, Group>>;
}

/**
 * Select component built on top of react-select. Offers a generic api to allow for using almost any data-structure as options.
 *
 * See documentation links below for details.
 * @see https://react-select.com
 * @see https://react-select.com/typescript#select-generics
 *
 * @constructor
 * @param props takes all react-select props in addition to variant (styling) and selectRef (reference by prop)
 */
export const Select = <Option, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>(
  props: SelectProps<Option, IsMulti, Group>
) => {
  const { variant, selectRef, ...reactSelectProps } = props;
  const theme = useTheme();
  const customStyles = getSelectStyle<Option, IsMulti, Group>(theme.mimirorg, variant);

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
    case "hideDisabledOptions":
      return getHideDisabledStyle(theme);
    default:
      return getStandardSelectStyle(theme);
  }
};
