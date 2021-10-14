import React from "react";
import Table from "../components/Table";
import { Link } from "react-router-dom";

export default function Gist() {
  return (
    <div className="site-content reveal-from-bottom">
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "7rem" }}
      >
        <div
          style={{
            width: "30%",
          }}
        >
          <h1 className="text-color-primary">Summary</h1>
          <p style= {{textAlign: "justify"}}>
            This is a short summary regarding the events that 's gonna happend
            on 29th - 30th october. This is for to give you a quick insights. If
            you want to see a deatil report you can download the brochure.
          </p>

          <ul className="list-reset header-nav-right">
            <li style={{marginTop: '3rem'}}>
              <Link
                style={{ width: "100%"}}
                to="../assets/Robotech Brochure.pdf"
                className="button button-primary button-wide-mobile button-sm register"
                target="_blank"
                download
              >
                Download
              </Link>
            </li>
          </ul>
        </div>

        <div
          style={{
            width: "35%",
            position: "relative",
            left: "4rem",
          }}
        >
          <img src={require("../assets/images/summary.png")} alt="Summary" />
        </div>
      </div>
      <Table />
    </div>
  );
}
