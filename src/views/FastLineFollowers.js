import React, { useRef } from "react";
import Styled, { css } from "styled-components";
import img from "../assets/images/fastLine.jpg";
import axios from "axios";
import Guidelines from "../components/sections/Guidelines";
import "./fl.css";

export const HeroSec = Styled.section`
width: 100%; 
height: 88vh;
${(props) => css`
  background-image: linear-gradient(
      to right bottom,
      ${props.primaryColor},
      ${props.secondaryColor}
    ),
    url(${props.imgUrl});
`};
opacity: .79;
background-size: cover;
background-position: top;
position: relative;
display: flex;
justify-content: center;
`;

export const HeroContent = Styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Addons = Styled.div`
width: 40%;
margin: 2rem auto;
border-radius: 3px;
padding: .3rem 3rem;
${(props) => css`
  background-image: linear-gradient(
    to right,
    ${props.primaryColor},
    ${props.secondaryColor}
  );
`};
transform: skewX(-12deg);
`;

export default function Esports() {
  const ref = useRef();
  return (
    <div className="site-content reveal-from-bottom">
      <HeroSec
        imgUrl={img}
        primaryColor="rgba(190, 92, 138, 0.82)"
        secondaryColor="rgba(54, 25, 255, 0.83)"
      >
        <HeroContent>
          <h1
            className="mt-0 mb-16 neon"
            style={{
              textTransform: "uppercase",
              fontWeight: "700",
              fontSize: "6rem",
              fontFamily: "Barlow Condensed",
              letterSpacing: "2px",
            }}
          >
            Fastest Line Followers
          </h1>
          <h3 className="neon-3">Be Fast to follow</h3>
        </HeroContent>
        {/* <svg
          onClick={() => ref.current.scrollIntoView({ behavior: "smooth" })}
          style={{
            width: "10%",
            height: "10%",
            position: "relative",
            top: "50%",
            left: "43%",
          }}
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
        >
          <path
            style={{ cursor: "pointer" }}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg> */}
      </HeroSec>

      <section
        className="reveal-from-bottom"
        ref={ref}
        style={{ width: "100%" }}
      >
        <Addons
          classname="addons"
          primaryColor="rgba(190, 92, 138, 0.62)"
          secondaryColor="rgba(54, 25, 255, 0.63)"
        >
          <h2
            className="mt-0 mb-16"
            style={{ textAlign: "center", transform: "skewX(12deg)" }}
          >
            Addons
          </h2>
        </Addons>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <ul
            className="list"
            style={{
              width: "40%",
              backgroundColor: "white",
              listStyle: "none",
            }}
          >
            <span className="clip-f"> Quick Highlights </span>
            <li style={{ display: "flex", alignItems: "center" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="rgba(54, 25, 255, 0.63)"
                style={{ width: "8%", height: "8%", display: "inline-block" }}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span>Minimum</span>
              <span>2</span>
            </li>

            <li style={{ display: "flex", alignItems: "center" }}>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="rgba(54, 25, 255, 0.63)"
                style={{ width: "8%", height: "8%", display: "inline-block" }}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span>Maximum</span>
              <span>2</span>
            </li>

            <li style={{ display: "flex", alignItems: "center" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="rgba(54, 25, 255, 0.63)"
                style={{ width: "8%", height: "8%", display: "inline-block" }}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Timings</span>
              <span>10 - 4:30Pm</span>
            </li>

            <li style={{ display: "flex", alignItems: "center" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="rgba(54, 25, 255, 0.63)"
                style={{ width: "8%", height: "8%", display: "inline-block" }}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Fee</span>
              <span>500 Rs</span>
            </li>
          </ul>

          <Guidelines split width="60%">
            <h4> General Guidelines: </h4>
            <ul>
              <li style={{ color: "white" }}>
                Each member of the team must carry ID card with photo from the
                respective University/ Institute / College into the event.
              </li>
              <li style={{ color: "white" }}>
                All are required to adhere to COVID guidelines.
              </li>
              <li style={{ color: "white" }}>
                Students should refrain from abusive language, obscene display
                and revealing costumes during the competitions, failing which
                they will be disqualified.
              </li>
              <li style={{ color: "white" }}>
                All the events will commence at the scheduled time; Punctuality
                will be appreciated.
              </li>

              <li style={{ color: "white" }}>
                Hit the download button to check out the rules for the event
              </li>
            </ul>
          </Guidelines>
          <div>
            <button
              onClick={async () => {
                axios({
                  url: "https://polar-woodland-86934.herokuapp.com/api/getFile/flf rules.docx", //your url
                  method: "GET",
                  responseType: "blob", // important
                }).then((response) => {
                  const url = window.URL.createObjectURL(
                    new Blob([response.data])
                  );
                  const link = document.createElement("a");
                  link.href = url;
                  link.setAttribute("download", "Fastest Line Followers Rules.docx"); //or any other extension
                  document.body.appendChild(link);
                  link.click();
                });
              }}
              class="ui Link"
              type="submit"
              style={{
                padding: "1.5rem 15rem",
                backgroundColor: "transparent",
                border: "1px solid white",
                color: "white",
                borderRadius: "0",
                letterSpacing: "2px",
                textTransform: "uppercase",
                fontWeight: "bold",
                cursor: "pointer"
              }}
            >
              Download
            </button>
          </div>
          <div
            style={{
              width: "40%",
              marginTop: "3rem",
              height: "6rem",
              border: "1px solid rgba(190, 92, 138, 1)",
              textAlign: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <span>Link to register</span>
              <a
                href="https://bit.ly/fastestlinefollower"
                style={{ fontSize: ".8rem" }}
              >
                https://bit.ly/fastestlinefollower
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        className="reveal-from-bottom"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          height: "15rem",
        }}
      >
        <Addons
          primaryColor="rgba(190, 92, 138, 0.62)"
          secondaryColor="rgba(54, 25, 255, 0.63)"
        >
          <h2
            className="mt-0 mb-16"
            style={{ textAlign: "center", transform: "skewX(12deg)" }}
          >
            Prizes
          </h2>
        </Addons>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "80%",
            marginTop: "2rem",
            height: "100%",
          }}
        >
          <div
            style={{
              borderRadius: "3px",
              width: "26%",
              height: "5rem",
              backgroundColor: "#5658DD",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ color: "white" }}>First Position</div>
            <span style={{ color: "white" }}>Amount: 3000 Rs</span>
          </div>
          <div
            style={{
              borderRadius: "3px",
              width: "26%",
              height: "5rem",
              backgroundColor: "#5658DD",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ color: "white" }}>Second Position</div>
            <span style={{ color: "white" }}>Amount: 2000 Rs</span>
          </div>
          <div
            style={{
              borderRadius: "3px",
              width: "26%",
              height: "5rem",
              backgroundColor: "#5658DD",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ color: "white" }}>Third Position</div>
            <span style={{ color: "white" }}>Amount: 1000 Rs</span>
          </div>
        </div>
      </section>
    </div>
  );
}
