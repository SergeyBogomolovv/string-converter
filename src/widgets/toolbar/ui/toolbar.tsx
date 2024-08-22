import Stack from "@mui/material/Stack";
import { ModeSelect } from "@/features/mode-select";
import { EditModeToggle } from "@/features/edit-mode-toggle";
import { Search } from "@/features/search";

export const Toolbar = () => {
  return (
    <Stack spacing={1} direction="row">
      <EditModeToggle />
      <Search />
      <ModeSelect />
    </Stack>
  );
};
