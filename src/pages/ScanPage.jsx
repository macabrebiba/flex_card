/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import BottomNavigationComponent from "../component/BottomNavigationComponent";
import { Link } from "react-router-dom";
import Scan from "../assets/QR code_Two Color.svg";

const ScanPage = () => {
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
          QR Scanner
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
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div
          className="max-w-screen-2xl px-4 md:px-8 mx-auto"
          style={{ marginTop: "5" + "em" }}
        >
          <img src={Scan} />
          <h2
            className="text-gray-800 lg:text-2xl text-center mb-8 md:mb-12 flex flex-start"
            style={{
              fontWeight: "400",
              fontSize: "15" + "px",
              textAlign: "center",
              position: "relative",
              left: "10" + "px",
            }}
          >
            Scannez le code QR pour payer et gagner 5 points.
          </h2>
          <Link
            to=""
            className="block bg-blue-600 hover:bg-blue-700 active:bg-blue-600 focus-visible:ring ring-blue-300 text-white text-sm md:text-base font-semibold text-center outline-none transition duration-100 px-8 py-3"
            style={{
              borderRadius: "120" + "px",
              height: "40" + "px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Ouvrir votre camera
          </Link>
        </div>
        <div style={{ position: "relative", top: "10" + "em" }}>
          {" "}
          <BottomNavigationComponent />
        </div>
      </div>
    </>
  );
};

export default ScanPage;
