import { ApplicationSetting } from "../types";
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useMemo, useState } from "react";

export const defaultAppSetting: ApplicationSetting = {
  language: {
    current: "en",
    languages: [
      { code: "no", name: "Norwegian" },
      { code: "en", name: "English" },
    ],
  },
};

export interface SettingProviderProps {
  children?: ReactNode;
}

export interface IApplicationContext {
  setting: ApplicationSetting;
  setSetting: Dispatch<SetStateAction<ApplicationSetting>>;
}

export const ApplicationContext = createContext<IApplicationContext>({} as IApplicationContext);

export const SettingProvider = ({ children }: SettingProviderProps) => {
  const [setting, setSetting] = useState<ApplicationSetting>(() => {
    if (typeof window === "undefined") {
      return defaultAppSetting;
    }

    try {
      const item = window.localStorage.getItem("appsetting");
      return item ? (JSON.parse(item) as ApplicationSetting) : defaultAppSetting;
    } catch (error) {
      console.warn(error);
      return defaultAppSetting;
    }
  });

  useEffect(() => {
    window.localStorage.setItem("appsetting", JSON.stringify(setting));
  }, [setting]);

  const settingProviderValue = useMemo(() => ({ setting, setSetting }), [setting, setSetting]);

  return <ApplicationContext.Provider value={settingProviderValue}>{children}</ApplicationContext.Provider>;
};

export const useSetting = () => {
  return useContext(ApplicationContext);
};
