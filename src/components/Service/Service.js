import React from "react";
import "./service.css";
import { FcOk } from "react-icons/fc";

const Service = () => {
  const servicedata = [
    {
      id: 1,
      service1: "Software developement",
      serice2: "web developement",
      service3: "Mobile application development",
      service4: "cloud system solutions",
    },

    {
      id: 2,
      service1: "Software developement",
      serice2: "web developement",
      service3: "Mobile application development",
      service4: "cloud system solutions",
    },

    {
      id: 3,
      service1: "Software developement",
      serice2: "web developement",
      service3: "Mobile application development",
      service4: "cloud system solutions",
    },

    {
      id: 4,
      service1: "Software developement",
      serice2: "web developement",
      service3: "Mobile application development",
      service4: "cloud system solutions",
    },

    {
      id: 5,
      service1: "Software developement",
      serice2: "web developement",
      service3: "Mobile application development",
      service4: "cloud system solutions",
    },

    {
      id: 6,
      service1: "Software developement",
      serice2: "web developement",
      service3: "Mobile application development",
      service4: "cloud system solutions",
    },
  ];

  const color = [
    "#ef476f",
    "#ffd166",
    "#06d6a0",
    "#118ab2",
    "#073b4c",
    "#ffd60a",
  ];

  return (
    <div className="container service-section">
      {/* section-title */}

      <div className="section-title">
        <h5> Services </h5>
        <span className="line"></span>
      </div>
      <div className="row">
        {servicedata.map((item, index) => (
          <>
            <div className="col-xl-4 col-lg-3  col-md-2 col-sm-1" key={index}>
              <div className="services">
                <span
                  className="service-number"
                  style={{ backgroundColor: color[index] }}
                >
                  <p>{index + 1}</p>
                </span>
                <div className="list-of-service">
                  <p>
                    <FcOk size={20} style={{ margin: "5px" }} />
                    {item.service1}
                  </p>
                  <span className="service_line"></span>
                  <p>
                    <FcOk size={20} style={{ margin: "5px" }} />
                    {item.serice2}
                  </p>
                  <span className="service_line"></span>

                  <p>
                    <FcOk size={20} style={{ margin: "5px" }} />
                    {item.service3}
                  </p>
                  <span className="service_line"></span>

                  <p>
                    <FcOk size={20} style={{ margin: "5px" }} />
                    {item.service4}
                  </p>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};
export default Service;
