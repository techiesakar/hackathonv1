import React, { Component } from "react";
import Slider from "react-slick";
import Everest from "./assets/img/everest.jpg";
import Lake from "./assets/img/lake.png";
import Bunjee from "./assets/img/bunjee.jpg";
import Food from "./assets/img/food.jpg";
import Adventure from "./assets/img/adventure.jpg";
import { NavLink } from "react-router-dom";

export default class ThingsToDo extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    const body = document.body;

    if (body.classList.contains("home-page")) {
      body.classList.remove("home-page");
    }
    return (
      <div className="todo container mx-auto rounded">
        <Slider {...settings}>
          <div className="mountain todo-item">
            <div className="todo-item-content">
              <h1>World's Top 8 Highest Peaks</h1>
              <p>
                Coming to Nepal is coming to an experience that is only yours.
                From the remotest corners to the urban landscape, Nepal embodies
                a sensory experience of colours, sounds, sights and tastes.
                Visit Nepal welcomes you to life’s amazing moments.
              </p>
              <div className="read-more-wrapper mt-8">
                <button className="py-3 px-3 text-white rounded hover:-translate-y-1 transition">
                  <NavLink to={"/mountain"}>Read More</NavLink>
                </button>
              </div>
            </div>
            <div className="todo-item-img">
              <img src={Everest} alt="" />
            </div>
          </div>
          <div className="lakes todo-item">
            <div className="todo-item-content">
              <h1>Lakes in Nepal</h1>
              <p>
                Coming to Nepal is coming to an experience that is only yours.
                From the remotest corners to the urban landscape, Nepal embodies
                a sensory experience of colours, sounds, sights and tastes.
                Visit Nepal welcomes you to life’s amazing moments.
              </p>
              <div className="read-more-wrapper mt-8">
              <button className="py-3 px-3 text-white rounded hover:-translate-y-1 transition">
                  <NavLink to={"/lake"}>Read More</NavLink>
                </button>
              </div>
            </div>
            <div className="todo-item-img">
              <img src={Lake} alt="" />
            </div>
          </div>
          <div className="food-culture todo-item">
            <div className="todo-item-content">
              <h1>Food & Culture</h1>
              <p>
                Coming to Nepal is coming to an experience that is only yours.
                From the remotest corners to the urban landscape, Nepal embodies
                a sensory experience of colours, sounds, sights and tastes.
                Visit Nepal welcomes you to life’s amazing moments.
              </p>
              <div className="read-more-wrapper mt-8">
              <button className="py-3 px-3 text-white rounded hover:-translate-y-1 transition">
                  <NavLink to={"/food"}>Read More</NavLink>
                </button>
              </div>
            </div>
            <div className="todo-item-img">
              <img src={Food} alt="" />
            </div>
          </div>

          <div className="adventure todo-item">
            <div className="todo-item-content">
              <h1>Adventure in Nepal</h1>
              <p>
                Coming to Nepal is coming to an experience that is only yours.
                From the remotest corners to the urban landscape, Nepal embodies
                a sensory experience of colours, sounds, sights and tastes.
                Visit Nepal welcomes you to life’s amazing moments.
              </p>
              <div className="read-more-wrapper mt-8">
              <button className="py-3 px-3 text-white rounded hover:-translate-y-1 transition">
                  <NavLink to={"/adventure"}>Read More</NavLink>
                </button>
              </div>
            </div>
            <div className="todo-item-img">
              <img src={Adventure} alt="" />
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
