import SearchIcon from "@mui/icons-material/Search";
import { IconButton, InputBase, Paper } from "@mui/material";
import { useSearch } from "../model/use-search";
import { useAppSelector } from "@/shared/store/hooks";
import { getEditorEditModeSelector } from "@/entities/editor";

export const SearchInput = () => {
  const { handleChange, searchTarget } = useSearch();
  const editMode = useAppSelector(getEditorEditModeSelector);
  return (
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
        disabled={editMode}
        value={searchTarget}
        onChange={handleChange}
        sx={{ width: "100%" }}
        placeholder="Поиск"
        inputProps={{ "aria-label": "search" }}
      />
    </Paper>
  );
};
