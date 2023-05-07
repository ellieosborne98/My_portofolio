import React, { useState } from "react";
import "./testimonial.css";

const Testimonial = () => {
  const data = [
    {
      img: "https://images.pexels.com/photos/5774802/pexels-photo-5774802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 ",
      content: "i am very thakfull on the service that ou give me ",
      name: "jake avatar ",
      position: "web developer",
    },
    {
      img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
      content: "i am very thakfull on the service that ou give me ",
      name: "jake avatar ",
      position: "web developer",
    },
    {
      img: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=600",
      content: "i am very thakfull on the service that ou give me ",
      name: "jake avatar ",
      position: "web developer",
    },
    {
      img: "https://images.pexels.com/photos/598917/pexels-photo-598917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 ",
      content: "i am very thakfull on the service that ou give me ",
      name: "jake avatar ",
      position: "web developer",
    },
    {
      img: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      content: "i am very thakfull on the service that ou give me ",
      name: "jake avatar ",
      position: "web developer",
    },
    {
      img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=600 ",
      content: "i am very thakfull on the service that ou give me ",
      name: "jake avatar ",
      position: "web developer",
    },
    {
      img: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=600",
      content: "i am very thakfull on the service that ou give me ",
      name: "jake avatar ",
      position: "web developer",
    },
    {
      img: "https://img.freepik.com/free-photo/3d-rendering-zoom-call-avatar_23-2149556785.jpg?w=740&t=st=1683419233~exp=1683419833~hmac=315152f9df34b03fee7bd95b6144db7e485c1ae33534156f422a99be0433d207 ",
      content: "i am very thakfull on the service that ou give me ",
      name: "jake avatar ",
      position: "web developer",
    },
    {
      img: "https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=600 ",
      content: "i am very thakfull on the service that ou give me ",
      name: "jake avatar ",
      position: "web developer",
    },
    {
      img: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=600",
      content: "i am very thakfull on the service that ou give me ",
      name: "jake avatar ",
      position: "web developer",
    },
    {
      img: "https://img.freepik.com/free-photo/3d-rendering-zoom-call-avatar_23-2149556785.jpg?w=740&t=st=1683419233~exp=1683419833~hmac=315152f9df34b03fee7bd95b6144db7e485c1ae33534156f422a99be0433d207 ",
      content: "i am very thakfull on the service that ou give me ",
      name: "jake avatar ",
      position: "web developer",
    },
    {
      img: "https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=600 ",
      content: "i am very thakfull on the service that ou give me ",
      name: "jake avatar ",
      position: "web developer",
    },
  ];
  const [showMorePost, setShowMorePost] = useState(6);
  const loadmore = () => {
    setShowMorePost((prev) => prev + 3);
  };

  return (
    <div className="container testimonial-section">
      {/*section titles */}
      <div className="section-title">
        <h5> Testimonial </h5>
        <span className="line"></span>
      </div>
      <div className="row">
        {data.slice(0, showMorePost).map((item, index) => (
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <div className="content-card">
              <img src={item.img} alt="image" />
              <p>{item.content}</p>
              <span className="name">{item.name}</span>
              <p>{item.position}</p>
            </div>
          </div>
        ))}
        {showMorePost >= data.length ? null : (
          <span className="load-more-button" onClick={loadmore}>
            loadmore
          </span>
        )}
      </div>
    </div>
  );
};

export default Testimonial;
