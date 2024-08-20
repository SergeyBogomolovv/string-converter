import { useAppSelector } from "@/shared/store/hooks";
import { Stack, Typography } from "@mui/material";
import { selectWordsCount, selectCharsCount } from "../model/selectors";

export const Count = () => {
  const charsCount = useAppSelector(selectCharsCount);
  const wordsCount = useAppSelector(selectWordsCount);

  return (
    <Stack>
      <Typography variant="body2" fontSize={"0.875rem"}>
        Количество букв: {charsCount}
      </Typography>
      <Typography variant="body2" fontSize={"0.875rem"}>
        Количество слов: {wordsCount}
      </Typography>
    </Stack>
  );
};
