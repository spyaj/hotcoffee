import React from "react";
import * as Icons from "./../../assets/icons";

let newDate = new Date();
const date = newDate.getFullYear();

const Footer = () => {
  return (
    <>
    <hr className=" border-black"/>
      <div className="container flex justify-between">
        <p>
          <b className="mr-4">hotcoffee</b> {date} copyright all rights reserved
        </p>
        <div className="flex gap-3">
          <Icons.InstagramIcon />
          <Icons.TwitterIcon />
          <Icons.LinkedinIcon />
        </div>
      </div>
    </>
  );
};

export default Footer;
