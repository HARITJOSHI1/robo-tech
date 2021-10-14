import React, { useState } from "react";

const Accordian = (props) => {
  const [activeIdx, setActiveIndex] = useState(null);

  const handle = (index, c) => {
    if (c === index) return setActiveIndex(null);
    setActiveIndex(index);
  };

  const ret = props.data.map((ptr, idx) => {
    const active = idx === activeIdx ? "active" : "";
    const counter = activeIdx;

    return (
      <React.Fragment key={idx}>
        <div
          className={`title ${active}`}
          onClick={handle.bind(null, idx, counter)}
          style={{ color: "#9CA9B3", borderBottom: "7px solid #151719", fontSize: "1.1rem", borderRadius: "0px"}}
        >
          <i className="dropdown icon"></i>
          {ptr.ques}
        </div>

        <div
          className={`content ${active}`}
          style={{ color: "white", borderBottom: "7px solid #151719", fontSize: "1.17rem" }}
        >
          <p>{ptr.ans}</p>
        </div>
      </React.Fragment>
    );
  });

  return (
    <div
      className="ui styled accordion"
      style={{ width: "55%", backgroundColor: "#25282C", borderRadius: "0px"}}
    >
      {ret}
    </div>
  );
};

export default Accordian;
