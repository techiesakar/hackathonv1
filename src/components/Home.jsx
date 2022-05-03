import React from "react";
import Everest from "./assets/img/everest.jpg";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="home flex items-center">
        <div className="home-wrapper container mx-auto relative">
          <div className="fixed-img-wrapper fixed">
            <img src={Everest} alt="" />
          </div>
          <div className="home-left h-100 flex items-center">
            <div className="content-wrapper py-6">
              <p className="font-bold text-white mb-3">
                Discover the Mountains
              </p>
              <h2 className="text-6xl mb-2  text-white">Explore</h2>
              <h2 className="text-6xl mb-2  font-bold text-white">
                The Mountains
              </h2>
              <div className="explore-btn-wrapper mt-4">
                <button className="py-2 px-4 font-bold hover:text-blue-900 transition bg-blue-500 rounded text-white">
                  Explore Now
                </button>
              </div>
              <div className="social-wrapper flex mt-8 	 w-max rounded">
                <a
                  className="p-4 text-2xl  bg-slate-700 text-white mr-3 rounded hover:text-blue-800"
                  href="#"
                >
                  <BsFacebook />
                </a>
                <a
                  className="p-4 text-2xl bg-slate-700 text-white mr-3 rounded hover:text-blue-800"
                  href="#"
                >
                  <BsInstagram />
                </a>
                <a
                  className="p-4 text-2xl bg-slate-700 text-white rounded hover:text-blue-800"
                  href="#"
                >
                  <BsTwitter />
                </a>
              </div>
            </div>
          </div>
          <div className="home-right"></div>
          <div className="more-mountains flex items-center px-8 py-6 shadow rounded max-w-fit text-white absolute">
            <div className="mountains-content mr-4">
              <h2 className="font-bold">Top 8 Highest Mountain</h2>
              <span className="flex items-center">
                <NavLink to={"/mountain"}>
                  <span className="mr-2">More</span> <AiOutlineArrowRight />
                </NavLink>
              </span>
            </div>
            <div className="mountain-image">
              <NavLink to={"/mountain"}>
                <img className="w-36 h-28" src={Everest} alt="" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
