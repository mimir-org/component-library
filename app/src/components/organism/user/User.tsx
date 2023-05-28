import { User as UserIcon } from "@styled-icons/boxicons-solid";
import { Logout } from "@styled-icons/material-outlined";
import { useTheme } from "styled-components";
import { Button, Divider, PlainLink, Text } from "../../atoms";
import { Box } from "../../layouts";
import { Popover } from "../../molecules/popover/Popover";

interface UserMenuProps {
  userName?: string;
  onLogout: () => void;
}

const Content = ({ userName, onLogout }: UserMenuProps) => {
  const theme = useTheme();

  return (
    <>
      {userName && (
        <Box display={"flex"} flexDirection={"column"} gap={theme.mimir.spacing.base} maxWidth={"200px"}>
          <Text variant={"title-small"}>{userName}</Text>
          <Divider />

          <PlainLink tabIndex={-1} to={"/"}>
            <Button
              tabIndex={0}
              as={"span"}
              variant={"text"}
              textVariant={"label-large"}
              iconPlacement={"left"}
              justifyContent={"left"}
              width={"100%"}
              icon={<Logout size={20} />}
              spacing={{
                p: theme.mimir.spacing.xs,
              }}
              onClick={() => onLogout()}
            >
              Log out
            </Button>
          </PlainLink>
        </Box>
      )}
    </>
  );
};

/**
 * Component that displays a user and a user popover menu
 *
 * @param userName
 * @param onLogout
 * @constructor
 */
export const User = ({ userName, onLogout }: UserMenuProps) => {
  const theme = useTheme();

  return (
    <>
      {userName && (
        <Popover placement={"bottom"} align={"end"} content={<Content userName={userName} onLogout={onLogout} />}>
          <Button
            icon={<UserIcon size={20} color={theme.mimir.color.reference.neutral[100]} />}
            iconPlacement={"left"}
            textVariant={"label-large"}
            spacing={{
              mr: theme.mimir.spacing.xl,
            }}
          >
            <Text as={"span"} color={theme.mimir.color.reference.neutral[100]}>
              {userName}
            </Text>
          </Button>
        </Popover>
      )}
    </>
  );
};
