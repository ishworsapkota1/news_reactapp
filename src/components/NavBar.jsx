import logo from "../assets/favicon.png";
import DarkModeToggle from "../assets/dark-modeDark.png";
import LightModeToggle from "../assets/dark-mode.png";
import { Link, useNavigate } from "react-router-dom";
import PrimaryButton from "./PrimaryButton";
import { RiMenuFoldFill } from "react-icons/ri";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../redux/features/darkModeSlice";
import useLocalStorageGetItem from "../../hooks/useLocalStorageGetItem";
import { Dropdown } from "antd";
import { FaAngleDown } from "react-icons/fa";

const NavBar = () => {
  const [mobileMenuShow, setMobileMenuShow] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSigin = () => {
    navigate("/login");
  };
  const darkMode = useSelector((state) => state.darkMode.value);
  const user = useLocalStorageGetItem("username");

  const logout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };

  const items = [
    {
      key: "1",
      label: <p onClick={logout}>Logout</p>,
    },
    {
      key: "2",
      label: <p onClick={() => navigate("/bookmarks")}>Bookmarks</p>,
    },
  ];
  return (
    <div
      style={{ borderColor: darkMode ? "black" : "white" }}
      className="flex flex-row justify-between border-b-[3px] border-applightgreen mb-10 w-commonwidth mx-auto "
    >
      <div>
        {/* <img
          onClick={() => navigate("/")}
          src={logo}
          alt=""
          className=" h-[100px] -mb-4 -mt-2  object-cover cursor-pointer"
        /> */}
        <h2 onClick={() => navigate("/")}>logo</h2>
      </div>
      <div className="xsm:hidden sm:flex flex flex-row gap-[40px]  items-center">
        <Link className="text-appgreen no-underline ">Contact Us</Link>
        {user ? (
          <Dropdown
            className="min-w-[200px] "
            menu={{
              items,
            }}
          >
            <p className="flex gap-2 items-center justify-center text-appgreen capitalize">
              <p>{user}</p>
              <FaAngleDown />
            </p>
          </Dropdown>
        ) : (
          <PrimaryButton title={"Sign In"} width={"80px"} onClick={onSigin} />
        )}
        {/* <PrimaryButton title={"Sign In"} width={"80px"} onClick={onSigin} /> */}
        <img
          src={darkMode ? LightModeToggle : DarkModeToggle}
          className="w-[30px] h-[30px] cursor-pointer"
          alt=""
          onClick={() => {
            localStorage.setItem("darkMode", !darkMode);

            dispatch(toggleDarkMode());
          }}
        />
      </div>
      <div className="xsm:flex sm:hidden items-center justify-center text-appgreen">
        <RiMenuFoldFill
          onClick={() => setMobileMenuShow((prev) => !prev)}
          size={40}
        />
      </div>
      {mobileMenuShow && (
        <div className="bg-white shadow-lg max-w-commonwidth mx-auto h-[60px]  relative top-[-45px] flex flex-row justify-around items-center xsm:flex sm:hidden">
          <Link className="text-appgreen no-underline ">Contact Us</Link>
          <PrimaryButton title={"Sign In"} width={"80px"} onClick={() => {}} />
          <img
            src={DarkModeToggle}
            className="w-[30px] h-[30px] cursor-pointer"
            alt=""
          />
        </div>
      )}
    </div>
  );
};

export default NavBar;
