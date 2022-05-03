import React, { useEffect, useState } from "react";

import { FiSun, FiMoon } from "react-icons/fi";

const DarkModeToggler = () => {
  const moonIcon = <FiMoon className="text-md cursor-pointer"/>;
  const sunIcon = <FiSun className="text-md cursor-pointer"/>;
  const [mode, setMode] = useState("light");
  const storedMode = localStorage.getItem("mode");
  const body = document.body;
    // if (storedMode === null) {
    //   localStorage.setItem("mode", "light");
    // }
  useEffect(() => {
    setMode(storedMode);
  }, [storedMode]);

  body.classList.add(mode);
  if (body.classList.contains("light")) {
    body.classList.remove("light");
  }

  const toggleMode = () => {
    if (storedMode === "light" || storedMode === null) {
      localStorage.removeItem("mode");
      localStorage.setItem("mode", "dark");
      setMode("dark");
      body.classList.remove("light");
      body.classList.add("dark");
    } else if (storedMode === "dark") {
      localStorage.removeItem("mode");
      localStorage.setItem("mode", "light");
      setMode("light");
      body.classList.remove("dark");
      body.classList.add("light");
    }
  };
  return (
    <>
      <div
        className={`mode-toggler rounded-full text-white p-3 ml-4 ${
          mode === "light" ? "bg-gray-800" : "bg-gray-700"
        }`}
        onClick={toggleMode}
      >
        {mode === "light" ? moonIcon : sunIcon}
      </div>
    </>
  );
};

export default DarkModeToggler;
