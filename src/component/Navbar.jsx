import React from "react";
import "./index.css";
const Navbar = () => {
  return (
    <>
      <div
        className="bg-white flex justify-center align-center w-full"
        style={{ height: "4" + "em", alignItems: "center" }}
      >
        <h1
          className="font-Arial"
          style={{
            fontSize: "21" + "px",
            fontWeight: "bold",
            color: "green",
          }}
        >
          Acceuil
        </h1>
        <br />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          width="25"
          style={{ position: "absolute", left: "82" + "%", top: "0" + "em" }}
        >
          <path d="M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z" />
        </svg>
      </div>
      <div
        style={{ background: "gray", width: "100" + "%", height: "1" + "px" }}
      ></div>
    </>
  );
};

export default Navbar;
