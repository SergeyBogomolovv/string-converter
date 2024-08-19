import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AssessmentIcon from "@mui/icons-material/Assessment";
import EditNoteIcon from "@mui/icons-material/EditNote";
import AbcIcon from "@mui/icons-material/Abc";
import { SearchInput } from "./search-input";

export const Toolbar = () => {
  return (
    <Stack spacing={1} direction="row">
      <SearchInput />
      <Button startIcon={<AssessmentIcon />} variant="contained">
        Статистика
      </Button>
      <Button startIcon={<EditNoteIcon />} variant="contained">
        Замена слов
      </Button>
      <Button startIcon={<AbcIcon />} variant="contained">
        Сгененировать
      </Button>
    </Stack>
  );
};
