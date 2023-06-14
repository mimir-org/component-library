import { Attachment } from "@styled-icons/material-outlined";
import { ForwardedRef, forwardRef, useEffect, useRef, useState } from "react";
import { useTheme } from "styled-components";
import { Button } from "../../atoms";
import { onDescriptionChange, onFileChange, onFileClick, onFileRemove } from "./FileComponent.helpers";
import { FileComponentContainer } from "./FileComponent.styled";
import { FileInputContainer } from "./components/FileInput.styled";
import { FileItemComponent } from "./components/FileItemComponent";
import { FileInfo } from "./types/fileInfo";

interface Props {
  value: FileInfo[];
  onChange?: (files: FileInfo[]) => void;
  placeholder?: string;
  tooltip?: string;
  buttonText?: string;
  disabled?: boolean;
}

export const FileComponent = forwardRef((props: Props, ref: ForwardedRef<HTMLDivElement>) => {
  const { value, onChange, placeholder, tooltip, buttonText, disabled } = props;
  const theme = useTheme();
  const inputFile = useRef<HTMLInputElement | null>(null);
  const [files, setFiles] = useState<FileInfo[]>(value);

  useEffect(() => {
    if (onChange != null) onChange(files);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [files]);

  return (
    <FileComponentContainer ref={ref}>
      <FileInputContainer>
        <input
          type={"file"}
          onChange={(e) => onFileChange(e, files, setFiles)}
          multiple
          ref={inputFile}
          style={{ display: "none" }}
        />
        <Button
          icon={<Attachment size={24} />}
          onClick={() => inputFile?.current?.click()}
          spacing={{ pl: theme.mimir.spacing.l, pr: theme.mimir.spacing.l }}
          disabled={disabled}
        >
          {buttonText}
        </Button>
      </FileInputContainer>
      {files &&
        files.map((info, index) => {
          return (
            <div key={index}>
              <FileItemComponent
                fileInfo={info}
                onRemove={(id) => onFileRemove(id, files, setFiles)}
                onClick={(file) => onFileClick(file)}
                onDescriptionChange={(id, description) => onDescriptionChange(id, description, files, setFiles)}
                placeholder={placeholder}
                tooltip={tooltip}
                disabled={disabled}
              />
            </div>
          );
        })}
    </FileComponentContainer>
  );
});

FileComponent.displayName = "FileComponent";
FileComponent.defaultProps = {
  placeholder: "Enter file description here...",
  tooltip: "Add file",
  buttonText: "Add file",
  disabled: false,
};
