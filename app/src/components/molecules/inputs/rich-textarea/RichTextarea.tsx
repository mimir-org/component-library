import "quill/dist/quill.snow.css";
import { ForwardedRef, forwardRef, InputHTMLAttributes, useEffect } from "react";
import { useQuill } from "react-quilljs";
import { Box } from "../../../layouts";

export type RichTextareaProps = Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> & {
  value: string;
  width?: string;
  height?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
};

/**
 * A simple wrapper over the input-tag, with styling that follows library conventions.
 */
export const RichTextarea = forwardRef((props: RichTextareaProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { value, width, height, placeholder, onChange, ...delegated } = props;

  const theme = "snow";

  const disableStyle = {
    opacity: delegated.disabled ? 0.5 : 1.0,
  };

  const modules = {
    toolbar: [
      ["bold", "italic", "underline"],
      [{ align: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["image"],
    ],
  };

  const formats = [
    "bold",
    "italic",
    "underline",
    "strike",
    "align",
    "list",
    "indent",
    "size",
    "header",
    "link",
    "image",
    "video",
    "color",
    "background",
    "clean",
  ];

  const { quill, quillRef } = useQuill({ theme, modules, formats, placeholder });

  useEffect(() => {
    if (quill) {
      quill.enable(!delegated.disabled);
      quill.clipboard.dangerouslyPasteHTML(value ?? "");
      quill.on("text-change", () => {
        if (onChange != null) {
          onChange(quill.root.innerHTML);
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quill, value]);

  return (
    <Box style={disableStyle} height={height} width={width} ref={ref} {...delegated}>
      <div ref={quillRef} />
    </Box>
  );
});

RichTextarea.displayName = "RichTextarea";
RichTextarea.defaultProps = {
  width: "100%",
  height: "fit-content",
  placeholder: "Enter your description here..",
};
