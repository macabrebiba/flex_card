import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Capture.PNG";
import SVG from "../assets/Online payment_Flatline.svg";
import "./index.css";
const VerificationCode = () => {
  return (
    <>
      <img src={Logo} />
      <div className="-mt-12">
        <img src={SVG} style={{ height: "240" + "px" }} />
        <div
          className="flex"
          style={{
            justifyContent: "center",
            width: "100" + "%",
            textAlign: "center",
          }}
        >
          <h3>Code de validation</h3>
        </div>
        <div
          className="flex"
          style={{
            justifyContent: "center",
            width: "100" + "%",
            textAlign: "center",
          }}
        >
          <input
            style={{
              border: "1" + "px solid gray",
              width: "350" + "px",
              height: "40" + "px",
              outline: "none",
              marginTop: "15" + "px",
            }}
            id="inputVerification"
            placeholder="   0 0 0 0 0 0 "
          />
        </div>
        <div
          className="flex mt-4"
          style={{
            marginTop:"7"+"px",
            justifyContent: "center",
            width: "79" + "%",
            textAlign: "center",
          }}
        >
          <h3 style={{fontSize:"14"+"px",fontWeight:"500"}}>Vous n'avez pas recu de code ? <span id="resend">R'envoyer</span></h3>
        </div>
      </div>
      <div
        className="flex flex-col gap-4 p-4 md:p-8"
        style={{ border: "none", position: "relative", top: "2" + "em" }}
      >
        <Link to="/home"
          className="block bg-blue-600 focus-visible:ring ring-blue-300 text-white text-sm md:text-base font-semibold text-center outline-none transition duration-100 px-8 py-3"
          style={{
            borderRadius: "120" + "px",
            height: "40" + "px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight:"bold"
          }}
        >
          Valider
        </Link>
        <Link
          to="/changeEmail"
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
          Changer Email
        </Link>
      </div>
    </>
  );
};

export default VerificationCode;