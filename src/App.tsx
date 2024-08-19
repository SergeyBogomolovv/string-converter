import styles from "./App.module.css";
import { Editor } from "@/widgets/editor";

const App = () => {
  return (
    <main className={styles.container}>
      <Editor />
    </main>
  );
};

export default App;
