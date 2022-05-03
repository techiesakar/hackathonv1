import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const styles = {
    className: "px-5",
    //   activeClassName: "underline text-gray-900",
  };
  const links = [
    {
      className: styles.className,
      to: "/",
      name: "Home",
    },
    {
      className: styles.className,
      to: "/food",
      name: "Food",
    },
    {
      className: styles.className,
      to: "/festival",
      name: "Festival",
    },
    {
      className: styles.className,
      to: "/heritage",
      name: "Heritage",
    },
    {
      className: styles.className,
      to: "/culture",
      name: "Culture",
    },
  ];
  return (
    <>
      <nav id="siteNavigation" className="site-nav">
        <ul className="primary-menu flex items-center justify-end  list-none">
          {links.map((link, index) => (
            <li key={index} className={`${link.className}`}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active underlined text-gray-900"
                    : "nav-link underlined text-black"
                }
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
