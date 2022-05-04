import React from "react";
import Newa1 from "./assets/img/newa1.jpg";
import Thakali1 from "./assets/img/thakali1.jpg";
import Tharu1 from "./assets/img/tharu1.jpg";
import Bhote1 from "./assets/img/bhote1.jpg";
import Newa2 from "./assets/img/newa2.jpg";
import Thakali2 from "./assets/img/thakali2.jpg";
import Tharu2 from "./assets/img/tharu2.jpg";
import Bhote2 from "./assets/img/bhote2.jpg";

const Food = () => {

  const body = document.body;

    if (body.classList.contains("home-page")) {
      body.classList.remove("home-page");
    }
  const styles = {
    className: "px-5",
  };
  const foods = [
    {
      className: styles.className,
      name: "Newari Khana",
      image: Newa1,
    },
    {
      className: styles.className,
      name: "Thakali Khana",
      image: Thakali1,
    },
    {
      className: styles.className,
      name: "Tharu Khana",
      image: Tharu1,
    },
    {
      className: styles.className,
      name: "Bhoteli Khana",
      image: Bhote1,
    },
    {
      className: styles.className,
      name: "Newari",
      image: Newa2,
    },
    {
      className: styles.className,
      name: "Thakali",
      image: Thakali2,
    },
    {
      className: styles.className,
      name: "Tharu",
      image: Tharu2,
    },
    {
      className: styles.className,
      name: "Bhoteli",
      image: Bhote2,
    },
  ];
  return (
    <>
     <div className="gallery-container  ">
        <div className="gallery-wrapper container mx-auto">
          <h2 className="page-title text-3xl font-bold">Food & Culture in Nepal</h2>
          <ul className="gallery-items  mt-4">
            {foods.map((item, index) => (
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

export default Food;
