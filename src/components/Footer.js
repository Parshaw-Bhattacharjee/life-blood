import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white md:flex md:items-center md:justify-between px-10 py-3 md:mt-20">
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4">
        <ul>
          <h1 className="mb-1 font-semibold">SUPPORT</h1>
          <li
            className="text-gray-400 hover:text-teal-400 duration-300
          text-sm cursor-pointer leading-6"
          >
            <Link to={"/about"}>About Us</Link>
          </li>
          <li
            className="text-gray-400 hover:text-teal-400 duration-300
          text-sm cursor-pointer md:leading-6 "
          >
            <Link to={"/contact"}>Contact Us</Link>
          </li>
        </ul>
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-gray-400 text-sm md:items-center md:justify-center"
      >
        <span>© 2020 Life-Blood. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <div className="">
          <BsFacebook
            className="text-teal-500 p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-4xl hover:text-gray-100 hover:bg-teal-500
        duration-300"
          />
          <BsTwitter
            className="text-teal-500 p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-4xl hover:text-gray-100 hover:bg-teal-500
        duration-300"
          />
          <AiFillInstagram
            className="text-teal-500 p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-4xl hover:text-gray-100 hover:bg-teal-500
        duration-300"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
