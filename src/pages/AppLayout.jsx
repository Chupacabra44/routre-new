import { Outlet } from "react-router-dom";
import Back from "../components/Back";
import Menu from "../components/Menu";

const AppLayout = () => {
  return (
    <div className="appLayoutWrapper">
      <Menu />
      <main className="mainWrapper">
        <Outlet />
      </main>
      <Back />
    </div>
  );
};

export default AppLayout;
