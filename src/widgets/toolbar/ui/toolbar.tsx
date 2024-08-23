import styles from "./toolbar.module.css";
import { ModeSelect } from "@/features/mode-select";
import { EditModeToggle } from "@/features/edit-mode-toggle";
import { Search } from "@/features/search";

export const Toolbar = () => {
  return (
    <div className={styles.container}>
      <EditModeToggle />
      <Search />
      <ModeSelect />
    </div>
  );
};
