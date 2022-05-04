import React from "react";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Festival from "./components/Festival";
import Food from "./components/Food";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Heritage from "./components/Heritage";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Forgetpass from "./components/Forgetpass";
import Contact from "./components/Contact";


import Home from "./components/Home";
import Culture from "./components/Culture";
import Adventure from "./components/Adventure";
import Mountain from "./components/Mountain";
import Covid from "./components/Covid";
import ThingsToDo from "./components/ThingsToDo";
import Lake from "./components/Lake";
import Data from "./components/Data";

import Everest from "./components/posts/Everest";
import Annapurna from "./components/posts/Annapurna";

import Choyou from "./components/posts/Choyou";

import Dhaulagiri from "./components/posts/Dhaulagiri";
import Result from "./components/Result";


import Fishtail from "./components/posts/Fishtail";

import Kangchenjunga from "./components/posts/Kangchenjunga";

import Lhotse from "./components/posts/Lhotse";

import Makalu from "./components/posts/Makalu";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/adventure" element={<Adventure />} />
        <Route path="/heritage" element={<Heritage />} />
        <Route path="/festival" element={<Festival />} />
        <Route path="/covid" element={<Covid />} />
        <Route path="/mountain" element={<Mountain />} />
        <Route path="/todo" element={<ThingsToDo />} />
        <Route path="/lake" element={<Lake />} />
        <Route path="/food" element={<Food />} />
        <Route path="/adventure" element={<Adventure />} />
        <Route path="/mountain/everest" element={<Everest />} />
        <Route path="/mountain/annapurna" element={<Annapurna />} />

        <Route path="/mountain/choyou" element={<Choyou />} />

        <Route path="/mountain/dhaulagiri" element={<Dhaulagiri />} />

        <Route path="/mountain/fishtail" element={<Fishtail />} />

        <Route path="/mountain/lhotse" element={<Lhotse />} />

        <Route path="/mountain/makalu" element={<Makalu />} />

        <Route path="/mountain/kangchenjunga" element={<Kangchenjunga />} />

        <Route path="/data" element={<Data />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/forgetpass" element={<Forgetpass />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/result" element={<Result />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
