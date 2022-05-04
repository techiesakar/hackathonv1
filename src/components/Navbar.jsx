import React, { useState } from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const styles = {
    className: "px-5",
    //   activeClassName: "underline text-gray-900",
  };
  const links = [
    {
      className: styles.className,
      to: "/todo",
      name: "Things to Do",
    },

    {
      className: styles.className,
      to: "/data",
      name: "Data",
    },
    
  ];
  return (
    <>
      <nav>
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
    </>
  );
};

export default Navbar;
