import React from "react";
import { Link } from "react-router-dom";
import HeaderLink from "./HeaderLink";
import MobileHeaderLink from "./MobileHeaderLink";
import { useState } from "react";

function Header() {
  const [menuOpen, setmenuOpen] = useState(false);
  return (
    <>
      <header className="bg-opacity-100 bg-red-100 shadow-xl  flex justify-between font-typewriter z-10 border-y-2 border-zinc-400 border-opacity-80  lg:px-16  ">
        <div className="flex m-auto lg:m-0">
          <Link to="/">
            <h1 className="xl:text-5xl md:text-4xl text-2xl py-6 ">
              Hearts Window Photgraphy
            </h1>
          </Link>

          <div
            className=" absolute top-1 right-1 space-y-2 z-20 lg:hidden md:top-1 md:right-1 ring-2 rounded-sm ring-slate-800 p-1"
            onClick={() => {
              if (menuOpen) {
                setmenuOpen(false);
              } else {
                setmenuOpen(true);
              }
            }}
          >
            <span className="block w-6 h-0.5 bg-slate-900 px-2"></span>
            <span className="block w-6 h-0.5 bg-slate-900 px-2"></span>
            <span className="block w-6 h-0.5 bg-slate-900 px-2"></span>
          </div>

          {menuOpen && (
            <div className=" py-4 w-full absolute top-0 right-0 bg-primary min-h-fit flex flex-col gap-4 items-center z-10 text-5xl lg:hidden">
              <MobileHeaderLink
                data={{ target: "/gallery_directory", title: "Work" }}
              ></MobileHeaderLink>

              <MobileHeaderLink
                data={{ target: "/about", title: "About" }}
              ></MobileHeaderLink>
              <MobileHeaderLink
                data={{ target: "/contact", title: "Contact" }}
              ></MobileHeaderLink>
            </div>
          )}
        </div>
        <div className="hidden lg:flex xl:gap-12  lg:gap-8  mr-0">
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
