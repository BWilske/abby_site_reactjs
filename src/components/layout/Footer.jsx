import React from "react";

function Footer() {
  return (
    <div className=" mt-8 py-4 w-auto bg-red-50 rounded-t-sm shadow-inner flex justify-center items-center   ">
      <h2 className="text-center md:text-2xl ml-auto ">
        &copy; 2022 Hearts Window Photography
      </h2>

      <div className="gap-6 flex ml-auto">
        <a href="https://www.facebook.com/heartswindowphotography">
          <i className="fa-brands fa-facebook-square fa-2xl shadow-xl"></i>
        </a>
        <a href="https://www.instagram.com/hearts_window_photography/">
          {" "}
          <i className="fa-brands fa-instagram-square fa-2xl  mr-8 "></i>
        </a>
      </div>
    </div>
  );
}

export default Footer;
