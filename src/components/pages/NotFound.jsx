import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <Link to="/" className="items-center mx-auto flex flex-col">
      <h1 className="font-typewriter text-8xl my-8">OOPS...</h1>
      <h3 className="font-typewriter text-5xl my-8">
        You found yourself somewhere we didnt intend
      </h3>
      <h3 className="font-typewriter text-5xl my-8">
        Click here to return Home
      </h3>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        width="200"
        height="133"
      >
        {" "}
        {/*Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
        <path d="M119.4 44.1C142.7 40.22 166.2 42.2 187.1 49.43L237.8 126.9L162.3 202.3C160.8 203.9 159.1 205.1 160 208.2C160 210.3 160.1 212.4 162.6 213.9L274.6 317.9C277.5 320.6 281.1 320.7 285.1 318.2C288.2 315.6 288.9 311.2 286.8 307.8L226.4 209.7L317.1 134.1C319.7 131.1 320.7 128.5 319.5 125.3L296.8 61.74C325.4 45.03 359.2 38.53 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.09V44.1z" />
      </svg>
    </Link>
  );
}

export default NotFound;
