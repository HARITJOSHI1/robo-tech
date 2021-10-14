import React from "react";
// import sections
import Hero from "../components/sections/Hero";
import FeaturesTiles from "../components/sections/FeaturesTiles";
import FeaturesSplit from "../components/sections/FeaturesSplit";
import Testimonial from "../components/sections/Testimonial";
import Cta from "../components/sections/Cta";
import img1 from "../assets/images/4.3.jpeg";
import img2 from "../assets/images/4.1.jpeg";
import img3 from "../assets/images/4.2.jpeg";

import img4 from "../assets/images/3.1.jpeg";
import img5 from "../assets/images/3.2.jpeg";
import img6 from "../assets/images/3.3.jpeg";

import img7 from "../assets/images/2.1.jpeg";
import img8 from "../assets/images/2.2.jpeg";
import img9 from "../assets/images/2.3.jpeg";

const Home = () => {
  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesSplit
        invertMobile
        topDivider
        imageFill
        className="illustration-section-02"
      />
      <FeaturesTiles />
      <Testimonial
        topDivider
        title= "4th year IT Team"
        img1={img1}
        img2={img2}
        img3={img3}
        name1="Utkarsh Sharma"
        name2="Nishant Mishra"
        name3="Pratham Mohindru"
      />

      <Testimonial
        topDivider
        title= "3rd year IT Team"
        img1={img4}
        img2={img5}
        img3={img6}
        name1="Govind Krishnan"
        name2="Harit Joshi"
        name3="Deepanshu Mishra"
      />

      <Testimonial
        topDivider
        title= "2nd year IT Team"
        img1={img7}
        img2={img8}
        img3={img9}
        name1="Amaan Khan"
        name2="Hardick Bhadauria"
        name3="Akarsh Verma"
      />
      {/* <Testimonial topDivider img1 = {img1} img2 = {img2} img3 = {img3/>
      <Testimonial topDivider img1 = {img1} img2 = {img2} img3 = {img3}/> */}
      <Cta split />
    </>
  );
};

export default Home;
