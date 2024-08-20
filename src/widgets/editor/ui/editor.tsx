import { Stats } from "@/features/stats";
import { Textarea } from "@/features/textarea";
import { Textcontent } from "@/features/textcontent";
import { Toolbar } from "@/features/toolbar";
import { useAppSelector } from "@/shared/store/hooks";
import { Stack } from "@mui/material";

export const Editor = () => {
  const { editMode } = useAppSelector((state) => state.editor);

  return (
    <Stack spacing={3} width="70%" margin="auto">
      <Toolbar />
      {editMode ? <Textarea /> : <Textcontent />}
      <Stats />
    </Stack>
  );
};
