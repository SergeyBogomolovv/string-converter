import type { TextareaHTMLAttributes } from "react";
import styles from "./textarea.module.css";
import clsx from "clsx";
import React, { useCallback, useRef, useEffect } from "react";

export const Textarea = ({
  onChange,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const adjustTextareaHeight = useCallback(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, []);

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

        textarea.value =
          value.substring(0, start) + "\t" + value.substring(end);
        onChange?.({
          ...event,
          target: textarea,
        } as React.ChangeEvent<HTMLTextAreaElement>);

        requestAnimationFrame(() => {
          textarea.selectionStart = textarea.selectionEnd = start + 1;
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

          textarea.value =
            value.substring(0, startLine) +
            value.substring(endLine === -1 ? value.length : endLine + 1);
          onChange?.({
            ...event,
            target: textarea,
          } as React.ChangeEvent<HTMLTextAreaElement>);

          requestAnimationFrame(() => {
            textarea.selectionStart = textarea.selectionEnd = previousLineEnd;
            adjustTextareaHeight();
          });
        } else {
          textarea.value = value.substring(0, start) + value.substring(end);
          onChange?.({
            ...event,
            target: textarea,
          } as React.ChangeEvent<HTMLTextAreaElement>);

          requestAnimationFrame(() => {
            adjustTextareaHeight();
          });
        }
      }
    },
    [onChange, adjustTextareaHeight]
  );

  return (
    <textarea
      ref={textareaRef}
      data-testid="textareael"
      onKeyDown={handleKeyDown}
      placeholder="Введите текст..."
      {...props}
      onChange={(e) => {
        adjustTextareaHeight();
        onChange?.(e);
      }}
      className={clsx(styles.container, props.className)}
    />
  );
};
