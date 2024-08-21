import { selectSearchTarget, setSearchTarget } from "@/entities/editor";
import { useAppDispatch, useAppSelector } from "@/shared/store/hooks";

export const useSearch = () => {
  const dispatch = useAppDispatch();
  const searchTarget = useAppSelector(selectSearchTarget);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch(setSearchTarget(e.target.value));
  };

  return { handleChange, searchTarget };
};
