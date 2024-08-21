import { IconButton, Paper, Stack, Tooltip, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useAppDispatch, useAppSelector } from "@/shared/store/hooks";
import { decreaseShowWordsCount, increaseShowWordsCount } from "../model/slice";
import { TextCount } from "./text-count";
import { selectShowWordsCount } from "../model/selectors";

export const WordsCount = () => {
  const showWordsCount = useAppSelector(selectShowWordsCount);
  const dispatch = useAppDispatch();

  return (
    <Paper
      sx={{
        display: "flex",
        gap: 1,
        alignItems: "center",
        p: 2,
        justifyContent: "space-between",
      }}
    >
      <Stack
        sx={{
          display: "flex",
          gap: 1,
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Tooltip
          placement="top-end"
          title="Максимальное количество слов, которое будет отображено."
        >
          <Typography variant="h2">Часто встречающиеся слова</Typography>
        </Tooltip>

        <IconButton
          data-testid="showwordscountdecreaseel"
          onClick={() => dispatch(decreaseShowWordsCount())}
        >
          <RemoveIcon />
        </IconButton>
        <Typography data-testid="showwordscountel" variant="h2">
          {showWordsCount}
        </Typography>
        <IconButton
          data-testid="showwordscountincreaseel"
          onClick={() => dispatch(increaseShowWordsCount())}
        >
          <AddIcon />
        </IconButton>
      </Stack>
      <TextCount />
    </Paper>
  );
};
