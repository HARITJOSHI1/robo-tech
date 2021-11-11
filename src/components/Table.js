import React from "react";

export default function Table() {
  return (
    <div className="site-content" style={{ width: "78%", margin: "4rem auto" }}>
      <table class="ui selectable inverted table" style={{  borderRadius: "0" }}>
        <thead style={{ backgroundColor: "#f5385b" }}>
          <tr>
            <th>Events</th>
            <th>Date</th>
            <th>Timings</th>
            <th>Team Size</th>
            <th>Cash Prize (in Rs)</th>
          </tr>
        </thead>
        <tbody style={{ fontSize: ".9rem" }}>
          <tr>
            <td>Fastline Followers</td>
            <td>15th November</td>
            <td>10AM-4PM</td>
            <td>2-4</td>
            <td>1st = 3000, 2nd = 2000, 3rd = 1000</td>
          </tr>
          <tr>
            <td>Hackathon</td>
            <td>15th November</td>
            <td>10AM-4PM</td>
            <td>2-4</td>
            <td>1st = 3000, 2nd = 2000, 3rd = 1000</td>
          </tr>
          <tr>
            <td>Water Rocket</td>
            <td>15th November</td>
            <td>10AM-4PM</td>
            <td>2-4</td>
            <td>1st = 3000, 2nd = 2000, 3rd = 1000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
