import { selectEditorValue, selectSearchTarget } from "@/entities/editor";
import { useAppSelector } from "@/shared/store/hooks";
import { Highlited, highliter } from "@/shared/utils/highliter";
import { Paper } from "@mui/material";
import { useEffect, useState } from "react";

export const Textcontent = () => {
  const searchTarget = useAppSelector(selectSearchTarget);
  const value = useAppSelector(selectEditorValue);

  const [highlited, setHighlighted] = useState<Highlited>([]);

  useEffect(() => {
    setHighlighted(
      highliter(value, searchTarget, { highlight: "yellow", text: "black" })
    );
  }, [value, searchTarget]);

  return (
    <Paper
      data-testid={"textcontendel"}
      elevation={0}
      sx={{
        tabSize: 4,
        minHeight: "10rem",
        whiteSpace: "pre-wrap",
        wordBreak: "break-word",
        padding: "1rem",
        lineHeight: "1.5",
        letterSpacing: "0.05rem",
      }}
    >
      {...highlited}
    </Paper>
  );
};
