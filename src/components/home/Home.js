import React, { Component } from "react";
import "./home.css";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div className="cointainer-fluid home">
      <div className="container home-content">
        <h1>
          <Typewriter
            options={{
              strings: [
                "Videography",
                "UI/UX Design",
                "Photography",
                "web development",
                "Software developement",
              ],
              autoStart: true,
              loop: true,
              delay: 5,
            }}
          />
        </h1>
        <p>
          We offer video production, mobile application development, UI/UX
          design, photography, web development, and tech solutions. Our skilled
          team is committed to creating high-quality digital experiences that
          are visually stunning and functionally effective.
        </p>
        <span className="more-details-home-button">More details</span>
      </div>
    </div>
  );
};
export default Home;
