import { MainPage } from "./pages/MainPage";
import cls from "./App.module.css";

export const App = () => {
  return (
    <div className={cls.app}>
      <MainPage />
    </div>
  );
};
