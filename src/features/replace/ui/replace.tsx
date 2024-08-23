import { selectEditorValue, setValue } from "@/entities/editor";
import { useAppDispatch, useAppSelector } from "@/shared/store/hooks";
import { replacer } from "@/shared/utils/replacer";
import { Paper, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { ReplaceForm, ReplaceFormSchema } from "../model/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "./input";

const Replace = () => {
  const value = useAppSelector(selectEditorValue);
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<ReplaceForm>({
    resolver: zodResolver(ReplaceFormSchema),
  });

  const onSubmit = handleSubmit((data) => {
    dispatch(
      setValue(replacer(data.wordsToReplace.split(", "), value, data.replace))
    );
  });

  return (
    <Paper
      sx={{ display: "flex", p: 2, flexDirection: "column", gap: 2 }}
      component="form"
      onSubmit={onSubmit}
    >
      <Input
        register={register}
        name="wordsToReplace"
        label="Слова"
        helperText="Введите слова, разделяя их запятой и пробелом"
        placeholder="Пример: дом, дерево, дорога"
      />
      <Input
        register={register}
        name="replace"
        label="Заменить на"
        placeholder="Введите слово"
        helperText="Оставьте пустым чтобы удалить слова"
      />

      <Button type="submit" data-testid="replaceBtn" variant="contained">
        Заменить
      </Button>
    </Paper>
  );
};

export default Replace;
