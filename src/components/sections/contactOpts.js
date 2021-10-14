import React from "react";
import Image from "../elements/Image";
const contactOpts = (props) => {
  return (
    <div
      style={{
        ...props.container,
      }}
    >
      <Image
        src={require("../../assets/images/contactUsSvg1.svg")}
        alt="Features tile icon 05"
        style={{ ...props.svgops }}
      />

      <h4 style={{ ...props.headingops }}>Heading</h4>
      <p style={{ ...props.paraops }}>
        {props.children}
      </p>

    </div>
  );
};

export default contactOpts;
