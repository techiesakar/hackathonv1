import React from "react";
import Logo from "./assets/img/logo.png";
import Navbar from "../components/Navbar";
import TopHeader from "../components/TopHeader";
import { BiMenuAltLeft } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

// import {FiSun, FiMoon} from "react-icons/fi"
import DarkModeToggler from "./DarkModeToggler";

const Header = () => {
  return (
    <>
      <header className="site-header">
        <div className="header-wrapper mx-auto">
          <TopHeader />
          <div className="bottom-header flex container mx-auto py-4 justify-between items-center">
            <div className="header-left flex">
              <div className="menu-btn flex items-center">
                <BiMenuAltLeft className="text-3xl cursor-pointer text-white mr-4" />
              </div>

              <NavLink to={"./"}>
                <img className="w-28" src={Logo} alt="" />
              </NavLink>
            </div>
            <div className="header-middle flex-1 flex justify-end">
              <Navbar />
            </div>
            <div className="header-right flex justify-between items-center ml-8">
              <NavLink to={"/signup"}>
                <FaUserCircle className="text-2xl cursor-pointer text-white" />
              </NavLink>

              <DarkModeToggler />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
