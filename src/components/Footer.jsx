import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container container mx-auto">
        <ul className="flex text-white py-4 justify-center">
          <li className="mr-4">Home</li>
          <li className="mr-4">About</li>
          <li className="mr-4">Services</li>
          <li className="mr-4"> <NavLink to={"/contact"}>
                Contact
              </NavLink></li>
          <li className="mr-4">T&C</li>
          <li className="mr-4">Privacy Policy</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
