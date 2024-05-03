import React from "react";
import { Link } from "react-router-dom";

const MenuItem = ({ linkTo, logoSrc, text }) => {
  return (
    <Link
      to={linkTo}
      className="flex gap-3 items-center p-2 lg:p-3 hover:bg-softBg mb-3 lg:mb-0"
    >
      <img
        src={logoSrc}
        alt={`${logoSrc}-icon`}
        className="w-6 mx-auto lg:m-0"
      ></img>
      <span className="hidden lg:flex">{text}</span>
      <br className="lg:hidden"></br>
    </Link>
  );
};

export default MenuItem;
