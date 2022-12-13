/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import BottomNavigationComponent from "../component/BottomNavigationComponent";
import Navbar from "../component/Navbar";
import tram from "../assets/tram.jpg";
import train from "../assets/train.jpg";
import bus from "../assets/bus.jpeg";
import "./index.css";
import { Link } from "react-router-dom";
const data = [
  {
    image: tram,
    title: "Tram",
    id: "tram",
  },
  {
    image: bus,
    title: "Bus",
  },
  {
    image: train,
    title: "Train",
  },
];
const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <h2
            className="text-gray-800 lg:text-3xl text-center mb-8 md:mb-12 flex flex-start"
            style={{ fontWeight: "700" }}
          >
            Choisissiez votre Moyen de transport
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
                    style={{ height: "190" + "px" }}
                  >
                    <Link to="/scan">
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
                        width: "30" + "%",
                        top: "10" + "px",
                      }}
                      id={e.id}
                    >
                      <span className="text-gray-900 font-bold align-center">
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

export default HomePage;
