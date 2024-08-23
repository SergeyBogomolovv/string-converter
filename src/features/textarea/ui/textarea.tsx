import { type TextareaHTMLAttributes } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import { useTextArea } from "../model/use-text-area";
import { TextareaAutosize } from "@mui/material";

export const Textarea = (
  props: TextareaHTMLAttributes<HTMLTextAreaElement>
) => {
  const { textareaRef, handleChange, handleKeyDown, value } = useTextArea(
    props.onChange
  );

  return (
    <TextareaAutosize
      value={value}
      ref={textareaRef}
      data-testid="textareael"
      onKeyDown={handleKeyDown}
      placeholder="Введите текст..."
      onChange={handleChange}
      className={clsx(styles.container, props.className)}
      {...props}
    />
  );
};
