import { selectHighlited } from "@/entities/editor";
import { useAppSelector } from "@/shared/store/hooks";
import { Paper } from "@mui/material";

export const Textcontent = () => {
  const highlighted = useAppSelector(selectHighlited);

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
      {...highlighted}
    </Paper>
  );
};
