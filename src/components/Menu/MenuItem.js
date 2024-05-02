import React from "react";
import { Link } from "react-router-dom";

const MenuItem = ({ linkTo, logoSrc, text }) => {
  return (
    <Link to={linkTo} className="flex gap-3 items-center p-3 hover:bg-softBg">
      <img src={logoSrc} alt={`${logoSrc}-icon`}></img>
      <span>{text}</span>
    </Link>
  );
};

export default MenuItem;
