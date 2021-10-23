import React from "react";
import axios from "axios";
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
          <p style={{ textAlign: "justify" }}>
            This is a short summary regarding the events that 's gonna happend
            on 29th - 30th october. This is for to give you a quick insights. If
            you want to see a deatil report you can download the brochure.
          </p>

          <ul className="list-reset header-nav-right">
            <li style={{ marginTop: "3rem" }}>
              <button
                onClick={async () => {
                  axios({
                    url: "https://polar-woodland-86934.herokuapp.com/api/getFile/Robotech Brochure.pdf", //your url
                    method: "GET",
                    responseType: "blob", // important
                  }).then((response) => {
                    const url = window.URL.createObjectURL(
                      new Blob([response.data])
                    );
                    const link = document.createElement("a");
                    link.href = url;
                    link.setAttribute("download", "Robotech Brochure.pdf"); //or any other extension
                    document.body.appendChild(link);
                    link.click();
                  });
                }}
                style={{ width: "100%" }}
                className="button button-primary button-wide-mobile button-sm register"
              >
                Download
              </button>
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
