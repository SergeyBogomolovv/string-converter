import styles from "./search.module.css";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, InputBase, Paper } from "@mui/material";
import { useSearch } from "../model/use-search";
import { useAppSelector } from "@/shared/store/hooks";
import { selectEditMode } from "@/entities/editor";

export const Search = () => {
  const { handleChange, searchTarget } = useSearch();
  const editMode = useAppSelector(selectEditMode);

  return (
    <Paper component="form" className={styles.container}>
      <IconButton disabled={editMode} sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        disabled={editMode}
        value={searchTarget}
        onChange={handleChange}
        sx={{ width: "100%" }}
        placeholder="Поиск"
        inputProps={{ "aria-label": "search", "data-testid": "search-inputel" }}
      />
    </Paper>
  );
};
