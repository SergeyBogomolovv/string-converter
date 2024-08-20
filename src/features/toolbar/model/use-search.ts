import {
  getEditorSearchTargetSelector,
  getEditorValueSelector,
  setHighlighted,
  setSearchTarget,
} from "@/entities/editor";
import { highliter } from "@/shared/utils/highliter";
import { useAppDispatch, useAppSelector } from "@/shared/store/hooks";
import { useEffect } from "react";

export const useSearch = () => {
  const dispatch = useAppDispatch();
  const value = useAppSelector(getEditorValueSelector);
  const searchTarget = useAppSelector(getEditorSearchTargetSelector);

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
