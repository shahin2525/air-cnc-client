import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";

const Logo = () => {
  return (
    <Link to="/">
      <img
        height={"100"}
        width={"100"}
        className="hidden md:block"
        src={logo}
        alt="logo"
      />
    </Link>
  );
};

export default Logo;
