import React from "react";
import { Link, Router } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="bg-red-50 shadow-xl  font-sans md:flex md:items-center ">
        <div className=" m-auto flex">
          <Link to="/">
            <h1 className=" m-auto text-3xl text-center py-8">
              Hearts Window Photgraphy
            </h1>
          </Link>

          <div className="space-y-2 md:hidden p-2 ml-auto ">
            <span className="block w-8 h-0.5 bg-gray-600"></span>
            <span className="block w-8 h-0.5 bg-gray-600"></span>
            <span className="block w-5 h-0.5 bg-gray-600"></span>
          </div>
        </div>
        <Link
          to="/gallery_directory"
          className="  xl:w-64  w-40 btn-lg btn-primary bg-emerald-800 ml-auto rounded-lg hidden md:flex items-center justify-center "
        >
          Work
        </Link>

        <Link
          to="/about"
          className=" xl:w-64  w-40 btn-lg btn-primary bg-emerald-800 text-lg ml-8  rounded-lg hidden md:flex items-center justify-center"
        >
          About
        </Link>
        <Link
          to="/contact"
          className=" shadow-md  xl:w-64 w-40 btn-lg btn-primary bg-emerald-800 text-lg ml-8 mr-8 rounded-lg hidden md:flex items-center justify-center  "
        >
          Contact
        </Link>
      </header>
    </>
  );
}

export default Header;
