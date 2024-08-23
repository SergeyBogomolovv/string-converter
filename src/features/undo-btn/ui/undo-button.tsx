import { undo } from "@/entities/editor";
import { useAppDispatch } from "@/shared/store/hooks";
import { IconButton, Tooltip } from "@mui/material";
import UndoIcon from "@mui/icons-material/Undo";

export const UndoButton = () => {
  const dispath = useAppDispatch();

  return (
    <Tooltip title="Отменить последнее действие">
      <IconButton data-testid="undoBtn" onClick={() => dispath(undo())}>
        <UndoIcon />
      </IconButton>
    </Tooltip>
  );
};
