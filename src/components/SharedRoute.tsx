import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

// interface Props {
//   children: ReactNode;
// }
const SharedRoute = () => {
  return (
    <div className="container">
      <NavBar />
      <main className="main">
        <aside className="sideBar">
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
