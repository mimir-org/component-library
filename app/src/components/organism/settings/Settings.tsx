import { Cog } from "@styled-icons/boxicons-solid";
import { useTheme } from "styled-components";
import { Button, PlainLink } from "../../atoms";
import { LanguageSetting } from "../../core/types/languageSetting";
import { Box } from "../../layouts";
import { Popover } from "../../molecules/popover/Popover";

type SettingsMenuProps = {
  languageSetting: LanguageSetting;
  onLanguageChange: (lang: string) => void;
};

/**
 * Component that displays languages, emit data on language change
 *
 * @param languageSetting
 * @param onLanguageChange
 * @constructor
 */
const Content = ({ languageSetting, onLanguageChange }: SettingsMenuProps) => {
  const theme = useTheme();

  return (
    <>
      {languageSetting && languageSetting.languages && (
        <Box display={"flex"} flexDirection={"column"} gap={"8px"} maxWidth={"200px"}>
          <>
            {languageSetting.languages.map((x) => {
              return (
                <PlainLink tabIndex={-1} to={"/"} width={"100%"} key={x.code}>
                  <Button
                    tabIndex={0}
                    as={"span"}
                    variant={languageSetting.current === x.code ? "outlined" : "text"}
                    textVariant={"label-large"}
                    width={"100%"}
                    justifyContent={"left"}
                    spacing={{
                      p: theme.mimir.spacing.s,
                    }}
                    onClick={() => onLanguageChange(x.code)}
                  >
                    {x.name}
                  </Button>
                </PlainLink>
              );
            })}
          </>
        </Box>
      )}
    </>
  );
};

/**
 * Component that displays a button and triggers the language popover menu when active,
 * The component emits data when language is changed
 *
 * @param languageSetting
 * @param onLanguageChange
 * @constructor
 */
export const Settings = ({ languageSetting, onLanguageChange }: SettingsMenuProps) => {
  const theme = useTheme();

  return (
    <Popover
      placement={"bottom"}
      align={"end"}
      content={<Content languageSetting={languageSetting} onLanguageChange={onLanguageChange} />}
    >
      <Button
        icon={<Cog size={20} color={theme.mimir.color.reference.neutral[100]} />}
        iconOnly
        textVariant={"label-large"}
      >
        Settings
      </Button>
    </Popover>
  );
};
