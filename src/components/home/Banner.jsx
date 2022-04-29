import React from "react";
import * as Images from "./../../assets/images";

const Banner = () => {
  return (
    <>
      <div className="container m-14 flex place-items-center justify-evenly">
        <div>
          <div>
            <h1 className=" text-6xl font-extrabold">
              Make Better <br />
              <span className="flex">
                {" "}
                Coffee
                <img
                  src={Images.CoffeeImg}
                  alt=""
                  width="70"
                  height="70"
                />{" "}
              </span>
            </h1>
          </div>
          <div>
            <p className=" text-gray-800 text-2xl">Why learn to blog?</p>
          </div>
        </div>
        <div>
          <img src={Images.BannerImg} alt="" />
        </div>
      </div>
    </>
  );
};

export default Banner;
