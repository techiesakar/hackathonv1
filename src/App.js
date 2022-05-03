import React from "react";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Festival from "./components/Festival";
import Food from "./components/Food";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Heritage from "./components/Heritage";
import Home from "./components/Home";
import Culture from "./components/Culture";
import Adventure from "./components/Adventure";
import Mountain from "./components/Mountain";
import Covid from "./components/Covid";
import ThingsToDo from "./components/ThingsToDo";


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
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
