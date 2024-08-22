import Tooltip from "@mui/material/Tooltip";
import { default as Button } from "@mui/material/ToggleButton";

interface Props {
  title: string;
  value: string;
  children: React.ReactNode;
}

const ToggleButton = ({ title, value, children }: Props) => {
  return (
    <Tooltip placement="top" title={title}>
      <Button value={value} aria-label={title}>
        {children}
      </Button>
    </Tooltip>
  );
};

export default ToggleButton;
