import { Stack, TextField } from "@mui/material";
import { UseFormRegister } from "react-hook-form";
import { ReplaceForm } from "../model/form-schema";

interface Props {
  register: UseFormRegister<ReplaceForm>;
  name: "replace" | "wordsToReplace";
  helperText?: string;
  placeholder?: string;
  label?: string;
}

const Input = ({ register, name, placeholder, helperText, label }: Props) => {
  return (
    <Stack spacing={0.5}>
      <label htmlFor={name}>{label}</label>
      <TextField
        inputProps={{ ...register(name), "data-testid": name, id: name }}
        placeholder={placeholder}
        helperText={helperText}
        variant="standard"
      />
    </Stack>
  );
};

export default Input;
