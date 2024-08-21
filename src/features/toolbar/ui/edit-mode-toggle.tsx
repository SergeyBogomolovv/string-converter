import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import { useAppDispatch, useAppSelector } from "@/shared/store/hooks";
import { selectEditMode, setEditMode } from "@/entities/editor";

export const EditModeToggle = () => {
  const editMode = useAppSelector(selectEditMode);
  const dispatch = useAppDispatch();
  function clickhandler() {
    if (editMode) {
      dispatch(setEditMode(false));
    } else {
      dispatch(setEditMode(true));
    }
  }

  return (
    <Button
      data-testid="editmodetoggleel"
      startIcon={editMode ? <SaveIcon /> : <EditIcon />}
      variant="contained"
      onClick={clickhandler}
    >
      {editMode ? "Сохранить" : "Редактировать"}
    </Button>
  );
};
