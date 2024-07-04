import logo from "../assets/logo.svg";
import { IoIosNotifications } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
const NavBar = () => {
  return (
    <div className="nav-container">
      <nav>
        <img className="logo" src={logo} alt="" />
        <div className="search-input-container">
          <CiSearch className="search-icon" />{" "}
          <input className="search" type="text" placeholder="Search by patients..." />
        </div>
        <div className="inner-nav">
          <div className="notification">
            <IoIosNotifications style={{ color: "gray" }} />
            <div className="notice"></div>
          </div>
          <div className="profile-nav">
            <FaRegUserCircle style={{ fontSize: "1.2rem" }} />

            <h5>Name</h5>
            <MdKeyboardArrowDown />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
