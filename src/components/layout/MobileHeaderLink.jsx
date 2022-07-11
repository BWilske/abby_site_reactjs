import React from "react";
import { Link } from "react-router-dom";

function MobileHeaderLink({ data }) {
  const { target, title } = data;
  return (
    <Link
      to={target}
      className=" flex xl:text-4xl lg:text-3xl text-4xl items-center justify-center min-w-full py-8"
      //    border-y-2 border-black
    >
      {title}
    </Link>
  );
}

export default MobileHeaderLink;
