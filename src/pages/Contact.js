import { React, useState, useEffect } from "react";
import { BsFillTelephoneFill, BsFacebook } from "react-icons/bs";
import { SiGmail, SiTwitter } from "react-icons/si";
import { FaLocationArrow, FaLinkedin } from "react-icons/fa";
import { useAuth } from "../contexts/auth-context";
import { userTypes } from "../constants/constants";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [contactInput, setContactInput] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { contactHandler, token, userType } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (token && userType === userTypes.CONTACT) {
      navigate("/contact");
    }
  }, [token, userType]);
  const [status, setStatus] = useState(undefined);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    contactHandler(contactInput.name, contactInput.email, contactInput.message)
      .then(() => {
        setStatus({ type: "success" });
      })
      .catch((error) => {
        setStatus({ type: "error", error });
      });
    setContactInput({ name: "", email: "", message: "" });
  };

  return (
    <>
      {status?.type === "success" && (
        <div
          class="bg-red-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong class="font-bold">Success!</strong>
          <span class="block sm:inline"> We will reach you soon... </span>
          <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg
              class="fill-current h-6 w-6 text-green-500"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </span>
        </div>
      )}
      {status?.type === "error" && (
        <div
          class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong class="font-bold">Error!</strong>
          <span class="block sm:inline"> Kindly try again! </span>
          <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg
              class="fill-current h-6 w-6 text-red-500"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </span>
        </div>
      )}
      <div className="flex w-full min-h-screen justify-center items-center">
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-red-500 w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white overflow-hidden">
          <div className="flex flex-col space-y-8 justify-between">
            <div>
              <h1 className="font-bold text-4xl tracking-wide"> Contact Us </h1>
              <p className="pt-2 text-red-100 text-sm">
                Want to get in touch? We'd always be there to help you. Here's
                how you can reach us...
              </p>
            </div>
            <div className="flex flex-col space-y-6">
              <div className="inline-flex space-x-2 items-center">
                <BsFillTelephoneFill className="text-rose-300 text-xl" />
                <span> +(123) 456 7890 </span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                <SiGmail className="text-rose-300 text-xl" />
                <span> name@example.com </span>
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
              <form
                onSubmit={onSubmitHandler}
                className="flex flex-col space-y-4"
              >
                <div>
                  <label htmlFor="" className="text-sm">
                    Name
                  </label>
                  <input
                    required
                    type={"text"}
                    value={contactInput.name}
                    onChange={(e) => {
                      setContactInput({
                        ...contactInput,
                        name: e.target.value,
                      });
                    }}
                    placeholder="Your Name"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-rose-300"
                  />
                </div>
                <div>
                  <label htmlFor="" className="text-sm">
                    Email ID
                  </label>
                  <input
                    required
                    type={"email"}
                    value={contactInput.email}
                    onChange={(e) => {
                      setContactInput({
                        ...contactInput,
                        email: e.target.value,
                      });
                    }}
                    placeholder="name@example.com"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-rose-300"
                  />
                </div>
                <div>
                  <label htmlFor="" className="text-sm">
                    Message
                  </label>
                  <textarea
                    required
                    minLength={10}
                    value={contactInput.message}
                    onChange={(e) => {
                      setContactInput({
                        ...contactInput,
                        message: e.target.value,
                      });
                    }}
                    placeholder="Message"
                    rows={"3"}
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-rose-300"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-block self-end bg-red-500 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
