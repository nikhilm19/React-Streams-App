import React from "react";

import GoogleAuth from "./GoogleAuth";

import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex space-between box-border shadow-md   bg-backg">
      <div className="w-full flex-row flex justify-between p-2 items-center">
        <Link
          to="/"
          className="text-2xl sm:ml-4 text-white flex flex-row  items-center"
        >
          <svg fill="white" viewBox="0 0 20 20" className="w-8 sm:mr-2">
            <path
              fill-rule="evenodd"
              d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
              clip-rule="evenodd"
            ></path>
          </svg>
          Weitch
        </Link>

        <div className="right-header ml-auto mr-2 bg-green-400 rounded p-2 text-white hover:bg-blue-500">
          <Link to="/">All Streams</Link>
        </div>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
