import { GroupBase, StylesConfig } from "react-select";
import { Theme } from "../../../../core/theme/props";
import { getStandardSelectStyle } from "./standardSelect";

export const getCompactSelectStyle = <Option, IsMulti extends boolean, Group extends GroupBase<Option>>(
  theme: Theme
): StylesConfig<Option, IsMulti, Group> => {
  const standard = getStandardSelectStyle<Option, IsMulti, Group>(theme);
  const compactHeight = "24px";

  return {
    ...standard,
    container: (base, state) => {
      const standardBase = standard.container && standard.container(base, state);

      return {
        ...base,
        ...standardBase,
        height: compactHeight,
      };
    },
    control: (base, state) => {
      const standardBase = standard.control && standard.control(base, state);

      return {
        ...base,
        ...standardBase,
        minHeight: "revert",
        height: compactHeight,
      };
    },
    input: (base, state) => {
      const standardBase = standard.input && standard.input(base, state);

      return {
        ...base,
        ...standardBase,
        minHeight: "1px",
        margin: 0,
      };
    },
    valueContainer: (base, state) => {
      const standardBase = standard.valueContainer && standard.valueContainer(base, state);

      return {
        ...base,
        ...standardBase,
        height: "inherit",
        paddingTop: 0,
        paddingBottom: 0,
      };
    },
    clearIndicator: (base, state) => {
      const standardBase = standard.clearIndicator && standard.clearIndicator(base, state);

      return {
        ...base,
        ...standardBase,
        paddingTop: 0,
        paddingBottom: 0,
      };
    },
    dropdownIndicator: (base, state) => {
      const standardBase = standard.dropdownIndicator && standard.dropdownIndicator(base, state);

      return {
        ...base,
        ...standardBase,
        paddingTop: 0,
        paddingBottom: 0,
      };
    },
  };
};
