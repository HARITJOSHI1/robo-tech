import React, { useRef } from "react";
import Guidelines from "../components/sections/Guidelines";
import { Link } from "react-router-dom";
import "./Esports.css";

export default function Esports() {
  const ref = useRef();
  return (
    <div className="site-content reveal-from-bottom">
      <section style={{ width: "100%", height: "100vh" }}>
        <div
          id="bg-video"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            height: "88vh",
            width: "100%",
            overflow: "hidden",
            zIndex: "-1",
            opacity: "0.27",
          }}
        >
          <video
            style={{ height: "100vh", width: "100%", objectFit: "cover" }}
            autoPlay
            muted
            loop
          >
            <source
              src={require("../assets/images/Gaming.mp4")}
              required
              type="video/mp4"
            />
          </video>
        </div>

        <div
          style={{
            display: "inline-block",
            position: "relative",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <h1
            className="mt-0 mb-16 eneon"
            data-reveal-delay="200"
            style={{
              fontSize: "5.5rem",
              fontWeight: "bold",
              textTransform: "uppercase",
              fontFamily: "Bebas Neue, cursive",
              marginBottom: "2rem",
            }}
          >
            Exposition Tournament
          </h1>

          <h3 className="eneon-3">Unleash the beast</h3>
        </div>

        <svg
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
        </svg>
      </section>

      <section ref={ref} style={{ width: "100%", height: "100vh" }}>
        <div
          className="reveal-from-bottom"
          style={{
            marginTop: "2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <div
              className="reveal-from-bottom"
              style={{
                marginLeft: "4rem",
                width: "45%",
              }}
            >
              <h1
                className="mt-0 mb-16"
                data-reveal-delay="200"
                style={{
                  fontSize: "2.3rem",
                  fontWeight: "bold",
                }}
              >
                What is{" "}
                <span className="text-color-primary">
                  Exposition Tournament?
                </span>
              </h1>

              <p style={{ textAlign: "justify" }}>
                Primordial E&G is an eSports organisation of Inderprastha
                Engineering College, responsible for managing and developing
                eSports tournaments and gaming in our college, with our focus on
                educating others about gaming and its dynamics. We would be
                conducting seminars on content creation, strategy development,
                tips and tricks, game development, eSports events and many more
                such activities.
              </p>
            </div>
            <div style={{ width: "30%", height: "100%" }}>
              <img src={require("../assets/images/es-hi.png")} alt="Hi" />
            </div>
          </div>

          <div
            style={{
              marginTop: "-3rem",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <div style={{ width: "30%", height: "100%" }}>
              <img src={require("../assets/images/tournament.png")} alt="Hi" />
            </div>

            <div
              className="reveal-from-bottom"
              style={{ marginRight: "4rem", width: "45%" }}
            >
              <h1
                className="mt-0 mb-16"
                data-reveal-delay="200"
                style={{
                  fontSize: "2.3rem",
                  fontWeight: "bold",
                }}
              >
                About the <span className="text-color-primary">Tournament</span>
              </h1>

              <p style={{ textAlign: "justify" }}>
                It is an Inter College{" "}
                <span style={{ fontWeight: "bold" }}>Valorant</span> Tournament,
                "EXPOSITION TOURNAMENT", in which 12 teams will battle it out in
                a single map and single-elimination format matches. Each team
                will have 5 players, this sums up to a total of 60 players
                participating in the event. This event will start on 25th
                October while the finale will be on 30th October.
              </p>
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
          paddingTop: "5rem",
        }}
      >
        <h1
          className="mt-0 mb-16"
          data-reveal-delay="200"
          style={{
            fontSize: "4.3rem",
            fontWeight: "bold",
          }}
        >
          TEA<span className="text-color-primary">SER</span>
        </h1>
        <iframe
          width="750"
          height="500"
          src="https://www.youtube.com/embed/VU3eHFfH1NQ"
          title="YouTube video player"
          frameborder="0"
          style={{ marginTop: "2rem" }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <Guidelines split width="74%">
          <h4> Game Rules for this tournament: </h4>
          <ul>
            <li style={{ color: "white",  fontSize: '.8rem'}}>
              Each team must at least have a min. of 5 players and a max. of 6
              players which mean 1 substitute.
            </li>
            <li style={{ color: "white",  fontSize: '.8rem'}}>
              Once the tournament has started, you cannot replace any players.
            </li>
            <li style={{ color: "white",  fontSize: '.8rem'}}>
              A substitute player may only be added before the tournament
              starts. This player cannot be part of any other team’s roster
              which is participating or has participated in the same tournament.
            </li>
            <li style={{ color: "white",  fontSize: '.8rem'}}>
              Using a player not in the roster would be disqualified immediately
              as that is considered as cheating.
            </li>

            <li style={{ color: "white",  fontSize: '.8rem'}}>
              Match has to be played in the following format: 5v5.
            </li>

            <li style={{ color: "white",  fontSize: '.8rem'}}>
              A player is allowed to represent only one (1) team’s roster in the
              same tournament
            </li>

            <li style={{ color: "white",  fontSize: '.8rem'}}>
              Every player of the team must join the discord server of
              Primordial E&G Club i.e.{" "}
              <a
                href="https://discord.gg/sefZRhacnh"
                style={{ color: "#121921" }}
              >
                https://discord.gg/sefZRhacnh
              </a>
            </li>

            <li style={{ color: "white",  fontSize: '.8rem'}}>
              For more information hit on the download button below.
            </li>

            <li style={{ color: "white",  fontSize: '.8rem'}}>
              Link for the youtube channel {" "}
              <a
                href="https://www.youtube.com/channel/UCL7D02OxBFphu0sqSIVYUHA"
                style={{ color: "#121921" }}
              >
                hhttps://www.youtube.com/channel/UCL7D02OxBFphu0sqSIVYUHA
              </a>
            </li>

            <li style={{ color: "white",  fontSize: '.8rem'}}>
              Total Prize Pool of the tournament is 6000 INR Winner: 3000INR
              Runner Up: 2000 INR 3rd : 1000INR
            </li>
          </ul>
        </Guidelines>
        <div>
          <Link
            to="../assets/Tournament Rules.docx"
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
            }}
            target="_blank"
            download
          >
            Download
          </Link>
        </div>
      </section>
    </div>
  );
}

/* 

<section
        className="reveal-from-bottom"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          paddingTop: "4rem",
        }}
      >
        <h1
          className="mt-0 mb-16"
          data-reveal-delay="200"
          style={{
            fontSize: "2.3rem",
            fontWeight: "bold",
          }}
        >
          Hook yourself <span className="text-color-primary">UP</span>
        </h1>
        <div style={{ width: "80%", fontSize: ".5rem", margin: "3rem auto" }}>
          <form className="ui container form form-cont">
            <div className=" three fields">
              <div className="field">
                <label>First name</label>
                <input required type="text" placeholder="First Name" />
              </div>
              <div className="field">
                <label>Last name</label>
                <input required type="text" placeholder="Last Name" />
              </div>

              <div className="field">
                <label>Email</label>
                <input required type="email" placeholder="Email" />
              </div>
            </div>

            <div class="field">
              <label>Address</label>
              <div class="fields">
                <div class="twelve wide field">
                  <input
                    type="text"
                    name="shipping[address]"
                    placeholder="Street Address"
                  />
                </div>
                <div class="four wide field">
                  <input
                    type="text"
                    name="shipping[address-2]"
                    placeholder="Pin number"
                  />
                </div>
              </div>
            </div>

            <div className=" two fields">
              <div className="field">
                <label>State</label>
                <input required type="text" placeholder="State" />
              </div>
              <div className="field">
                <label>Team Leader 's p.no.</label>
                <input required type="text" placeholder="Phone number" />
              </div>
            </div>

            <div className=" three fields">
              <div class="field">
                <label>Only for leader</label>
                <input type="text" name="first-name" placeholder="Name" />
              </div>

              <div class="field">
                <label>ID</label>
                <input type="text" name="first-name" placeholder="Id" />
              </div>

              <div class="field">
                <label>Email</label>
                <input type="text" name="Email" placeholder="Email" />
              </div>
            </div>
            <div>
              <button
                class="ui button"
                type="submit"
                style={{
                  marginLeft: "10rem",
                  marginTop: "2rem",
                  padding: "1.5rem 15rem",
                  paddingBottom: "2.5rem",
                  backgroundColor: "transparent",
                  border: "1px solid white",
                  color: "white",
                  borderRadius: "0",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

*/
