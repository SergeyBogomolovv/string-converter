import { selectEditorValue, setValue } from "@/entities/editor";
import { useAppDispatch, useAppSelector } from "@/shared/store/hooks";
import { sorter } from "@/shared/utils/sorter";
import { Button, Paper, Typography } from "@mui/material";

const Sort = () => {
  const value = useAppSelector(selectEditorValue);
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(setValue(sorter(value).join(", ")));
  };
  return (
    <Paper sx={{ p: 2, display: "flex", flexDirection: "column", gap: "2rem" }}>
      <Typography variant="body1">
        По нажатию, все части текста, разделенные запятой, отсортируются в
        алфавитном порядке.
      </Typography>
      <Button data-testid="sortBtn" onClick={handleClick} variant="contained">
        Сортировать
      </Button>
    </Paper>
  );
};

export default Sort;
