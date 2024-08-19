import { useEffect, useRef, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  disableEditMode,
  enableEditMode,
  setHeight,
  setValue,
} from "@/features/editor";

export const useEditMode = () => {
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

  return {
    contentRef,
    textareaRef,
    handleChange,
    value,
    height,
    editMode,
    disableEditMode: () => dispatch(disableEditMode()),
    enableEditMode: () => dispatch(enableEditMode()),
    adjustHeight,
  };
};
