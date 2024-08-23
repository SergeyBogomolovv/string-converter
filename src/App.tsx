import styles from "./App.module.css";
import Stack from "@mui/material/Stack";
import { Content } from "@/widgets/content";
import { Toolbar } from "@/widgets/toolbar";
import { Mode } from "@/widgets/mode";

const App = () => {
  return (
    <Stack className={styles.container}>
      <Toolbar />
      <Content />
      <div className={styles.content}>
        <Mode />
      </div>
    </Stack>
  );
};

export default App;
