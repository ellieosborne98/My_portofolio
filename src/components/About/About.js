import React, { Component } from "react";
import "./about.css";
import about from "../../image/about.jpg";
import { FcSlrBackSide, FcClapperboard, FcStatistics } from "react-icons/fc";

const About = () => {
  return (
    <div className="container about-section">
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-image">
            <img src={about} height="300px" width="300px" alt="about_image" />
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-details">
            <div className="about-title">
              <h5>About</h5>
              <span className="line"></span>
            </div>
            <p>
              Revolutionize Your Digital Presence with Our Expert Services. From
              video production and mobile app development to UI/UX design,
              photography, web development, and tech solutions, we offer
              comprehensive solutions to transform your digital experience.
            </p>
            <div className="card-design">
              <div className="about-list-item">
                <div className="about-details-icon">
                  <p>
                    <FcSlrBackSide size={50} />
                  </p>
                </div>
                <div>
                  <h6>prefered dayout</h6>
                  <p>
                    we provide awesome service on your door step and everyday we
                    do make them awesome
                  </p>
                </div>
              </div>
            </div>
            <div className="card-design">
              <div className="about-list-item">
                <div className="about-details-icon">
                  <p>
                    <FcClapperboard size={50} />
                  </p>
                </div>
                <div>
                  <h6>prefered dayout</h6>
                  <p>
                    we provide awesome service on your door step and everyday we
                    do make them awesome
                  </p>
                </div>
              </div>
            </div>
            <div className="card-design">
              <div className="about-list-item">
                <div className="about-details-icon">
                  <p>
                    <FcStatistics size={50} />
                  </p>
                </div>
                <div>
                  <h6>prefered dayout</h6>
                  <p>
                    we provide awesome service on your door step and everyday we
                    do make them awesome
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
