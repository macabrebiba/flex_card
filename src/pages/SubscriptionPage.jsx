/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import BottomNavigationComponent from "../component/BottomNavigationComponent";
import tram from "../assets/tram.jpg";
import train from "../assets/train.jpg";
import bus from "../assets/bus.jpeg";
import "./index.css";
import { Link } from "react-router-dom";

const data = [
  {
    image: tram,
    title: "Tram Abonnement",
    id: "tram",
    destination: "/subscription-tram",
    prix: "",
  },
  {
    image: bus,
    title: "Bus Abonnement",
  },
  {
    image: train,
    title: "Train Abonnement",
  },
];
const SubscriptionPage = () => {
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
          Abonnement
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
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <h2
            className="text-gray-800 lg:text-3xl text-center mb-8 md:mb-12 flex flex-start"
            style={{ fontWeight: "700" }}
          >
            Choisissiez votre Abonnement mentuelle
          </h2>
          <div
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
            style={{ marginTop: "-25" + "px" }}
          >
            {data.map((e) => {
              return (
                <div>
                  <a
                    href="#"
                    className="group flex items-end bg-gray-100 rounded-lg overflow-hidden shadow-lg relative p-4"
                    style={{ height: "190" + "px"}}
                  >
                    <Link to={e.destination}>
                      <img
                        src={e.image}
                        loading="lazy"
                        alt="Photo by Austin Wade"
                        className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                        id="image"
                        style={{
                          background:
                            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 1))",
                        }}
                      />
                    </Link>
                    <div
                      className="w-full flex flex-col align-center justify-center bg-white text-center rounded-lg relative p-4"
                      style={{
                        height: "40px",
                        width: "60" + "%",
                        top: "10" + "px",
                      }}
                      id={e.id}
                    >
                      <span
                        className="text-gray-900 font-bold align-center"
                        style={{ fontSize: "15" + "px" }}
                      >
                        {e.title}
                      </span>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
        <BottomNavigationComponent />
      </div>
    </>
  );
};

export default SubscriptionPage;
