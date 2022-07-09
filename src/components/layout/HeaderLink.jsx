import React from "react";
import { Link } from "react-router-dom";

function HeaderLink({ data }) {
  const { target, title } = data;
  return (
    <Link
      to={target}
<<<<<<< HEAD
      className=" xl:text-4xl lg:text-3xl md:text-lg hidden md:flex items-center justify-center"
=======
      className=" xl:text-4xl lg:text-3xl md:text-lg text-4xl md:flex items-center justify-center"
>>>>>>> refactor
    >
      {title}
    </Link>
  );
}

export default HeaderLink;
