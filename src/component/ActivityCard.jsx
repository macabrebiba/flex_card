import React from "react";
import Bus from "../assets/bus.svg";
import "./index.css";
const ActivityCard = () => {
  return (
    <div
      className="activityCard flex"
      style={{ marginBottom: "20" + "px", height: "90" + "px" }}
    >
      <img
        src={Bus}
        width="50"
        height="30"
        style={{ position: "relative", right: "40" + "%" }}
      />
      <h1 className="title">Traject Bus</h1>

      <h2 className="price">- 5.00 DH</h2>

      <h1 className="points-plus">+5 pts</h1>
    </div>
  );
};

export default ActivityCard;
