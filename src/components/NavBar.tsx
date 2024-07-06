import logo from "../assets/logo.svg";
import { IoIosNotifications } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
interface Props {
  search: string;
  setSearch: (value: string) => void;
}
const NavBar = ({ search, setSearch }: Props) => {
  const { closeSideBar, user } = useContext(AppContext);
  return (
    <div className="nav-container">
      <nav>
        <div className="menu-logo-search-flex">
          <IoMenu onClick={() => closeSideBar()} className="menu" />

          <img className="logo" src={logo} alt="logo" />

          <div className="search-container">
            <div className="search-input">
              <CiSearch className="search-icon" />{" "}
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="search"
                type="text"
                placeholder="Search by patients..."
              />
            </div>
          </div>
        </div>
        <div className="inner-nav">
          <div className="notification">
            <IoIosNotifications className="notification-icon" />
            <div className="notice"></div>
          </div>
          <div className="profile-nav">
            <FaRegUserCircle className="profile-icon" />

            <h5 className="name">{user?.username}</h5>
            <MdKeyboardArrowDown className="profile-icon" />
          </div>
        </div>
      </nav>
      {/* <SideBar /> */}
    </div>
  );
};

export default NavBar;
