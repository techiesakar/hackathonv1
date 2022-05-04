import React from "react";
import Data1 from "./assets/img/data1.png";
import Data2 from "./assets/img/data2.png";
import Data3 from "./assets/img/data3.png";
import Data4 from "./assets/img/data4.png";

const Result = () => {
  const body = document.body;

  if (body.classList.contains("home-page")) {
    body.classList.remove("home-page");
  }
  return (
    <div>
      <div className="result">
        <div className="result-wrapper mt-12">
          <h2 className="text-2xl text-center font-bold p-4">
            Results From Algorithm
          </h2>
          <div className="image-wrapper">
            <img src={Data1} alt="" />
            <img src={Data2} alt="" />
            <img src={Data3} alt="" />
            <img src={Data4} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
