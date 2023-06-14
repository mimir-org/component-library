import { ApplicationSetting } from "../../types";
import { createContext, Dispatch, SetStateAction } from "react";

export interface IApplicationContext {
  setting: ApplicationSetting;
  setSetting: Dispatch<SetStateAction<ApplicationSetting>>;
}

export const ApplicationContext = createContext<IApplicationContext>({} as IApplicationContext);
