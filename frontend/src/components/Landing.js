import React from "react";

import GoogleAuth from "./GoogleAuth";

import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <div className="flex flex-col-reverse sm:mt-16 sm:flex-row h-screen justify-center items-start  box-border">
      <div className="flex flex-col sm:w-1/2 px-4 py-10 justify-center items-start ">
        <div className="mb-2">Stayhome</div>
        <div>
          <h1 className="text-2xl sm:text-6xl leading-none text-white font-display">
            Best streams, podcasts in 4k
          </h1>
        </div>
        <div>
          So many streamers, so much to experience. Watch now for free with our
          app
        </div>
        <div className="flex flex-row mt-8">
          <div className="bg-green-400 sm:p-4 px-8 text-center flex justify-center items-center rounded text-white shadow-green">
            <Link to="app" className="">
              Get App
            </Link>
          </div>
          <div className="ml-4 flex flex-row items-center">
            <div className="mr-4">for</div>
            <div className="flex flex-row">
              <Link className="mr-2 bg-gray-600 p-2 px-4 text-center rounded-lg flex justify-center">
                <i class="fab fa-windows fa-2x"></i>
              </Link>
              <Link className="mr-2 bg-gray-600 p-2 px-4 text-center rounded-lg">
                <i class="fab fa-apple fa-2x"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="p-2 sm:p-0 sm:w-5/12 rounded-full text-center ">
        <img src="video.png" className="rounded-lg"></img>
      </div>
    </div>
  );
};

export default Landing;
