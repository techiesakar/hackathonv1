import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Festival from "./components/Festival";
import Food from "./components/Food";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Heritage from "./components/Heritage";
import Home from "./components/Home";
import Place from "./components/Place";
import Culture from "./components/Culture";
import Adventure from "./components/Adventure";
import Mountain from "./components/Mountain";
import Covid from "./components/Covid";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/adventure" element={<Adventure />} />
        <Route path="/place" element={<Place />} />
        <Route path="/heritage" element={<Heritage />} />
        <Route path="/festival" element={<Festival />} />
        <Route path="/covid" element={<Covid />} />
        <Route path="/mountain" element={<Mountain />} />


      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
