import { Textarea, TextContent } from "@/components/textarea";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useEditMode } from "../model/use-edit-mode";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SearchIcon from "@mui/icons-material/Search";
import EditNoteIcon from "@mui/icons-material/EditNote";
import AbcIcon from "@mui/icons-material/Abc";
import { IconButton, InputBase, Paper } from "@mui/material";

export const Editor = () => {
  const {
    contentRef,
    textareaRef,
    handleChange,
    value,
    height,
    editMode,
    disableEditMode,
    enableEditMode,
    adjustHeight,
  } = useEditMode();

  return (
    <Stack spacing={3} width="70%" margin="auto">
      <Stack spacing={1} direction="row">
        <Paper
          component="form"
          sx={{
            width: "27%",
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <IconButton sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ width: "100%" }}
            placeholder="Поиск"
            inputProps={{ "aria-label": "search" }}
          />
        </Paper>
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
      <div>
        {editMode ? (
          <Textarea
            ref={textareaRef}
            onBlur={disableEditMode}
            value={value}
            onChange={(e) => {
              handleChange(e);
              adjustHeight();
            }}
            style={{ height }}
          />
        ) : (
          <TextContent
            ref={contentRef}
            onClick={enableEditMode}
            style={{
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
              height,
            }}
            dangerouslySetInnerHTML={{ __html: value.replace(/\n/g, "<br />") }}
          />
        )}
      </div>
    </Stack>
  );
};
