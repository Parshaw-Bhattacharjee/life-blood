import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
const SignupBloodBank = ({ user }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="mt-28 w-full min-h-screen flex  flex-col bg-white">
      <div className="w-full md:w-1/2 bg-white mt-10 px-12 self-center">
        <h2 className="text-center text-4xl text-red-600 font-display font-semibold">
          Sign Up
        </h2>
        <div className="mt-12">
          <form>
            <div className="flex flex-col">
              <div className="text-sm font-bold text-gray-700 tracking-wide">
                Name
              </div>
              <div className="border-b border-gray-300">
                <input
                  className="w-full text-lg p-2 focus:outline-none"
                  type="text"
                  //   value={loginInput.email}
                  onChange={(e) => {
                    // setLoginInput({ ...loginInput, email: e.target.value });
                    // if (!validateEmail(e.target.value)) {
                    //   setLoginInputError({
                    //     ...loginInputError,
                    //     email: 'Email should be in correct format',
                    //   });
                    // } else {
                    //   setLoginInputError({ ...loginInputError, email: '' });
                    // }
                  }}
                  placeholder="Enter your Name"
                  required
                />
              </div>
              {/* {loginInputError.email ? (
                <div className='text-red-500 font-semibold self-center text-sm'>
                  {loginInputError.email}
                </div>
              ) : null} */}
            </div>
            <div className="mt-8 flex flex-col">
              <div className="text-sm font-bold text-gray-700 tracking-wide">
                Email Address
              </div>
              <div className="border-b border-gray-300">
                <input
                  className="w-full text-lg p-2 focus:outline-none"
                  type="email"
                  //   value={loginInput.email}
                  onChange={(e) => {
                    // setLoginInput({ ...loginInput, email: e.target.value });
                    // if (!validateEmail(e.target.value)) {
                    //   setLoginInputError({
                    //     ...loginInputError,
                    //     email: 'Email should be in correct format',
                    //   });
                    // } else {
                    //   setLoginInputError({ ...loginInputError, email: '' });
                    // }
                  }}
                  placeholder="example@gmail.com"
                  required
                />
              </div>
              {/* {loginInputError.email ? (
                <div className='text-red-500 font-semibold self-center text-sm'>
                  {loginInputError.email}
                </div>
              ) : null} */}
            </div>
            <div className="mt-8 flex flex-col">
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Password
                </div>
              </div>
              <div className="flex items-center border-b border-gray-300">
                <input
                  //   value={loginInput.password}
                  className="w-full text-lg p-2  focus:outline-none"
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => {
                    // setLoginInput({ ...loginInput, password: e.target.value });
                    // if (e.target.value !== '') {
                    //   setLoginInputError({
                    //     ...loginInputError,
                    //     password: '',
                    //   });
                    // }
                  }}
                  placeholder="Enter your password"
                  required
                />
                {!showPassword ? (
                  <i
                    onClick={() => setShowPassword(true)}
                    className="text-lg cursor-pointer text-txt-secondary-color far fa-eye-slash"
                  ></i>
                ) : (
                  <i
                    onClick={() => setShowPassword(false)}
                    className="text-lg cursor-pointer text-txt-secondary-color far fa-eye"
                  ></i>
                )}
              </div>
              {/* {loginInputError.password ? (
                <div className='text-red-500 font-semibold self-center text-sm'>
                  {loginInputError.password}
                </div>
              ) : null} */}
            </div>
            <div className="mt-10 flex flex-col gap-4">
              <button
                className="bg-red-400 text-white p-3 sm:p-2 w-full rounded-full tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline active:bg-blue-500
                                shadow-lg"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </form>
          <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
            Do have an account ?{" "}
            <Link
              to={"/login/bloodbank"}
              replace={true}
              //   state={location.state}
              className="cursor-pointer text-red-400 hover:text-red-600"
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignupBloodBank;
