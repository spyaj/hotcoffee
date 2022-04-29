import React from "react";
import { Link } from "react-router-dom";
import * as Images from "./../../assets/images";
import * as Icons from "./../../assets/icons";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between container mt-3">
        <div>
          <img src={Images.HotCoffeeLogo} alt="" className="" />
        </div>
        <div className="flex gap-5">
          <div className="flex gap-3">
            <Icons.SearchIcon />
            <input type="text" className="" placeholder="Search..." />
          </div>
          <Link to="/">Home</Link>
          <Link to="/article">Articles</Link>
          <Icons.InstagramIcon />
          <Icons.TwitterIcon />
          <Icons.LinkedinIcon />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
