import { Attachment } from "@styled-icons/material-outlined";
import React, { ForwardedRef, forwardRef, useEffect, useRef, useState } from "react";
import { useTheme } from "styled-components";
import { Button } from "../../atoms";
import { createNumberId, toBase64 } from "../../core/services";
import { toBlob } from "../../core/services/file";
import { FileComponentContainer } from "./FileComponent.styled";
import { FileInputContainer } from "./components/FileInput.styled";
import { FileItemComponent } from "./components/FileItemComponent";

export interface FileInfo {
  id: number;
  fileName: string;
  fileSize: number;
  file: string | null;
  contentType: string;
  description: string;
}

interface Props {
  value: FileInfo[];
  onChange?: (files: FileInfo[]) => void;
  placeholder?: string;
  tooltip?: string;
  buttonText?: string;
  disabled?: boolean;
}

export const FileComponent = forwardRef(
  ({ value, onChange, placeholder, tooltip, buttonText, disabled }: Props, ref: ForwardedRef<HTMLDivElement>) => {
    const theme = useTheme();
    const inputFile = useRef<HTMLInputElement | null>(null);
    const [filelist, setFiles] = useState<FileInfo[]>(value);

    useEffect(() => {
      if (onChange != null) onChange(filelist);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filelist]);

    const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      event.stopPropagation();
      event.preventDefault();
      const files = event.currentTarget.files;
      if (files == null) return;

      const addedFiles = Array.from(files);
      const filesToBeAdded: FileInfo[] = [];

      addedFiles.forEach(async (file) => {
        const bytes = await toBase64(file);

        const newFile: FileInfo = {
          id: createNumberId(),
          fileName: file.name,
          fileSize: file.size,
          file: bytes != null ? bytes.toString() : null,
          contentType: file.type,
          description: "",
        };
        filesToBeAdded.push(newFile);
        const list = [...filelist, ...filesToBeAdded];
        setFiles(list);
      });
    };

    const onFileRemove = (id: number) => {
      const copy = filelist.filter((f) => f.id !== id);
      setFiles([...copy]);
    };

    const onFileClick = (file: FileInfo) => {
      console.log(file);
      if (file?.file == null) return;
      const blob = toBlob(file.file);
      const url = window.URL.createObjectURL(blob);
      window.open(url, "_blank");
    };

    const onDescriptionChange = (id: number, description: string) => {
      setFiles(
        filelist.map((x) => {
          if (x.id === id) {
            return { ...x, description: description };
          } else {
            return x;
          }
        })
      );
    };

    return (
      <FileComponentContainer ref={ref}>
        <FileInputContainer>
          <input
            type={"file"}
            onChange={onFileChange.bind(this)}
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
        {filelist &&
          filelist.map((info, index) => {
            return (
              <div key={index}>
                <FileItemComponent
                  fileInfo={info}
                  onRemove={onFileRemove}
                  onClick={onFileClick}
                  onDescriptionChange={onDescriptionChange}
                  placeholder={placeholder}
                  tooltip={tooltip}
                  disabled={disabled}
                />
              </div>
            );
          })}
      </FileComponentContainer>
    );
  }
);

FileComponent.defaultProps = {
  placeholder: "Enter file description here...",
  tooltip: "Add file",
  buttonText: "Add file",
  disabled: false,
};

FileComponent.displayName = "FileComponent";
