import React from "react";
import { Link } from "react-router-dom";
import HeaderLink from "./HeaderLink";
import { useState } from "react";

function Header() {
  const [menuOpen, setmenuOpen] = useState(false);
  return (
    <>
      <header className="bg-opacity-100 bg-red-100 shadow-xl  flex items-center font-typewriter z-10 border-y-2 border-zinc-400 ">
        <div className=" m-auto flex">
          <Link to="/">
            <h1 className=" m-auto xl:text-5xl lg:text-4xl text-3xl  text-center py-8">
              Hearts Window Photgraphy
            </h1>
          </Link>

          <div
            className="space-y-2 md:hidden block p-2 ml-auto z-20 "
            onClick={() => {
              if (menuOpen) {
                setmenuOpen(false);
              } else {
                setmenuOpen(true);
              }
            }}
          >
            <span className="block w-8 h-0.5 bg-gray-600"></span>
            <span className="block w-8 h-0.5 bg-gray-600"></span>
            <span className="block w-5 h-0.5 bg-gray-600"></span>
          </div>

          {menuOpen && (
            <div className=" py-12 min-w-full bg-emerald-100 min-h-96 flex flex-col md:hidden gap-12 items-center fixed z-10 text-3xl">
              <HeaderLink
                data={{ target: "/gallery_directory", title: "Work" }}
              ></HeaderLink>
              <HeaderLink
                data={{ target: "/about", title: "About" }}
              ></HeaderLink>
              <HeaderLink
                data={{ target: "/contact", title: "Contact" }}
              ></HeaderLink>
            </div>
          )}
        </div>
        <div className="hidden md:flex lg:gap-16 md:gap-8 xl:mr-16 lg:mr-12 md:mr-8 mr-0">
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
