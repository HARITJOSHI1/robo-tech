/* eslint-disable no-unused-expressions */
import React, { useRef, useState } from "react";
import ReactMapGl, { Marker, Popup } from "react-map-gl";
import About from "../assets/images/About.png";
import Guidlines from "../components/sections/Guidelines";
// import Map from "../components/Map";

const Aboutus = () => {
  const [viewport, setViewport] = useState({
    latitude: 28.6588,
    longitude: 77.3401,
    width: "100%",
    height: "70vh",
    center: true,
    zoom: 12,
  });

  const [open, setOpen] = useState(false);

  const togglePopup = () => {
    return (
      <Popup
        latitude={28.6588}
        longitude={77.3401}
        closeButton={true}
        closeOnClick={false}
        onClose={() => setOpen(!open)}
        anchor="bottom"
      >
        <div style={{ fontSize: ".8rem", fontColor: "black" }}>
          Inderprastha engineering college{" "}
        </div>
      </Popup>
    );
  };
  const map = useRef();
  return (
    <div className="site-content reveal-from-bottom">
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "7rem" }}
      >
        <div
          style={{
            width: "30%",
          }}
        >
          <h1>
            About <span className="text-color-primary">Us</span>{" "}
          </h1>
          <p style={{ textAlign: "justify" }}>
            Inderprastha engineering college (IPEC) is one of the most preferred
            engineering college in Ghaziabad Delhi NCR for aspiring engineers
            and technologists. It was established in the year 2000, by leading
            academicians and business leaders in North India, under the aegis of
            Shail Garg Shiksha Sansthan, a non-profit making society.
          </p>
        </div>

        <div style={{ width: "35%", position: "relative", left: "7rem" }}>
          <img src={About} alt="About" />
        </div>
      </div>

      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "7rem" }}
      >
        <div style={{ width: "35%" }}>
          <ReactMapGl
            {...viewport}
            mapboxApiAccessToken="pk.eyJ1IjoiaGFycnktYXJjIiwiYSI6ImNrcm5rbGE3dDIxcWoydm81dnQ3N2theWwifQ.eiZamoj0HYumU5GFG8Ae0Q"
            onViewportChange={(viewport) => setViewport(viewport)}
          >
            <Marker latitude={28.6588} longitude={77.3401}>
              <button
                style={{
                  backgroundColor: "transparent",
                  border: "0",
                  outline: "0",
                  margin: "0",
                  padding: "0",
                  cursor: "pointer",
                  width: "50px",
                  height: "50px",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(!open);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="#6B6DFF"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </Marker>

            {open && togglePopup()}
          </ReactMapGl>
        </div>

        <div
          style={{
            width: "30%",
          }}
        >
          <div style={{ position: "relative", left: "7rem", top: "-.5rem" }}>
            <p style={{ textAlign: "justify" }}>
              IPEC is the best engineering college in Ghaziabad Delhi NCR with
              20+ years of excellence, a rich alumni base of 15000+ students,
              and best placement with 200+ recruiters. IPEC has now become a
              pioneer in the field of technical education. Be it education,
              extracurricular activities, placement offers, campus or faculty
              IPEC is counted as top engineering college of AKTU in Ghaziabad,
              Delhi NCR.
            </p>
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: "10rem",
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "60%",
            textAlign: "center",
          }}
        >
          <h1 style={{ textAlign: "center" }}>
            About <span className="text-color-primary">IT</span> Department
          </h1>
          <p style={{ textAlign: "justify" }}>
            The significance of Information Technology on this world is
            expanding at an extremely quick speed. Today, there is not really
            any individual whose life isn't moved by Information Technology. In
            our daily lives, we have integrated the products and end means of
            information technology whether it's the operating systems on the
            computer networks that automate a company's tasks and processes, our
            mobile phones, or the vast amount of information sought and found on
            the internet. This translates ostensibly that careers in the
            information technology sector are expected to grow significantly in
            the upcoming years.
          </p>
        </div>

        <Guidlines split>
          <h4> The goals of RoboTech’2021: </h4>
          <ul>
            <li style={{ color: "white" }}>
              Search talents to solve real world problems through the use of
              software as well as Hardware coding.
            </li>
            <li style={{ color: "white" }}>
              A platform for students to showcase their competency in the domain
              of Robotics and Coding both.
            </li>
            <li style={{ color: "white" }}>
              Build, code and Test Robots under Robotics events.
            </li>
            <li style={{ color: "white" }}>
              Provide solutions by developing software projects under Coding
              events.
            </li>
          </ul>
        </Guidlines>
      </div>

    </div>
  );
};

export default Aboutus;
