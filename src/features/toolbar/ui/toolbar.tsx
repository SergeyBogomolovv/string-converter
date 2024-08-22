import Stack from "@mui/material/Stack";
import AssessmentIcon from "@mui/icons-material/Assessment";
import EditNoteIcon from "@mui/icons-material/EditNote";
import AbcIcon from "@mui/icons-material/Abc";
import FilterListIcon from "@mui/icons-material/FilterList";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { SearchInput } from "./search-input";
import { EditModeToggle } from "./edit-mode-toggle";
import ToggleButton from "./toggle-button";
import { Mode } from "@/entities/editor";

export const Toolbar = () => {
  return (
    <Stack spacing={1} direction="row">
      <EditModeToggle />
      <SearchInput />
      <ToggleButtonGroup
        sx={{ backgroundColor: "white" }}
        exclusive
        aria-label="modes"
      >
        <ToggleButton value={Mode.stats} title="Статистика">
          <AssessmentIcon />
        </ToggleButton>
        <ToggleButton value={Mode.replace} title="Замена слов">
          <EditNoteIcon />
        </ToggleButton>
        <ToggleButton value={Mode.generate} title="Сгенерировать">
          <AbcIcon />
        </ToggleButton>
        <ToggleButton value={Mode.sort} title="Сортировка слов">
          <FilterListIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
};
