import React from "react";
import { Link } from "react-router-dom";
import HeaderLink from "./HeaderLink";

function Header() {
  return (
    <>
      <header className="bg-opacity-100 bg-red-100 shadow-xl  md:flex md:items-center font-typewriter ">
        <div className=" m-auto flex">
          <Link to="/">
            <h1 className=" m-auto xl:text-5xl lg:text-4xl md:text-3xl text-center py-8">
              Hearts Window Photgraphy
            </h1>
          </Link>

          <div className="space-y-2 md:hidden p-2 ml-auto ">
            <span className="block w-8 h-0.5 bg-gray-600"></span>
            <span className="block w-8 h-0.5 bg-gray-600"></span>
            <span className="block w-5 h-0.5 bg-gray-600"></span>
          </div>
        </div>
        <div className="flex lg:gap-16 md:gap-8 xl:mr-16 lg:mr-12 md:mr-8 sm:mr-0">
          <HeaderLink
            data={{ target: "/gallery_directory", title: "Work" }}
          ></HeaderLink>
          <HeaderLink data={{ target: "/about", title: "About" }}></HeaderLink>
          <HeaderLink
            data={{ target: "/contact", title: "Contact" }}
          ></HeaderLink>
        </div>
      </header>
    </>
  );
}

export default Header;
