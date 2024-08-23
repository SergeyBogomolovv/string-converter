import styles from "./toolbar.module.css";
import { ModeSelect } from "@/features/mode-select";
import { EditModeToggle } from "@/features/edit-mode-toggle";
import { Search } from "@/features/search";
import { Stack } from "@mui/material";
import { UndoButton } from "@/features/undo-btn";

export const Toolbar = () => {
  return (
    <div className={styles.container}>
      <EditModeToggle />
      <Search />
      <Stack direction="row" spacing={1}>
        <ModeSelect />
        <UndoButton />
      </Stack>
    </div>
  );
};
