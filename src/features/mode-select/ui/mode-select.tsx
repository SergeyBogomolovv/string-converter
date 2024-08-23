import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "./toggle-button";
import { useAppDispatch, useAppSelector } from "@/shared/store/hooks";
import AssessmentIcon from "@mui/icons-material/Assessment";
import EditNoteIcon from "@mui/icons-material/EditNote";
import AbcIcon from "@mui/icons-material/Abc";
import FilterListIcon from "@mui/icons-material/FilterList";
import {
  Mode,
  selectEditorValue,
  selectMode,
  setMode,
} from "@/entities/editor";

export const ModeSelect = () => {
  const mode = useAppSelector(selectMode);
  const value = useAppSelector(selectEditorValue);

  const dispatch = useAppDispatch();

  const handleClick = (e: React.MouseEvent<HTMLElement>, mode: Mode) => {
    dispatch(setMode(mode));
  };
  return (
    <ToggleButtonGroup
      sx={{ backgroundColor: "white" }}
      value={mode}
      exclusive
      onChange={handleClick}
      aria-label="modes"
    >
      <ToggleButton
        disabled={!value}
        testid="statsModeBtn"
        value={Mode.stats}
        title="Статистика"
      >
        <AssessmentIcon />
      </ToggleButton>
      <ToggleButton
        disabled={!value}
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
  );
};
