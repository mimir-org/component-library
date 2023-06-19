import { ReactNode, useEffect, useState } from "react";
import { Button, Icon, MotionPanel, Text } from "../../atoms";
import { useMimirorgTheme } from "../../core/hooks";
import { Spacings } from "../../core/props";
import { DeleteIcon, LockClosedIcon, LockOpenIcon, ToogleDownIcon, ToogleUpIcon } from "../../icons";
import { Box } from "../../layouts";
import {
  InspectorContent,
  InspectorHeader,
  InspectorHeaderContent,
  InspectorHeaderProps,
  InspectorTabHeader,
} from "./InspectorPanel.styled.";

type Props = Spacings &
  InspectorHeaderProps & {
    duration: number;
    children: ReactNode;
    isOpen: boolean;
    isLocked: boolean;
    onLock?: () => void;
    onDelete?: () => void;
    onTabChange?: (value: "admin" | "attribute" | "terminal" | "relation") => void;
    icon?: string;
    name?: string;
    tabColor?: string;
    selectedTab?: "admin" | "attribute" | "terminal" | "relation";
  };

/**
 * Simple error message component offering navigation via link/button
 *
 * @param title
 * @param subtitle
 * @param status
 * @param linkText
 * @param linkPath
 * @constructor
 */
export const InspectorPanel = (props: Props) => {
  const {
    duration,
    children,
    isOpen,
    isLocked,
    onLock,
    onDelete,
    onTabChange,
    icon,
    name,
    tabColor,
    selectedTab,
    bgColor,
    spacing,
  } = props;
  const theme = useMimirorgTheme();
  const [expanded, setExpanded] = useState<boolean>(isOpen);
  const [lock, setLock] = useState<boolean>(isLocked);
  const [activeTab, setActiveTab] = useState<"admin" | "attribute" | "terminal" | "relation">(
    selectedTab != null ? selectedTab : "admin"
  );

  useEffect(() => {
    setExpanded(isOpen);
  }, [isOpen]);

  useEffect(() => {
    setLock(isLocked);
  }, [isLocked]);

  return (
    <MotionPanel
      duration={duration}
      open={expanded}
      maxHeight={600}
      header={
        <InspectorHeader bgColor={bgColor}>
          <InspectorHeaderContent spacing={spacing}>
            <Box style={{ display: "flex", flex: 1, alignItems: "center" }}>
              <InspectorTabHeader
                color={tabColor != null ? tabColor : ""}
                active={activeTab === "admin"}
                onClick={() => {
                  setActiveTab("admin");
                  onTabChange && onTabChange("admin");
                }}
              >
                <Text useEllipsis={true} ellipsisMaxLines={1} as="p">
                  Admin
                </Text>
              </InspectorTabHeader>
              <InspectorTabHeader
                color={tabColor != null ? tabColor : ""}
                active={activeTab === "attribute"}
                onClick={() => {
                  setActiveTab("attribute");
                  onTabChange && onTabChange("attribute");
                }}
              >
                <Text useEllipsis={true} ellipsisMaxLines={1} as="p">
                  Attributes
                </Text>
              </InspectorTabHeader>
              <InspectorTabHeader
                color={tabColor != null ? tabColor : ""}
                active={activeTab === "terminal"}
                onClick={() => {
                  setActiveTab("terminal");
                  onTabChange && onTabChange("terminal");
                }}
              >
                <Text useEllipsis={true} ellipsisMaxLines={1} as="p">
                  Terminal Attributes
                </Text>
              </InspectorTabHeader>
              <InspectorTabHeader
                color={tabColor != null ? tabColor : ""}
                active={activeTab === "relation"}
                onClick={() => {
                  setActiveTab("relation");
                  onTabChange && onTabChange("relation");
                }}
              >
                <Text useEllipsis={true} ellipsisMaxLines={1} as="p">
                  Relations
                </Text>
              </InspectorTabHeader>

              <Icon src={icon} alt={name} size={24} style={{ marginLeft: theme.spacing.l }} />
              <Text as="p" useEllipsis={true} fontWeight={700} style={{ marginLeft: theme.spacing.s }}>
                {name}
              </Text>
            </Box>
            <Box style={{ display: "flex", alignItems: "center" }}>
              <Button
                onClick={() => {
                  onLock != null && onLock();
                  setLock(!lock);
                }}
                variant="outlined"
                icon={lock ? <LockClosedIcon size={15} /> : <LockOpenIcon size={15} />}
                spacing={{ ml: theme.spacing.s }}
              >
                <Text as="b" fontWeight={800} spacing={{ mr: theme.spacing.s }}>
                  Lock
                </Text>
              </Button>
              <Button
                onClick={() => {
                  onDelete != null && onDelete();
                }}
                variant="outlined"
                icon={<DeleteIcon size={15} />}
                spacing={{ ml: theme.spacing.s }}
              >
                <Text as="b" fontWeight={800} spacing={{ mr: theme.spacing.s }}>
                  Delete
                </Text>
              </Button>
              <Button
                onClick={() => setExpanded(!expanded)}
                variant="text"
                icon={expanded ? <ToogleDownIcon size={15} /> : <ToogleUpIcon size={15} />}
                spacing={{ ml: theme.spacing.s }}
              >
                <Text as="b" fontWeight={800} spacing={{ mr: theme.spacing.s }}>
                  Inspector
                </Text>
              </Button>
            </Box>
          </InspectorHeaderContent>
        </InspectorHeader>
      }
    >
      <InspectorContent spacing={spacing}>{children}</InspectorContent>
    </MotionPanel>
  );
};

InspectorPanel.defaultProps = {
  duration: 0.5,
  isOpen: false,
  isLocked: false,
};
