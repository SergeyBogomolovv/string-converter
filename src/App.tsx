import styles from "./App.module.css";
import Stack from "@mui/material/Stack";
import { Content } from "@/widgets/content";
import { Toolbar } from "@/widgets/toolbar";
import { Mode } from "@/widgets/mode";
import { useAppDispatch } from "./shared/store/hooks";
import { useEffect } from "react";
import { setValue } from "./entities/editor";

const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (localStorage.getItem("saved")) {
      dispatch(setValue(JSON.parse(localStorage.getItem("saved"))));
    }
  }, []);

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
