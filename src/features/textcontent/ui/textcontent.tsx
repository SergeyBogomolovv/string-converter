import { useAppSelector } from "@/store/hooks";
import { Paper } from "@mui/material";

export const Textcontent = () => {
  const { highlighted } = useAppSelector((state) => state.editor);

  return (
    <Paper
      sx={{
        whiteSpace: "pre-wrap",
        wordBreak: "break-word",
        padding: "1rem",
      }}
    >
      {...highlighted}
    </Paper>
  );
};
