import React from "react";
import { Link } from "react-router-dom";

function HeaderLink({ data }) {
  const { target, title } = data;
  return (
    <Link
      to={target}
      className=" flex xl:text-4xl lg:text-3xl text-4xl items-center justify-center px-auto"
    >
      {title}
    </Link>
  );
}

export default HeaderLink;
