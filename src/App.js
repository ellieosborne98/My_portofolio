import React, { Component } from "react";
import Navbar from "./components/Navbar/NavBar";
import Home from "./components/home/Home";
import About from "./components/About/About";
import Service from "./components/Service/Service";
import Testimonial from "./components/Testimonial/Testimonial";

const app = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Service />
      <Testimonial />
    </>
  );
};

export default app;
