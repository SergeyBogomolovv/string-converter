import { Textarea } from "@/features/textarea";
import { Textcontent } from "@/features/textcontent";
import { Toolbar } from "@/features/toolbar";
import { Stack } from "@mui/material";

export const Editor = () => {
  return (
    <Stack spacing={3} width="70%" margin="auto">
      <Toolbar />
      <Textarea />
      <Textcontent />
    </Stack>
  );
};
