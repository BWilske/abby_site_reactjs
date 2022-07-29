import React from "react";
import { Link } from "react-router-dom";

function MobileHeaderLink({ data }) {
  const { target, title } = data;
  return (
    <Link
      to={target}
      className=" flex items-center justify-center min-w-full py-4 border-y-2 border-slate-400 border-opacity-20 text-4xl "
      //    border-y-2 border-black
    >
      {title}
    </Link>
  );
}

export default MobileHeaderLink;
