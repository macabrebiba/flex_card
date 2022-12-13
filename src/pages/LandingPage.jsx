/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Capture.PNG";
import bus from "../assets/start.svg";
const LandingPage = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-2xl px-4 md:px-8 -mt-12 mx-auto">
        <img src={logo} style={{ position: "relative", top: "3" + "em" }} />
        <img src={bus} style={{ position: "relative", top: "4" + "em" }} />
        <div
          className="flex flex-col gap-4 p-4 md:p-8"
          style={{ border: "none", position: "relative", top: "6" + "em" }}
        >
          <Link
            to="/register"
            className="block bg-blue-600 hover:bg-blue-700 active:bg-blue-600 focus-visible:ring ring-blue-300 text-white text-sm md:text-base font-semibold text-center outline-none transition duration-100 px-8 py-3"
            style={{
              borderRadius: "120" + "px",
              height: "40" + "px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            S'inscrire
          </Link>
          <Link
            to="/login"
            className="block bg-white hover:bg-gray-700 border-blue-600 active:bg-blue-600 focus-visible:ring ring-blue-300 text-white text-sm md:text-base font-semibold text-center outline-none transition duration-100 px-8 py-3"
            style={{
              borderRadius: "120" + "px",
              height: "40" + "px",
              border: "3px solid rgb(37 99 235)",
              color: "rgb(37 99 235)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Se connecter
          </Link>
          <Link
            to="/intro1"
            className="block bg-white hover:bg-gray-700 border-blue-600 active:bg-blue-600 focus-visible:ring ring-blue-300 text-white text-sm md:text-base font-semibold text-center outline-none transition duration-100 px-8 py-3"
            style={{
              borderRadius: "120" + "px",
              height: "40" + "px",
              border: "3px solid rgb(37 99 235)",
              color: "rgb(37 99 235)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
