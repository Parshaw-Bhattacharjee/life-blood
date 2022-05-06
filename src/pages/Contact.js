import React from "react";
import { BsFillTelephoneFill, BsFacebook } from "react-icons/bs";
import { SiGmail, SiTwitter } from "react-icons/si";
import { FaLocationArrow, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex w-full min-h-screen justify-center items-center">
      <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-red-500 w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white overflow-hidden">
        <div className="flex flex-col space-y-8 justify-between">
          <div>
            <h1 className="font-bold text-4xl tracking-wide"> Contact Us </h1>
            <p className="pt-2 text-red-100 text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              ab cumque laudantium eos, fuga recusandae earum veritatis
              voluptatum autem, repellendus ratione dolorum, libero modi
              corporis nisi vitae. Est, at quis.
            </p>
          </div>
          <div className="flex flex-col space-y-6">
            <div className="inline-flex space-x-2 items-center">
              <BsFillTelephoneFill className="text-rose-300 text-xl" />
              <span> +(123) 456 7890 </span>
            </div>
            <div className="inline-flex space-x-2 items-center">
              <SiGmail className="text-rose-300 text-xl" />
              <span> example@gmail.com </span>
            </div>
            <div className="inline-flex space-x-2 items-center">
              <FaLocationArrow className="text-rose-300 text-xl" />
              <span> IN </span>
            </div>
          </div>
          <div className="flex space-x-4 text-lg">
            <BsFacebook />
            <SiTwitter />
            <FaLinkedin />
          </div>
        </div>
        <div className="relative">
          <div className="absolute z-0 w-40 h-40 bg-rose-400 rounded-full -right-28 -top-28"></div>
          <div className="absolute z-0 w-40 h-40 bg-rose-400 rounded-full -left-28 -bottom-16"></div>
          <div className="relative z-10 bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-80">
            <form action="" className="flex flex-col space-y-4">
              <div>
                <label htmlFor="" className="text-sm">
                  Name
                </label>
                <input
                  type={"text"}
                  placeholder="Your Name"
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-rose-300"
                />
              </div>
              <div>
                <label htmlFor="" className="text-sm">
                  Email ID
                </label>
                <input
                  type={"email"}
                  placeholder="example@gmail.com"
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-rose-300"
                />
              </div>
              <div>
                <label htmlFor="" className="text-sm">
                  Message
                </label>
                <textarea
                  placeholder="Message"
                  rows={"3"}
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-rose-300"
                />
              </div>
              <button className="inline-block self-end bg-red-500 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
