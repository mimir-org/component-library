import { Clear, Description } from "@styled-icons/material-outlined";
import { Text, Tooltip } from "../../../atoms";
import { Textarea } from "../../inputs/textarea/Textarea";
import { FileInfo } from "../FileComponent";
import {
  FileIconContainer,
  FileInfoContainer,
  FileItemContainer,
  FileTextareaContainer,
  FileTextContainer,
} from "./FileItemComponent.styled";

interface Props {
  fileInfo: FileInfo;
  onRemove: (id: number) => void;
  onClick: (file: FileInfo) => void;
  onDescriptionChange: (id: number, description: string) => void;
  placeholder?: string;
  tooltip?: string;
  disabled?: boolean;
}

export const FileItemComponent = ({
  fileInfo,
  onRemove,
  onClick,
  onDescriptionChange,
  placeholder,
  tooltip,
  disabled,
}: Props) => {
  const onFileClick = () => {
    if (onClick != null) {
      onClick(fileInfo);
    }
  };

  return (
    <>
      {fileInfo != null && (
        <FileItemContainer>
          <FileInfoContainer onClick={onFileClick}>
            <FileIconContainer>
              <Description size={24} />
              <Tooltip content={tooltip ?? "Remove file"}>
                {disabled === false && (
                  <Clear
                    className="fileitem-delete"
                    size={16}
                    color={"red"}
                    onClick={(e) => {
                      e.stopPropagation();
                      onRemove(fileInfo.id);
                    }}
                  />
                )}
              </Tooltip>
            </FileIconContainer>
            <FileTextContainer>
              <Text as="h4" useEllipsis>
                {fileInfo.fileName}
              </Text>
              <Text variant="label-medium">{fileInfo.fileSize} byte</Text>
            </FileTextContainer>
          </FileInfoContainer>
          <FileTextareaContainer>
            <Textarea
              placeholder={placeholder ?? "Enter a file description here"}
              onChange={(data) => onDescriptionChange(fileInfo.id, data.target.value)}
              value={fileInfo.description}
              disabled={disabled}
            />
          </FileTextareaContainer>
        </FileItemContainer>
      )}
    </>
  );
};
