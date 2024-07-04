import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { MdClose, MdOutlineTraffic } from "react-icons/md";
const SideBar = () => {
  return (
    <div style={{ width: "50%", background: "#f0f1f6", height: "100%" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0.5rem",
          borderBottom: "1px solid #9a9999",
        }}>
        <img src={logo} style={{ width: "50%" }} />
        <div style={{ width: "10%", fontSize: "larger" }}>
          <MdClose />
        </div>
      </div>
      <div className="sidebar-links">
        <Link className="link" to={"/"}>
          Departments
        </Link>
        <Link className="link" to={"/others"}>
          Others
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
