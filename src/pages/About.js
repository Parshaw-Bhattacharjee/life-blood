import React from "react";
import { BsFacebook } from "react-icons/bs";
import { SiTwitter } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <div className="flex w-full min-h-screen justify-center items-center">
      <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-red-500 w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white overflow-hidden">
        <div className="flex flex-col space-y-8 justify-between">
          <div>
            <h1 className="font-bold text-4xl tracking-wide border-b-4">
              About Us
            </h1>
            <div className="flex flex-col justify-center items-center ">
              <div className="flex flex-col space-x-10 space-y-5 items-center">
                <h1 className="font-semibold text-3xl tracking-wide p-3">
                  Digital Blood Bank System
                </h1>
                <h1 className="font-normal text-2xl tracking-wide">
                  A PROJECT Submitted by -
                </h1>
                <h1 className="font-medium text-2xl tracking-wide">
                  Mr. PARSHAW BHATTACHARJEE - 20181CSE0836
                </h1>
                <h1 className="font-medium text-2xl tracking-wide">
                  Mr. ROHAN MONDAL - 20181CSE0597
                </h1>
                <h1 className="font-medium text-2xl tracking-wide">
                  Mr. MAINAK HALDER - 20181CSE0390
                </h1>
                <h1 className="font-medium text-2xl tracking-wide">
                  Ms. AKANKSHA RAJ - 20181CSE0030
                </h1>
                <h1 className="font-normal text-xl tracking-wide">
                  Under the guidance of
                </h1>
                <h1 className="font-medium text-2xl tracking-wide">
                  Ms. ANITHA PREMKUMAR (Assistant Professor)
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
