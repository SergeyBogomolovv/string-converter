import styles from "./editor.module.css";
import { useEffect, useRef, useState, useCallback } from "react";
import { Textarea, TextContent } from "@/components/textarea";

export const Editor = () => {
  const [editMode, setEditMode] = useState(true);
  const [value, setValue] = useState("");
  const [height, setHeight] = useState("auto");

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const adjustHeight = useCallback(() => {
    if (textareaRef.current) {
      const textareaHeight = textareaRef.current.scrollHeight;
      setHeight(`${textareaHeight}px`);
    }
  }, []);

  useEffect(() => {
    if (editMode && textareaRef.current) {
      const textarea = textareaRef.current;
      textarea.focus();
      textarea.selectionStart = textarea.selectionEnd = textarea.value.length;
      adjustHeight;
    }
  }, [editMode, adjustHeight]);

  return (
    <div className={styles.container}>
      {editMode ? (
        <Textarea
          ref={textareaRef}
          onBlur={() => setEditMode(false)}
          value={value}
          onChange={(e) => {
            handleChange(e);
            adjustHeight();
          }}
          style={{ height }}
        />
      ) : (
        <TextContent
          ref={contentRef}
          onClick={() => setEditMode(true)}
          style={{
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
            height,
          }}
          dangerouslySetInnerHTML={{ __html: value.replace(/\n/g, "<br />") }}
        />
      )}
    </div>
  );
};
