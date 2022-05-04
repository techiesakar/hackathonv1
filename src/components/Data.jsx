import React, { Component } from "react";
import Slider from "react-slick";
import Kathmandu from "./assets/img/kathmandu.jpg";
import Lumbini from "./assets/img/lumbini.jpg";
import Mustang from "./assets/img/mustang.jpg";
import Pokhara from "./assets/img/pokhara.jpg";

import { NavLink } from "react-router-dom";

export default class ThingsToDo extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
    const body = document.body;

    if (body.classList.contains("home-page")) {
      body.classList.remove("home-page");
    }
    return (
      <div className="place">
        <div className=" container place-wrapper mx-auto rounded">
          <h2 className="page-title text-3xl font-bold text-center mb-4">
            Explore Different Places
          </h2>
          <Slider {...settings}>
            <div className="mountain place-item">
              <div className="place-item-img">
                <NavLink to="/result">
                  <img src={Kathmandu} alt="" />
                </NavLink>
              </div>
            </div>
            <div className="lakes place-item">
              <div className="place-item-img">
                <NavLink to="/result">
                  <img src={Mustang} alt="" />
                </NavLink>
              </div>
            </div>
            <div className="food-culture place-item">
              <div className="place-item-img">
                <NavLink to="/result">
                  <img src={Pokhara} alt="" />
                </NavLink>
              </div>
            </div>
            <div className="food-culture place-item">
              <div className="place-item-img">
                <NavLink to="/result">
                  <img src={Lumbini} alt="" />
                </NavLink>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
