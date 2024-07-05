import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { MdClose, MdOutlineTraffic } from "react-icons/md";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
const SideBar = () => {
  const { openSideBar } = useContext(AppContext);
  const handleClick = () => {
    openSideBar();
  };
  return (
    <div className="inner-sideBar">
      <div className="sideBar-top">
        <img src={logo} style={{ width: "50%" }} />
        <div onClick={handleClick} style={{ width: "10%", fontSize: "larger" }}>
          <MdClose />
        </div>
      </div>
      <div className="sidebar-links">
        <Link onClick={handleClick} className="link" to={"/"}>
          Departments
        </Link>
        <Link onClick={handleClick} className="link" to={"/others"}>
          Others
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
