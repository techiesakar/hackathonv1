import React from "react";
import EverestIMG from "../assets/img/everest.jpg";

const Everest = () => {
    const body = document.body;

    if (body.classList.contains("home-page")) {
      body.classList.remove("home-page");
    }
  return (
    <>
      <div className="single-post">
        <div className="single-post-wrapper container mx-auto mt-8">
          <h1 className="single-post-title text-3xl font-bold mb-8">
            Mt. Everest - The Highest Peak in the World
          </h1>
          <div className="single-post-body">
            <div className="featured-img">
              <img src={EverestIMG} alt="" />
            </div>
            <p>
              Mt. Everest was recognized as the tallest mountain on the
              himalayans in 1841. It is 29029feet(8.85) tall and was belived to
              be insurmountable. It is located between Nepal and Tibet. Location
              :Nepal Latitude: 27° 59’ 17” N, Longitude: 86° 55’ 31” E​ Tibetan
              name is Chomolungma which means "Mother Goddess of the world".
              Nepali name is Sagarmatha which has various meaning.
            </p>
            <h2>Who climbed Mt. Everest first ?</h2>
            Edmund Hillary and Tenzing Norgay climbed everest first on 29 may
            1953. Junko Tabei ,Japanese women is the first wowan to climb
            mt.everest. Kami Rita , a sherpa has climbed more than anyone
            else.
            <h2>Best time to climb Mt. Everest ? </h2>
            <p>
              Best time is late spring,late spring,early summer and early
              autumn. from April to May,even mid-june ,is arguably the ideal
              time to climb mt.everest. It is said that those that have climbed
              the mountain and reached their peak, have been to the top of the
              world. Reaching the summit of this mountaineer's dream, many have
              managed to reach the top while some have failed and other lost
              their lives while at it.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Everest;
