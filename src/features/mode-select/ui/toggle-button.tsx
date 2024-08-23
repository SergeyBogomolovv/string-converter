import Tooltip from "@mui/material/Tooltip";
import { default as Button } from "@mui/material/ToggleButton";

interface Props {
  title: string;
  value: string;
  children: React.ReactNode;
  testid?: string;
}

const ToggleButton = ({ title, value, children, testid }: Props) => {
  return (
    <Tooltip data-testid={testid} placement="top" title={title}>
      <Button value={value} aria-label={title}>
        {children}
      </Button>
    </Tooltip>
  );
};

export default ToggleButton;
