import React from "react";
import { Link } from "react-router-dom";
import BottomNavigationComponent from "../component/BottomNavigationComponent";
import logo from "../assets/Capture.PNG";
const ProfilePage = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-2xl px-4 md:px-8 -mt-16 mx-auto">
        <img src={logo} />
        <form className="max-w-lg border rounded-lg mx-auto">
          <div className="flex flex-col gap-4 p-4 md:p-8">
            <div>
              <label
                for="Nom"
                className="inline-block flex flex-start text-gray-800 text-sm sm:text-base mb-2"
                style={{ fontWeight: "bold" }}
              >
                Nom et Prenom
              </label>
              <input
                name="Nom"
                className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                placeholder="Habiba Gaizi"
              />
            </div>

            <div>
              <label
                for="Email"
                className="inline-block text-gray-800 flex flex-start text-sm sm:text-base mb-2"
                style={{ fontWeight: "bold" }}
              >
                Email
              </label>
              <input
                name="Email"
                className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                placeholder="hiba.gaizi@gmail.com"
              />
            </div>

            <div>
              <label
                for="Telephone"
                className="inline-block text-gray-800 flex flex-start text-sm sm:text-base mb-2"
                style={{ fontWeight: "bold" }}
              >
                Telephone
              </label>
              <input
                name="Telephone"
                className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                placeholder="0672********"
              />
            </div>

            <div>
              <label
                for="Ville"
                className="inline-block text-gray-800 flex flex-start text-sm sm:text-base mb-2"
                style={{ fontWeight: "bold" }}
              >
                Ville
              </label>
              <input
                name="Ville"
                className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                placeholder="Rabat"
              />
            </div>

            <div>
              <label
                for="password"
                className="inline-block text-gray-800 flex flex-start text-sm sm:text-base mb-2"
                style={{ fontWeight: "bold" }}
              >
                Mot de passe
              </label>
              <input
                name="password"
                className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                placeholder="**********"
              />
            </div>

            <Link
              to="/sendmail"
              className="block bg-blue-600 hover:bg-blue-700 active:bg-blue-600 focus-visible:ring ring-blue-300 text-white text-sm md:text-base font-semibold text-center outline-none transition duration-100 px-8 py-3"
              style={{
                borderRadius: "120" + "px",
                height: "40" + "px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Changer
            </Link>

            <Link
              to="/home"
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
              Retour a l'acceuil
            </Link>
          </div>
        </form>
        <BottomNavigationComponent />
      </div>
    </div>
  );
};

export default ProfilePage;
