import React from "react";

const Covid = () => {
  const body = document.body;

    if (body.classList.contains("home-page")) {
      body.classList.remove("home-page");
    }
  return (
    <>
      <h1 className="text-3xl">This is Covid 19</h1>
    </>
  );
};

export default Covid;
