import styles from "./stats.module.css";
import { IconButton, Paper, Stack, Tooltip } from "@mui/material";
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
    <Paper className={styles.stats}>
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
          <h2 className={styles.heading}>Часто встречающиеся слова</h2>
        </Tooltip>

        <IconButton
          data-testid="showwordscountdecreaseel"
          onClick={() => dispatch(decreaseShowWordsCount())}
        >
          <RemoveIcon />
        </IconButton>
        <h2 data-testid="showwordscountel" className={styles.heading}>
          {showWordsCount}
        </h2>
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
