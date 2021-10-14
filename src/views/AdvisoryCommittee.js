/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

export default function AdvisoryCommitte() {
  return (
    <section className="site-content reveal-from-bottom" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
      <div style={{marginTop: '2rem'}}>
        <img
          src={require("../assets/h.drawio.png")}
          alt="Image"
        />
      </div>
    </section>
  );
}
