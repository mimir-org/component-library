import { ReactNode, useEffect, useMemo, useState } from "react";
import { ApplicationSetting } from "../../types";
import { ApplicationContext } from "./ApplicationContext";

const defaultAppSetting: ApplicationSetting = {
  language: {
    current: "en",
    languages: [
      { code: "no", name: "Norwegian" },
      { code: "en", name: "English" },
    ],
  },
};

interface SettingProviderProps {
  children?: ReactNode;
}

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
