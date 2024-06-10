import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { LuMenu } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { login, logout } from "../store/AuthSlice";
import authService from "../firebase/authService";
const Navbar = () => {
  const authData = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(authData);
  const [showMenu, setShowMenu] = useState(false);

  const navLinks = [
    { id: "1", path: "/contactUs", title: "Contact Us", isAuth: false },
    { id: "2", path: "/aboutUs", title: "About Us", isAuth: false },
  ];

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const handleLogout = () => {
    window.alert("logout successfull!!");
    navigate("/");
    const logoutMesg = authService.logoutHandler();
    console.log(logoutMesg);
    dispatch(logout());
  };
  return (
    <nav className="w-full flex justify-between items-center py-2 bg-white z-10 fixed">
      <NavLink to="/">
        <span className="capitalize text-[35px] tracking-wide px-6 font-semibold text-orange-700 hover:drop-shadow-[2px_2px_4px_rgba(100,100,100,0.8)] duration-200">
          day-Tracker
        </span>
      </NavLink>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 mr-4">
        {navLinks.map((nav, index) =>
          !nav.isAuth ? (
            <li
              key={nav.id}
              className={`cursor-pointer text-[18px] text-black mr-6 hover:underline`}
            >
              <NavLink
                to={nav.path}
                className={({ isActive }) => {
                  return isActive ? "underline" : "";
                }}
                end
              >
                {nav.title}
              </NavLink>
            </li>
          ) : null
        )}
        {authData.authStatus && (
          <li className="px-3">
            <NavLink to='./workspace'><button className="secondaryBut">Work Space</button></NavLink>
          </li>
        )}
        {authData.authStatus && (
          <li className="px-3">
            <button className="primaryBut" onClick={handleLogout}>
              Logout
            </button>
          </li>
        )}
        {!authData.authStatus && (
          <li className="px-3">
            <button
              className="primaryBut"
              onClick={() => {
                navigate("/auth?type=login");
              }}
            >
              Login
            </button>
          </li>
        )}
        {!authData.authStatus && (
          <li className="px-3">
            <button
              className="secondaryBut"
              onClick={() => {
                navigate("/auth?type=signUp");
              }}
            >
              Join for Free
            </button>
          </li>
        )}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center ">
        <span onClick={toggleMenu} className="pr-10">
          {showMenu ? (
            <RxCross2 className="text-[25px]" />
          ) : (
            <LuMenu className="text-[25px]" />
          )}
        </span>
        <div
          className={`${
            !showMenu ? "hidden" : "flex"
          } absolute right-0 p-6 top-[58px] bg-white w-full duration-500`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1 ease-out duration-300">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`cursor-pointer text-[18px] text-black ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-5"
                }`}
              >
                <NavLink
                  to={nav.path}
                  className={({ isActive }) => {
                    return isActive ? "underline" : "";
                  }}
                >
                  {nav.title}
                </NavLink>
              </li>
            ))}
            {authData.authStatus && (
              <li className="py-3">
                <button className="secondaryBut">Work Space</button>
              </li>
            )}
            {authData.authStatus && (
              <li className="py-3">
                <button className="primaryBut" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            )}
            {!authData.authStatus && (
              <li className="py-3">
                <button
                  className="primaryBut"
                  onClick={() => {
                    navigate("/auth?type=login");
                  }}
                >
                  Login
                </button>
              </li>
            )}
            {!authData.authStatus && (
              <li className="py-3">
                <button
                  className="secondaryBut"
                  onClick={() => {
                    navigate("/auth?type=signUp");
                  }}
                >
                  Join for Free
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
