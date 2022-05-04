import React from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const TopHeader = () => {
  const upArrow = (
    <IoIosArrowUp className="text-white cursor-pointer" id="headerUpArrow" />
  );
  const downArrow = <IoIosArrowDown className="text-white cursor-pointer" />;
  //   const sunIcon = <FiSun className="text-md cursor-pointer" />;

  const toggleTopMenu = () => {
    const topNav = document.getElementById("topNav");
    const headerUpArrow = document.getElementById("headerUpArrow");
    topNav.classList.toggle("hidden");
    headerUpArrow.classList.toggle("rotate-180");
  };

  const styles = {
    className: "px-5",
    //   activeClassName: "underline text-gray-900",
  };
  const links = [
    {
      className: styles.className,
      to: "/covid",
      name: "Covid-19",
    },

    {
      className: styles.className,
      to: "/covid",
      name: "Explore More",
    },
    {
      className: styles.className,
      to: "/covid",
      name: "Guide",
    },
    {
      className: styles.className,
      to: "/covid",
      name: "Clean",
    },
  ];
  return (
    <>
      <div
        id="topHeader"
        className="top-header flex justify-center items-center w-full "
      >
        <div className="container mx-auto flex justify-between items-center">
          <nav id="topNav" className="top-site-nav">
            <ul className="top-menu flex py-2">
              {links.map((link, index) => (
                <li key={index} className={`${link.className}`}>
                  <NavLink
                    to={link.to}
                    className="top-menu-item text-white text-sm"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="toggleTopMenu ml-auto py-1" onClick={toggleTopMenu}>
            {upArrow}
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
