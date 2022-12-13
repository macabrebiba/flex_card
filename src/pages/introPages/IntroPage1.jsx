/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Capture.PNG";
import Tle3 from "../../assets/Online payment_Flatline.svg";
import "./Intro.css";
const IntroPage1 = () => {
  return (
    <>
      <div className="max-w-screen-2xl px-4 md:px-8 -mt-16 mx-auto">
        <img src={Logo} style={{ position: "relative", top: "5.5" + "em" }} />
      </div>
      <div
        className="max-w-screen-2xl px-4 md:px-8 -mt-16 mx-auto"
        style={{ position: "relative", top: "9" + "em" }}
      >
        <img src={Tle3} />
        <h1
          style={{
            "text-shadow":
              "-1" +
              "px 0" +
              "px 0" +
              "px red 1" +
              "px 0" +
              "px 0" +
              "px red 0" +
              "px -1" +
              "px0" +
              "px red 0" +
              "px 1" +
              "px 0" +
              "px red",
            color: "blue",
            fontSize: "54" + "px",
            display: "flex",
            width: "100" + "%",
            justifyContent: "center",
          }}
        >
          Téléchargez !
        </h1>
        <div
          style={{
            width: "100" + "%",
            display: "flex",
            justifyContent: "center",
            marginTop: "20" + "%",
          }}
        >
          <Link className="svg" to="/intro2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="40"
            >
              <path d="M480 96c17.7 0 32 14.3 32 32s-14.3 32-32 32l-208 0 0-64 208 0zM320 288c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32s14.3-32 32-32h64zm64-64c0 17.7-14.3 32-32 32H304c-17.7 0-32-14.3-32-32s14.3-32 32-32h48c17.7 0 32 14.3 32 32zM288 384c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32s14.3-32 32-32h64zm-88-96l.6 0c-5.4 9.4-8.6 20.3-8.6 32c0 13.2 4 25.4 10.8 35.6C177.9 364.3 160 388.1 160 416c0 11.7 3.1 22.6 8.6 32H160C71.6 448 0 376.4 0 288l0-61.7c0-42.4 16.9-83.1 46.9-113.1l11.6-11.6C82.5 77.5 115.1 64 149 64l27 0c35.3 0 64 28.7 64 64v88c0 22.1-17.9 40-40 40s-40-17.9-40-40V160c0-8.8-7.2-16-16-16s-16 7.2-16 16v56c0 39.8 32.2 72 72 72z" />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
};

export default IntroPage1;
