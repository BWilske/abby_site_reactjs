import React from "react";
import { IgLogo, FbLogo } from "../../assets/svg";

function Footer() {
  return (
    <div className=" py-2 w-auto bg-opacity-100 bg-red-100 rounded-t-sm flex justify-center items-center border-t-2 border-zinc-400 border-opacity-80">
      <h2 className="text-center md:text-2xl ml-auto ">
        &copy; 2022 Hearts Window Photography
      </h2>

      <div className="gap-6 flex ml-auto">
        <a href="https://www.facebook.com/heartswindowphotography">
          <FbLogo width="36"></FbLogo>
        </a>
        <a
          href="https://www.instagram.com/hearts_window_photography/"
          className="mr-8"
        >
          <IgLogo width="36"></IgLogo>
        </a>
      </div>
    </div>
  );
}

export default Footer;
