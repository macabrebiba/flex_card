import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Capture.PNG";
import SVG from "../assets/Online payment_Flatline.svg";
const SendEmail = () => {
  return (
    <>
      <img src={Logo} />
      <div className="-mt-12">
        <img src={SVG} />
        <div
          className="flex"
          style={{
            justifyContent: "center",
            width: "100" + "%",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              fontSize: "18" + "px",
              fontWeight: "500",
              padding: "13" + "px",
            }}
          >
            Nous enverrons un code de vérification a votre adresse e-mail
          </h3>
        </div>
        <div
          className="flex"
          style={{
            justifyContent: "center",
            width: "100" + "%",
            textAlign: "center",
          }}
        >
          <h3>Habibagaizi@gmail.com</h3>
        </div>
      </div>
      <div
        className="flex flex-col gap-4 p-4 md:p-8"
        style={{ border: "none", position: "relative", top: "2" + "em" }}
      >
        <Link to="/verify"
          className="block bg-blue-500 active:bg-blue-600 focus-visible:ring ring-blue-300 text-white text-sm md:text-base font-semibold text-center outline-none transition duration-100 px-8 py-3"
          style={{
            borderRadius: "120" + "px",
            height: "40" + "px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Envoyer
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

export default SendEmail;
