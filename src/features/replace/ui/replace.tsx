import { selectEditorValue, setValue } from "@/entities/editor";
import { useAppDispatch, useAppSelector } from "@/shared/store/hooks";
import { replacer } from "@/shared/utils/replacer";
import { useForm } from "react-hook-form";

type FormData = {
  replacement: string;
  wordsToReplace: string;
};

const Replace = () => {
  const value = useAppSelector(selectEditorValue);
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => {
    dispatch(
      setValue(
        replacer(data.wordsToReplace.split(", "), value, data.replacement)
      )
    );
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>Replacement</label>
        <input {...register("replacement")} />
        <label>Words to replace</label>
        <input {...register("wordsToReplace")} />
        <button>SetValue</button>
      </form>
    </div>
  );
};

export default Replace;
