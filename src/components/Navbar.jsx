import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BsBookmarkFill } from "react-icons/bs";
import { RiServiceLine } from "react-icons/ri";
import { BiMessage } from "react-icons/bi";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <>
      <nav>
        <a
          onClick={() => setActiveNav("#")}
          className={activeNav === "#" ? "active text-white pl-6" : "text-white pl-6"}
          href="#"
          rel="noreferrer"
        >
          Places
        </a>
        <a
          onClick={() => setActiveNav("#about")}
          className={
            activeNav === "#about" ? "active text-white pl-6" : "text-white pl-6"
          }
          href="#about"
          rel="noreferrer"
        >
          Explore
        </a>
        <a
          onClick={() => setActiveNav("#experience")}
          className={
            activeNav === "#experience" ? "active text-white pl-6" : "text-white pl-6"
          }
          href="#experience"
          rel="noreferrer"
        >
          Membership
        </a>
        <a
          onClick={() => setActiveNav("#services")}
          className={
            activeNav === "#services" ? "active text-white pl-6" : "text-white pl-6"
          }
          href="#services"
          rel="noreferrer"
        >
          Private Homes
        </a>
      </nav>
    </>
  );
};

export default Navbar;
