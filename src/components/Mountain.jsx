import Everest from "./assets/img/everest.jpg";
import Kangchenjunga from "./assets/img/kangchenjunga.jpg";
import Dhaulagiri from "./assets/img/dhaulagiri.jpg";
import Annapurna from "./assets/img/annapurna.jpg";
import Lhotse from "./assets/img/lhotse.jpg";
import Makalu from "./assets/img/makalu.jpg";
import Fishtail from "./assets/img/fishtail.jpg";
import Choyou from "./assets/img/choyou.jpg";

// import { NavLink } from "react-router-dom";

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
      to: "/everest",
      name: "Mt Everest",
      image: Everest,
      title: "Mt Everest - Highest Peak of the World",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque fugiat dicta qui beatae impedit provident ipsum dolore! Laboriosam voluptatibus atque hic at quidem, incidunt reiciendis, reprehenderit explicabo inventore omnis quis.       ",
    },
    {
      className: styles.className,
      to: "/Kangchenjunga",
      name: "Mt Kangchenjunga",
      image: Kangchenjunga,
    },
    {
      className: styles.className,
      to: "/dhaulagiri",
      name: "Mt Dhaulagiri",
      image: Dhaulagiri,
    },
    {
      className: styles.className,
      to: "/fishtail",
      name: "Mt Fishtail",
      image: Fishtail,
    },
    {
      className: styles.className,
      to: "/annapurna",
      name: "Mt Annapurna",
      image: Annapurna,
    },
    {
      className: styles.className,
      to: "/lhotse",
      name: "Mt Lhotse",
      image: Lhotse,
    },
    {
      className: styles.className,
      to: "/makalu",
      name: "Mt Makalu",
      image: Makalu,
    },
    {
      className: styles.className,
      to: "/choyou",
      name: "Mt Choyou",
      image: Choyou,
    },
  ];
  return (
    <>
      <div className="gallery-container container mx-auto">
        <div className="gallery-wrapper">
          <h2 className="page-title text-3xl font-bold">
            Explore Beautiful Mountains in Nepal
          </h2>
          <ul className="gallery-items  mt-4">
            {mountains.map((item, index) => (
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

export default Mountain;
