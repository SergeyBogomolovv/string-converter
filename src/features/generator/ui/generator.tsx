import { Button, Chip, Paper, TextField, Tooltip } from "@mui/material";
import { useForm } from "react-hook-form";
import { GeneratorSchema, GeneratorType } from "../model/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { generator } from "@/shared/utils/generator";

const Generator = () => {
  const { handleSubmit, register, formState } = useForm<GeneratorType>({
    resolver: zodResolver(GeneratorSchema),
  });

  const [copied, setCopied] = useState(false);

  const [generated, setGenerated] = useState("");
  const onSubmit = handleSubmit((data) => {
    setGenerated(generator(data.chars, data.count));
  });

  return (
    <Paper
      onSubmit={onSubmit}
      sx={{ p: 2, display: "flex", flexDirection: "column", gap: "1rem" }}
      component="form"
    >
      <TextField
        {...register("chars")}
        error={!!formState.errors.chars}
        placeholder="AbC"
        inputProps={{ "data-testid": "charsField" }}
        variant="standard"
        helperText={
          formState.errors.chars
            ? formState.errors.chars.message
            : "Введите символы, из которых будет сгенерированна строка"
        }
      />
      <TextField
        {...register("count")}
        error={!!formState.errors.count}
        placeholder="12"
        variant="standard"
        type="number"
        inputProps={{ "data-testid": "countField" }}
        helperText={
          formState.errors.count
            ? formState.errors.count.message
            : "Длина строки"
        }
      />

      <Button data-testid="generateBtn" type="submit" variant="contained">
        Сгенерировать
      </Button>
      {generated && (
        <Tooltip title={copied ? "Скопировано" : "Копировать"}>
          <Chip
            data-testid="generatorResult"
            onClick={async () => {
              await navigator.clipboard.writeText(generated);
              setCopied(true);
              setTimeout(() => {
                setCopied(false);
              }, 2000);
            }}
            label={generated}
          />
        </Tooltip>
      )}
    </Paper>
  );
};

export default Generator;
