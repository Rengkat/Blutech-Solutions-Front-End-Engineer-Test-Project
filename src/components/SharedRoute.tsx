import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

// interface Props {
//   children: ReactNode;
// }
const SharedRoute = () => {
  const { isMenuOpen } = useContext(AppContext);
  return (
    <div className="container">
      <NavBar />
      <main className="main">
        <aside className={isMenuOpen ? "sideBar-close" : "sideBar"}>
          <SideBar />
        </aside>
        <aside className="outlet">
          <Outlet />
        </aside>
      </main>
    </div>
  );
};

export default SharedRoute;
