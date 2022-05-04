import React from "react";
import LhotseIMG from "../assets/img/lhotse.jpg";

const Lhotse = () => {
  const body = document.body;

    if (body.classList.contains("home-page")) {
      body.classList.remove("home-page");
    }
  return (
    <>
      <div className="single-post mt-8">
        <div className="single-post-wrapper container mx-auto">
          <h1 className="single-post-title text-3xl font-bold mb-8">
            Mt. Lhotse
          </h1>
          <div className="single-post-body">
            <div className="featured-img">
            <img src={LhotseIMG} alt="" />

            </div>
            <p>
              Mount Everest, Sanskrit and Nepali Sagarmatha, Tibetan
              Chomolungma, Chinese (Pinyin) Zhumulangma Feng or (Wade-Giles
              romanization) Chu-mu-lang-ma Feng, also spelled Qomolangma Feng,
              mountain on the crest of the Great Himalayas of southern Asia that
              lies on the border between Nepal and the Tibet Autonomous Region
              of China, at 27°59′ N 86°56′ E. Reaching an elevation of 29,032
              feet (8,849 metres), Mount Everest is the highest mountain in the
              world.
            </p>
            <p>
              Mount Everest, Sanskrit and Nepali Sagarmatha, Tibetan
              Chomolungma, Chinese (Pinyin) Zhumulangma Feng or (Wade-Giles
              romanization) Chu-mu-lang-ma Feng, also spelled Qomolangma Feng,
              mountain on the crest of the Great Himalayas of southern Asia that
              lies on the border between Nepal and the Tibet Autonomous Region
              of China, at 27°59′ N 86°56′ E. Reaching an elevation of 29,032
              feet (8,849 metres), Mount Everest is the highest mountain in the
              world.
            </p>
            <p>
              Like other high peaks in the region, Mount Everest has long been
              revered by local peoples. Its most common Tibetan name,
              Chomolungma, means “Goddess Mother of the World” or “Goddess of
              the Valley.” The Sanskrit name Sagarmatha means literally “Peak of
              Heaven.” Its identity as the highest point on the Earth’s surface
              was not recognized, however, until 1852, when the governmental
              Survey of India established that fact. In 1865 the
              mountain—previously referred to as Peak XV—was renamed for Sir
              George Everest, British surveyor general of India from 1830 to
              1843.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lhotse;
