import React from "react";
import { IgLogo, FbLogo } from "../../assets/svg";

function Footer() {
  return (
    <div className=" py-2 w-auto bg-opacity-100 bg-red-100 rounded-t-sm flex justify-center items-center border-t-2 border-zinc-400 border-opacity-80">
      <h2 className="text-center md:text-2xl m-auto ">
        &copy; 2022 Hearts Window Photography
      </h2>

      <div className="grid grid-cols-2 relative">
        <a
          href="https://www.facebook.com/heartswindowphotography"
          className="hover:fill-slate-800"
          target="_blank"
          rel="noreferrer"
        >
          <FbLogo width="36"></FbLogo>
        </a>
        <a
          href="https://www.instagram.com/hearts_window_photography/"
          className="mr-8 hover:fill-slate-800"
          target="_blank"
          rel="noreferrer"
        >
          <IgLogo width="36"></IgLogo>
        </a>
      </div>
    </div>
  );
}

export default Footer;
