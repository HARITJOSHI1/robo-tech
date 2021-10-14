import React, { useState } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Image from "../elements/Image";
import Modal from "../elements/Modal";
import { Timer } from "../elements/Timer";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  };

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  };

  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  return (
    <section
      {...props}
      className={outerClasses}
      style={{ position: "relative" }}
    >
      <div
        className="bg-video"
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          height: "100%",
          width: "100%",
          overflow: "hidden",
          zIndex: "-1",
          opacity: "0.3",
        }}
      >
        <video
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
          autoPlay
          muted
          loop
        >
          <source
            src={require("../../assets/images/test1.mp4")}
            type="video/mp4"
          />
        </video>
      </div>

      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <div style={{ marginBottom: "1rem" }}>
              <p
                className="m-0 mb-32 reveal-from-bottom"
                data-reveal-delay="400"
                style={{
                  color: "white",
                  fontSize: "1.8rem",
                  letterSpacing: "2.5px",
                }}
              >
                Inderprastha Engineering College <br />
                <span
                  style={{ color: "rgb(207, 190, 121)", fontWeight: "bold" }}
                >
                  {" "}
                  Department of Information Technology
                </span>{" "}
                <br />
                presents
              </p>
            </div>

            <h1
              className="mt-0 mb-16 reveal-from-bottom"
              data-reveal-delay="200"
              style={{ fontSize: "3rem", fontWeight: "bold" }}
            >
              <span style={{ color: "#40c39e" }}>
                {" "}
                RoboTech'
                <span style={{ color: "rgb(133, 108, 198)" }}> 21 </span>{" "}
              </span>{" "}
              <br /> <span> One Stop To Show Your </span>{" "}
              <span
                className="text-color-primary"
                style={{ color: "rgb(133, 108, 198)" }}
              >
                Skills
              </span>
            </h1>
            <div className="container-xs">
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <div
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: "bold",
                    color: "black",
                    backgroundColor: "rgb(207, 190, 121)",
                    width: "40%",
                    margin: "1rem auto",
                  }}
                >
                  {" "}
                  29 - 30th October
                </div>
                <ButtonGroup>
                  <Timer
                    time={{ seconds: 60, minutes: 60, hours: 24, days: 19 }}
                  />
                </ButtonGroup>
              </div>
            </div>
          </div>
          <div
            className="hero-figure reveal-from-bottom illustration-element-01"
            data-reveal-value="20px"
            data-reveal-delay="800"
          >
            <a
              data-video="https://player.vimeo.com/video/174002812"
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              <Image
                className="has-shadow"
                src={require("./../../assets/images/index.jpeg")}
                alt="Hero"
                width={896}
                height={900}
                style={{ height: "10%" }}
              />
            </a>
          </div>
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://www.youtube.com/embed/ouM2GcoemOY"
            videoTag="iframe"
          />
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
