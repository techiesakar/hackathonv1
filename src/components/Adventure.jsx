import React from "react";
import Paragliding from "./assets/img/paragliding.jpg";
import Bungee from "./assets/img/bungee.jpg";
import Rafting from "./assets/img/rafting.jpg";
import Cycling from "./assets/img/cycling.jpg";
import Riding from "./assets/img/riding.jpg";
import Horse from "./assets/img/horse.jpg";
import Skydiving from "./assets/img/skydiving.jpeg";
import Treeking from "./assets/img/treeking.jpg";

const Adventure = () => {

  const body = document.body;

    if (body.classList.contains("home-page")) {
      body.classList.remove("home-page");
    }
  const styles = {
    className: "px-5",
  };
  const adventures = [
    {
      className: styles.className,
      name: "Paragliding",
      image: Paragliding,
    },
    {
      className: styles.className,
      name: "Bungee",
      image: Bungee,
    },
    {
      className: styles.className,
      name: "Rafting",
      image: Rafting,
    },
    {
      className: styles.className,
      name: "Cycling",
      image: Cycling,
    },
    {
      className: styles.className,
      name: "Treeking",
      image: Treeking,
    },
    {
      className: styles.className,
      name: "Bike Riding",
      image: Riding,
    },
    {
      className: styles.className,
      name: "Horse Riding",
      image: Horse,
    },
    {
      className: styles.className,
      name: "Sky Diving",
      image: Skydiving,
    },
  ];
  return (
    <>
      <div className="gallery-container  ">
        <div className="gallery-wrapper container mx-auto">
          <h2 className="page-title text-3xl font-bold">
            Experience the Adventure in Nepal
          </h2>
          <ul className="gallery-items  mt-4">
            {adventures.map((item, index) => (
              <li
                className="gallery-item  relative rounded-lg overflow-hidden"
                key={index}
              >
                <img className="h-full rounded-md" src={item.image} alt="" />
                <div className="gallery-item-content absolute flex items-center justify-center">
                  <h2 className="p-2">{item.name}</h2>
                </div>
                <a href="#" className="overlay transition"></a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Adventure;
