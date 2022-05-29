import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../contexts/auth-context';
import { useEffect } from 'react';
import { userTypes } from '../../constants/constants';
const LoginBloodBank = () => {
  const { loginHandler, token, userType } = useAuth();
  const [bloodBankInput, setBloodBankInput] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  useEffect(() => {
    if (token && userType === userTypes.BLOOD_BANK) {
      navigate('/bloodbank');
    }
  }, [token, userType]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(bloodBankInput);
    loginHandler(
      bloodBankInput.email,
      bloodBankInput.password,
      userTypes.BLOOD_BANK
    );
  };

  return (
    <div className='mt-28 w-full min-h-screen flex flex-col bg-white'>
      <div className='w-full md:w-1/2 bg-white mt-10 p-12 self-center shadow-lg'>
        <h2 className='text-center text-4xl text-red-600 font-display font-semibold'>
          Blood Bank Sign in
        </h2>
        <div className='mt-12'>
          <form onSubmit={submitHandler}>
            <div className='flex flex-col space-y-4'>
              <div className='text-sm font-bold text-gray-700 tracking-wide'>
                Email Address
              </div>
              <div className='border-b border-gray-300'>
                <input
                  className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-rose-300'
                  type='email'
                  value={bloodBankInput.email}
                  onChange={(e) => {
                    setBloodBankInput({
                      ...bloodBankInput,
                      email: e.target.value,
                    });
                  }}
                  placeholder='example@gmail.com'
                  required
                />
              </div>
            </div>
            <div className='mt-8 flex flex-col'>
              <div className='flex justify-between items-center'>
                <div className='text-sm font-bold text-gray-700 tracking-wide'>
                  Password
                </div>
              </div>
              <div className='flex items-center border-b border-gray-300'>
                <input
                  value={bloodBankInput.password}
                  className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-rose-300'
                  type={'password'}
                  onChange={(e) => {
                    setBloodBankInput({
                      ...bloodBankInput,
                      password: e.target.value,
                    });
                  }}
                  placeholder='Enter your password'
                  required
                />
              </div>
            </div>
            <div className='mt-10 flex flex-col gap-4 items-center'>
              <button
                className='bg-red-400 text-white p-3 sm:p-2 w-80 rounded-lg tracking-wide
                                font-bold font-display focus:outline-none focus:shadow-outline active:bg-rose-500
                                shadow-lg'
                type='submit'
              >
                Log In
              </button>
            </div>
          </form>
          <div className='mt-12 text-sm font-display font-semibold text-gray-700 text-center'>
            Don't have an account?{' '}
            <Link
              to={'/signup/bloodbank'}
              replace={true}
              className='cursor-pointer text-red-400 hover:text-red-600'
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginBloodBank;
