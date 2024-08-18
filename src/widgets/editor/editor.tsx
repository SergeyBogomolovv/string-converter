import styles from "./editor.module.css";
import { Textarea } from "@/components/textarea";

export const Editor = () => {
  return (
    <div className={styles.container}>
      <Textarea />
    </div>
  );
};
