import { useContext } from "react";
import { ApplicationContext, IApplicationContext } from "./ApplicationContext";

export const useSetting: () => IApplicationContext = () => {
  return useContext(ApplicationContext);
};
