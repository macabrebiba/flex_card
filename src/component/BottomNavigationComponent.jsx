import React from "react";
import { Link } from "react-router-dom";
import LogoSvg from "../assets/Capture.svg";
import "./index.css";
const bottomNavigationComponent = () => {
  return (
    <div
      style={{
        width: "90" + "%",
        height: "70" + "px",
        border: "1" + "px solid gray",
        bottom: "1" + "%",
        marginLeft: "5" + "%",
        boxShadow: "0" + "px 2" + "px 10" + "px #888888",
        position: "relative",
      }}
      className="mt-8 flex absolute justify-center"
    >
      <div
        style={{
          position: "absolute",
          bottom: "45" + "%",

          left: "11" + "%",
          transform: "translate(" + "-50" + "%, 50" + "%)",
        }}
      >
        <Link to="/home">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            width="25"
          >
            <path
              className="path"
              d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
            />
          </svg>
          <div style={{ height: "9" + "px" }}>
            <h4
              style={{
                fontSize: "9" + "px",
                fontWeight: "bold",
                marginLeft: "2" + "px",
              }}
            >
              home
            </h4>
          </div>
        </Link>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "45" + "%",

          left: "27" + "%",
          transform: "translate(" + "-50" + "%, 50" + "%)",
        }}
      >
        <Link to="/wallet">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="25"
            style={{ position: "relative", left: "5" + "px" }}
          >
            <path
              className="path"
              d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H80c-8.8 0-16-7.2-16-16s7.2-16 16-16H448c17.7 0 32-14.3 32-32s-14.3-32-32-32H64zM416 336c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z"
            />
          </svg>
        </Link>
        <div style={{ height: "10" + "px" }}>
          <h4
            style={{
              fontSize: "9" + "px",
              fontWeight: "bold",
              marginLeft: "2" + "px",
            }}
          >
            E-Wallet
          </h4>
        </div>
      </div>
      <img
        src={LogoSvg}
        fill="blue"
        class="saturate"
        style={{
          width: "110" + "px",
          left: "0" + "px",
          bottom: "-4" + "px",
          position: "relative",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "45" + "%",

          left: "72" + "%",
          transform: "translate(" + "-50" + "%, 50" + "%)",
        }}
      >
        <Link to="/subscription">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            width="25"
            style={{ position: "relative", left: "12" + "px" }}
          >
            <path
              className="path"
              d="M156.8 126.8c37.6 60.6 64.2 113.1 84.3 162.5-8.3 33.8-18.8 66.5-31.3 98.3-13.2-52.3-26.5-101.3-56-148.5 6.5-36.4 2.3-73.6 3-112.3zM109.3 200H16.1c-6.5 0-10.5 7.5-6.5 12.7C51.8 267 81.3 330.5 101.3 400h103.5c-16.2-69.7-38.7-133.7-82.5-193.5-3-4-8-6.5-13-6.5zm47.8-88c68.5 108 130 234.5 138.2 368H409c-12-138-68.4-265-143.2-368H157.1zm251.8-68.5c-1.8-6.8-8.2-11.5-15.2-11.5h-88.3c-5.3 0-9 5-7.8 10.3 13.2 46.5 22.3 95.5 26.5 146 48.2 86.2 79.7 178.3 90.6 270.8 15.8-60.5 25.3-133.5 25.3-203 0-73.6-12.1-145.1-31.1-212.6z"
            />
          </svg>
          <div style={{ height: "14" + "px" }}>
            <h4
              style={{
                fontSize: "9" + "px",
                fontWeight: "bold",
                marginLeft: "2" + "px",
              }}
            >
              Abonnement
            </h4>
          </div>
        </Link>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "45" + "%",

          left: "90" + "%",
          transform: "translate(" + "-50" + "%, 50" + "%)",
        }}
      >
        <Link to="/profile">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            width="25"
          >
            <path
              className="path"
              d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
            />
          </svg>
          <h4
            style={{
              fontSize: "9" + "px",
              fontWeight: "bold",
              marginLeft: "2" + "px",
            }}
          >
            Profile
          </h4>
        </Link>
      </div>
    </div>
  );
};

export default bottomNavigationComponent;
