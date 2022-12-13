import React from "react";
import Navbar from "../component/Navbar";
import EwalletCard from "../component/EwalletCard";
import BottomNavigationComponent from "../component/BottomNavigationComponent";
import PlusButton from "../component/PlusButton";
import ActivityCard from "../component/ActivityCard";
const Ewallet = () => {
  return (
    <>
      <Navbar />
      <EwalletCard />
      <br />
      <div className="flex justify-start">
        <h1
          style={{
            color: "black",
            position: "relative",
            left: "8" + "%",
            top: "15" + "px",
            fontWeight: "bold",
          }}
        >
          Activité
        </h1>
      </div>
      <ActivityCard />
      <ActivityCard />
      <ActivityCard />
          <PlusButton />
      <BottomNavigationComponent />
    </>
  );
};

export default Ewallet;
