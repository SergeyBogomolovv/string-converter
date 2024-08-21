import { useAppSelector } from "@/shared/store/hooks";
import { Stack, Typography } from "@mui/material";
import { selectWordsCount, selectCharsCount } from "../model/selectors";

export const TextCount = () => {
  const charsCount = useAppSelector(selectCharsCount);
  const wordsCount = useAppSelector(selectWordsCount);

  return (
    <Stack>
      <Typography
        data-testid="charscountel"
        variant="body2"
        fontSize={"0.875rem"}
      >
        Количество букв: {charsCount}
      </Typography>
      <Typography
        data-testid="wordscountel"
        variant="body2"
        fontSize={"0.875rem"}
      >
        Количество слов: {wordsCount}
      </Typography>
    </Stack>
  );
};
