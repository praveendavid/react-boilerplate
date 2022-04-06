import { useRoutes } from "react-router-dom";
import "./App.scss";
import { MainLayout } from "./layouts";
import { approutes } from "./navigation/routerConfig";

function App() {
  const routes = useRoutes(approutes());
  return (
    <div>
      <MainLayout>{routes}</MainLayout>
    </div>
  );
}

export default App;
