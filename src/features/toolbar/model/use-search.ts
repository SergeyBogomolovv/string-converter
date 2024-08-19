import { setHighlighted, setSearchTarget } from "@/entities/editor";
import { highliter } from "@/lib/utils/highliter";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect } from "react";

export const useSearch = () => {
  const dispatch = useAppDispatch();
  const { searchTarget, value } = useAppSelector((state) => state.editor);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch(setSearchTarget(e.target.value));
  };

  useEffect(() => {
    dispatch(
      setHighlighted(
        highliter(value, searchTarget, { highlight: "yellow", text: "black" })
      )
    );
  }, [value, searchTarget]);

  return { handleChange, searchTarget };
};
