import Stack from "@mui/material/Stack";
import AssessmentIcon from "@mui/icons-material/Assessment";
import EditNoteIcon from "@mui/icons-material/EditNote";
import AbcIcon from "@mui/icons-material/Abc";
import FilterListIcon from "@mui/icons-material/FilterList";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { SearchInput } from "./search-input";
import { EditModeToggle } from "./edit-mode-toggle";
import ToggleButton from "./toggle-button";
import { Mode, selectMode, setMode } from "@/entities/editor";
import { useAppDispatch, useAppSelector } from "@/shared/store/hooks";

export const Toolbar = () => {
  const mode = useAppSelector(selectMode);
  const dispatch = useAppDispatch();

  const handleClick = (e: React.MouseEvent<HTMLElement>, mode: Mode) => {
    dispatch(setMode(mode));
  };

  return (
    <Stack spacing={1} direction="row">
      <EditModeToggle />
      <SearchInput />
      <ToggleButtonGroup
        sx={{ backgroundColor: "white" }}
        value={mode}
        exclusive
        onChange={handleClick}
        aria-label="modes"
      >
        <ToggleButton
          testid="statsModeBtn"
          value={Mode.stats}
          title="Статистика"
        >
          <AssessmentIcon />
        </ToggleButton>
        <ToggleButton
          testid="replaceModeBtn"
          value={Mode.replace}
          title="Замена слов"
        >
          <EditNoteIcon />
        </ToggleButton>
        <ToggleButton
          testid="generateModeBtn"
          value={Mode.generate}
          title="Сгенерировать"
        >
          <AbcIcon />
        </ToggleButton>
        <ToggleButton
          testid="sortModeBtn"
          value={Mode.sort}
          title="Сортировка слов"
        >
          <FilterListIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
};
