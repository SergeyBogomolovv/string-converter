import styles from "./App.module.css";
import Stack from "@mui/material/Stack";
import { Content } from "@/widgets/content";
import { Toolbar } from "@/widgets/toolbar";
import { Mode } from "@/widgets/mode";

const App = () => {
  return (
    <main className={styles.container}>
      <Stack spacing={3} width="70%" margin="auto">
        <Toolbar />
        <Content />
        <Mode />
      </Stack>
    </main>
  );
};

export default App;
