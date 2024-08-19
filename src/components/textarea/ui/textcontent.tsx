import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

export const TextContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<"div">
>((props, ref) => {
  return (
    <div
      {...props}
      ref={ref}
      className={clsx(props.className, styles.container)}
    >
      {props.children}
    </div>
  );
});

TextContent.displayName = "TextContent";
