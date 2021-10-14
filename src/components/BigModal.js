// import React, { useState } from "react";
// import ReactDOM from "react-dom";
// import classNames from "classnames";
// import { SectionProps } from "../utils/SectionProps";
// import Modal from "../components/elements/Modal";

// const propTypes = {
//   ...SectionProps.types,
// };

// const defaultProps = {
//   ...SectionProps.defaults,
// };

// const Hero = ({
//   className,
//   topOuterDivider,
//   bottomOuterDivider,
//   topDivider,
//   bottomDivider,
//   hasBgColor,
//   invertColor,
//   ...props
// }) => {
//   const [videoModalActive, setVideomodalactive] = useState(false);

//   const openModal = (e) => {
//     e.preventDefault();
//     setVideomodalactive(true);
//   };

//   const closeModal = (e) => {
//     e.preventDefault();
//     setVideomodalactive(false);
//   };

//   const outerClasses = classNames(
//     "hero section center-content",
//     topOuterDivider && "has-top-divider",
//     bottomOuterDivider && "has-bottom-divider",
//     hasBgColor && "has-bg-color",
//     invertColor && "invert-color",
//     className
//   );

//   const innerClasses = classNames(
//     "hero-inner section-inner",
//     topDivider && "has-top-divider",
//     bottomDivider && "has-bottom-divider"
//   );

//   const BigModal = () => {
//     return ReactDOM.createPortal(
//       <Modal
//         id="video-modal"
//         show={videoModalActive}
//         handleClose={closeModal}
//         video="https://player.vimeo.com/video/174002812"
//         videoTag="iframe"
//       />,
//       document.getElementById("modal")
//     );
//   };
// };
