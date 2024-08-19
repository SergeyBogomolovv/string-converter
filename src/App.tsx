import styles from "./App.module.css";
import { Editor } from "@/features/editor";

const App = () => {
  return (
    <main className={styles.container}>
      <Editor />
    </main>
  );
};

export default App;
