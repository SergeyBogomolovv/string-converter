import styles from "./editor.module.css";
import { useEffect, useRef, useCallback } from "react";
import { Textarea, TextContent } from "@/components/textarea";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  disableEditMode,
  enableEditMode,
  setHeight,
  setValue,
} from "@/features/editor";

export const Editor = () => {
  const { editMode, value, height } = useAppSelector((state) => state.editor);
  const dispatch = useAppDispatch();

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setValue(e.target.value));
  };

  const adjustHeight = useCallback(() => {
    if (textareaRef.current) {
      const textareaHeight = textareaRef.current.scrollHeight;
      dispatch(setHeight(`${textareaHeight}px`));
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
          onBlur={() => dispatch(disableEditMode())}
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
          onClick={() => dispatch(enableEditMode())}
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
