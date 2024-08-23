import { selectEditorValue, setValue, undo } from "@/entities/editor";
import { useAppDispatch, useAppSelector } from "@/shared/store/hooks";
import { debouncer } from "@/shared/utils/debouncer";
import { useCallback, useEffect, useRef } from "react";

export const useTextArea = (
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>
) => {
  const value = useAppSelector(selectEditorValue);
  const dispatch = useAppDispatch();

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const adjustTextareaHeight = useCallback(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, []);

  const debouncedSetStats = useCallback(
    debouncer((value: string) => {
      localStorage.setItem("saved", JSON.stringify(value));
    }, 1000),
    []
  );

  useEffect(() => {
    debouncedSetStats(value);
  }, [value]);

  useEffect(() => {
    adjustTextareaHeight();
  }, [adjustTextareaHeight]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
      const textarea = textareaRef.current;
      if (!textarea) return;

      if (event.key === "Tab") {
        event.preventDefault();

        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const value = textarea.value;
        const newValue =
          value.substring(0, start) + "\t" + value.substring(end);

        textarea.value = newValue;

        requestAnimationFrame(() => {
          textarea.selectionStart = textarea.selectionEnd = start + 1;
          dispatch(setValue(textarea.value));
          adjustTextareaHeight();
        });
      } else if (
        (event.ctrlKey && event.key === "x") ||
        (event.metaKey && event.key === "x")
      ) {
        event.preventDefault();

        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const value = textarea.value;

        if (start === end) {
          const startLine = value.lastIndexOf("\n", start - 1) + 1;
          const endLine = value.indexOf("\n", start);
          const previousLineEnd = startLine - 1;
          const newValue =
            value.substring(0, startLine) +
            value.substring(endLine === -1 ? value.length : endLine + 1);

          textarea.value = newValue;

          requestAnimationFrame(() => {
            textarea.selectionStart = textarea.selectionEnd = previousLineEnd;
            dispatch(setValue(textarea.value));
            adjustTextareaHeight();
          });
        } else {
          const newValue = value.substring(0, start) + value.substring(end);
          textarea.value = newValue;

          requestAnimationFrame(() => {
            textarea.selectionStart = textarea.selectionEnd = start;
            dispatch(setValue(textarea.value));
            adjustTextareaHeight();
          });
        }
      } else if (
        (event.ctrlKey && event.key === "z") ||
        (event.metaKey && event.key === "z")
      ) {
        event.preventDefault();
        dispatch(undo());
      }
    },
    [adjustTextareaHeight, dispatch]
  );

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setValue(e.target.value));
    onChange?.(e);
    adjustTextareaHeight();
  };

  return {
    textareaRef,
    handleChange,
    handleKeyDown,
    value,
  };
};
