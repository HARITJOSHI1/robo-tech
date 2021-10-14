import React from "react";
import Accordian from "./Accordian";

const Faq = () => {
  const threads = [
    {
      ques: "What is Robo Tech ?",
      ans: "Robo Tech is an event organized by Inderprastha Engineering College IT department where you can as per the events participate in it which combines both technalogy and coding assesments of the participants.  ",
    },
    {
      ques: "Who can participate in the event ?",
      ans: "This event is open for all the IPEC college students starting from 2nd year and above.",
    },
    {
      ques: "How can I register myself for this event ?",
      ans: "You can register yourself by clicking at the register button on the top > fill a form > make secure payemnt, or you can contact the coordinators for this event at the contact page.",
    },
    {
      ques: "How much is the fee ?",
      ans: "So the fee is divided into 3 parts first for the 2 robotic events its 500 rs per team and for coding events its 300 per team and for e sports ots 500 per team.",
    },
    {
      ques: "If online payment failed ?",
      ans: "Don't worry we got you covered if something like that happened then we will return your money within 30 days no questions asked.",
    },
  ];
  return (
    <div className="site-content reveal-from-bottom">
      <div
        style={{
          marginTop: "8rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ marginBottom: "2rem" }}>Frequently asked questions</h1>
        <Accordian data={threads} />
      </div>
    </div>
  );
};

export default Faq;
