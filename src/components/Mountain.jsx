import Everest from "./assets/img/everest.jpg";
import Kangchenjunga from "./assets/img/kangchenjunga.jpg";
import Dhaulagiri from "./assets/img/dhaulagiri.jpg";
import Annapurna from "./assets/img/annapurna.jpg";
import Lhotse from "./assets/img/lhotse.jpg";
import Makalu from "./assets/img/makalu.jpg";
import Fishtail from "./assets/img/fishtail.jpg";
import Choyou from "./assets/img/choyou.jpg";

import { NavLink } from "react-router-dom";

const Mountain = () => {
  const body = document.body;

  if (body.classList.contains("home-page")) {
    body.classList.remove("home-page");
  }

  const styles = {
    className: "px-5",
  };
  const mountains = [
    {
      className: styles.className,
      to: "/mountain/everest",
      name: "Mt Everest",
      image: Everest,
      title: "Mt Everest - Highest Peak of the World",
      },
    {
      className: styles.className,
      to: "/mountain/Kangchenjunga",
      name: "Mt Kangchenjunga",
      image: Kangchenjunga,
    },
    {
      className: styles.className,
      to: "/mountain/dhaulagiri",
      name: "Mt Dhaulagiri",
      image: Dhaulagiri,
    },
    {
      className: styles.className,
      to: "/mountain/fishtail",
      name: "Mt Fishtail",
      image: Fishtail,
    },
    {
      className: styles.className,
      to: "/mountain/annapurna",
      name: "Mt Annapurna",
      image: Annapurna,
    },
    {
      className: styles.className,
      to: "/mountain/lhotse",
      name: "Mt Lhotse",
      image: Lhotse,
    },
    {
      className: styles.className,
      to: "/mountain/makalu",
      name: "Mt Makalu",
      image: Makalu,
    },
    {
      className: styles.className,
      to: "/mountain/choyou",
      name: "Mt Choyou",
      image: Choyou,
    },
  ];
  return (
    <>
      <div className="gallery-container  ">
        <div className="gallery-wrapper container mx-auto">
          <h2 className="page-title text-3xl font-bold">
            Explore the Mountains in Nepal
          </h2>
          <ul className="gallery-items  mt-4">
            {mountains.map((item, index) => (
              <li
                className="gallery-item  relative rounded-lg overflow-hidden"
                key={index}
              >  <NavLink to={item.to}>
                <img className="h-full rounded-md" src={item.image} alt="" />
                <div className="gallery-item-content absolute flex items-center justify-center">
                  <h2 className="p-2">{item.name}</h2>
                </div>
                <a href="#" className="overlay transition"></a>
              
                  
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Mountain;
