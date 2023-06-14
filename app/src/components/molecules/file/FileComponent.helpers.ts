import { createNumberId, toBase64 } from "../../core/services";
import { FileInfo } from "./types/fileInfo";
import { toBlob } from "../../core/services/file";
import { ChangeEvent } from "react";

export const onFileChange = (
  event: ChangeEvent<HTMLInputElement>,
  files: FileInfo[],
  setFiles: (files: FileInfo[]) => void
) => {
  event.stopPropagation();
  event.preventDefault();
  const inputFiles = event.currentTarget.files;
  if (inputFiles == null) return;

  const addedFiles = Array.from(inputFiles);
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
    const list = [...files, ...filesToBeAdded];
    setFiles(list);
  });
};

export const onFileRemove = (id: number, files: FileInfo[], setFiles: (files: FileInfo[]) => void) => {
  const copy = files.filter((f) => f.id !== id);
  setFiles([...copy]);
};

export const onFileClick = (file: FileInfo) => {
  console.log(file);
  if (file?.file == null) return;
  const blob = toBlob(file.file);
  const url = window.URL.createObjectURL(blob);
  window.open(url, "_blank");
};

export const onDescriptionChange = (
  id: number,
  description: string,
  files: FileInfo[],
  setFiles: (files: FileInfo[]) => void
) => {
  setFiles(
    files.map((x) => {
      if (x.id === id) {
        return { ...x, description: description };
      } else {
        return x;
      }
    })
  );
};
