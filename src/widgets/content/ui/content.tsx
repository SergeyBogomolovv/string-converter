import { selectEditMode } from "@/entities/editor";
import { Textarea } from "@/features/textarea";
import { Textcontent } from "@/features/textcontent";
import { useAppSelector } from "@/shared/store/hooks";

export const Content = () => {
  const editMode = useAppSelector(selectEditMode);

  if (editMode) {
    return <Textarea />;
  } else {
    return <Textcontent />;
  }
};
