'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import GoogleLoginButton from './GoogleLoginButton';
import EmailField from '@/components/EmailField';
import SignUpButton from '@/components/SignUpButton';
import PasswordFieldSignIn from '@/components/PasswordFieldSignIn';
import { useRouter } from 'next/navigation';

const SignUp = ({ setIsSignUp }) => {
  const [Email, setEmail] = useState('');
  const [EmailError, setEmailError] = useState(false);
  const [Password, setPassword] = useState('');
  const [PasswordError, setPasswordError] = useState(false);

  const [isAllValid, setIsAllValid] = useState(false);
  const [isFirstload, setIsFirstLoad] = useState(true);
  const router = useRouter();

  const checkAllValid = () => {
    setIsAllValid(!EmailError && !PasswordError);
  };

  const handelSubmit = () => {
    if (isAllValid) {
      router.push('/onboarding');
    }
  };

  useEffect(() => {
    if (isFirstload) {
      setIsFirstLoad(false);
      return;
    }
    checkAllValid();
  }, [EmailError, PasswordError, Email, Password]);

  return (
    <div className="flex min-h-screen w-full h-full">
      <div className=" flex w-full justify-center items-center h-full min-h-screen">
        <div className="bg-white w-full md:w-[420px]  h-full pt-[6.25rem] pb-[2.75rem]  px-6 mobile-lg:px-11 ">
          <h1 className="text-primary-text text-[3rem] font-semibold leading-[125%]">
            Log In
          </h1>
          <p className="pb-[1.5rem] text-[0.875rem] leading-[150%] mt-[1rem] font-normal text-secondary-text">
            Need an FreedFi account?
            <span
              onClick={() => setIsSignUp(true)}
              className="text-link ml-[2px] font-semibold leading-[130%] cursor-pointer">
              Sign up
            </span>
          </p>
          {/* Sign In with Google */}
          <div className="">
            <GoogleLoginButton />
          </div>
          {/* Or option */}
          <div className="flex items-center mt-6 mb-6">
            <hr className="bg-light-gray w-full h-[1.5px]" />
            <p className="text-center text-secondary-text text-[0.875rem] leading-[150%] font-normal mx-[6px]">
              or
            </p>
            <hr className="bg-light-gray w-full h-[1.5px]" />
          </div>
          {/* Sign Up with Email */}
          <form className="flex flex-col gap-3 pb-6">
            <EmailField
              label={'Email'}
              errorMessage={'Invalid email address'}
              Email={Email}
              setEmail={setEmail}
              EmailError={EmailError}
              setEmailError={setEmailError}
            />
            <PasswordFieldSignIn
              label={'Password'}
              errorMessage={'Password is required'}
              inputValue={Password}
              setInputValue={setPassword}
              isEmpty={PasswordError}
              setIsEmpty={setPasswordError}
            />
            <SignUpButton
              isAllValid={isAllValid}
              label={'Sign In'}
              handelSubmit={handelSubmit}
            />
          </form>

          <hr className="bg-light-gray w-full h-[1px] mt-5" />
          <p className=" text-secondary-text  text-[0.875rem] leading-[150%] font-normal pt-6 px-4 mb-2 ">
            <span className="mr-[1px]">Forget your password?</span>
            <Link href={'/auth'} className="inline-block">
              <span className="text-link inline-block ml-[2px] font-semibold leading-[130%] cursor-pointer ">
                Recover password
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
