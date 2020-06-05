import React from "react";

import GoogleAuth from "./GoogleAuth";

import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex space-between w-full shadow-md mb-8 border-b  ">
      <div className=" w-full flex-row flex justify-between p-2 items-center">
        <Link to="/" className="text-xl ml-4">
          Weitch
        </Link>

        <div className="right-header bg-indigo-900 rounded p-2 text-white hover:bg-blue-500">
          <Link to="/">All Streams</Link>
        </div>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
