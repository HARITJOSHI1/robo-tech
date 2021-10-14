/* eslint-disable no-redeclare */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";

// Random component
const Completionist = () => (
  <span
    style={{
      display: "inline-block",
      fontSize: "2.5rem",
      marginTop: "2rem",
      color: "white",
      fontWeight: "bold",
    }}
  >
    Event has started!
  </span>
);

// Renderer callback with condition
export const Timer = (props) => {
  // let timeOpt = {
  //   days: props.time.days,
  //   hours: props.time.hours,
  //   minutes: props.time.minutes,
  //   seconds: props.time.seconds,
  // };

  // useEffect(() => {
  //     timeOpt = JSON.parse(localStorage.getItem("timers"));
  // });

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    let time = JSON.parse(localStorage.getItem("time"));
    let d = time?.days || props.time.days;
    let h = time?.hours || props.time.hours;
    let m = time?.minutes || props.time.minutes;
    let s = time?.seconds || props.time.seconds;

    localStorage.setItem(
      "time",
      JSON.stringify({ days, hours, minutes, seconds })
    )

    if (completed) {
      // Render a complete state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <span
          style={{
            display: "inline-block",
            fontSize: "2.5rem",
            marginTop: "2rem",
            color: "white",
            fontWeight: "bold",
          }}
        >
          {d}:{h}:{m}:{s}
        </span>
      );
    }
  };

  return (
    <div>
      <Countdown
        date={Date.now() + 1000 * 60 * 60 * 24 * 20}
        renderer={renderer}
      />
    </div>
  );
};
