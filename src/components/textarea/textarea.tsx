import {
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  forwardRef,
} from "react";
import type { TextareaHTMLAttributes, ForwardedRef } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

export const Textarea = forwardRef(
  (
    { onChange, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>,
    ref: ForwardedRef<HTMLTextAreaElement>
  ) => {
    const internalRef = useRef<HTMLTextAreaElement | null>(null);

    useImperativeHandle(ref, () => internalRef.current);

    const adjustTextareaHeight = useCallback(() => {
      const textarea = internalRef.current;
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
        const textarea = internalRef.current;
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
              textarea.selectionStart = textarea.selectionEnd = start;
              adjustTextareaHeight();
            });
          }
        }
      },
      [onChange, adjustTextareaHeight]
    );

    return (
      <textarea
        ref={internalRef}
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
  }
);

Textarea.displayName = "Textarea";
