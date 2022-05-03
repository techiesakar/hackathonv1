import React from "react";
import Tilicho from "./assets/img/tilicho.jpg";
import Fewa from "./assets/img/fewa.jpg";
import Gosaikunda from "./assets/img/gosaikunda.jpg";
import Gokyo from "./assets/img/gokyo.jpg";
import Panchpokhari from "./assets/img/panchpokhari.jpg";
import Rara from "./assets/img/rara.jpg";
import Begnas from "./assets/img/begnas.jpg";
import Phoksundo from "./assets/img/phoksundo.jpg";

const Lake = () => {
  const styles = {
    className: "px-5",
  };
  const lakes = [
    {
      className: styles.className,
      name: "Fewa Tal",
      image: Fewa,
    },
    {
      className: styles.className,
      name: "Tilicho Tal",
      image: Tilicho,
    },
    {
      className: styles.className,
      name: "Begnas Tal",
      image: Begnas,
    },
    {
      className: styles.className,
      name: "Rara Tal",
      image: Rara,
    },
    {
      className: styles.className,
      name: "Gosaikunda",
      image: Gosaikunda,
    },
    {
      className: styles.className,
      name: "Gokyo Tal",
      image: Gokyo,
    },
    {
      className: styles.className,
      name: "Panch Pokhari",
      image: Panchpokhari,
    },
    {
      className: styles.className,
      name: "Shey Phoksundo",
      image: Phoksundo,
    },
  ];
  return (
    <>
      <div className="gallery-container container mx-auto">
        <div className="gallery-wrapper">
          <h2 className="page-title text-3xl font-bold">Beautiful Lakes in Nepal</h2>
          <ul className="gallery-items  mt-4">
            {lakes.map((item, index) => (
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

export default Lake;
