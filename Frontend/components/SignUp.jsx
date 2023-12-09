'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import GoogleLoginButton from '@/components/GoogleLoginButton';
import InputField from '@/components/InputField';
import EmailField from '@/components/EmailField';
import PasswordField from '@/components/PasswordField';
import SignUpButton from '@/components/SignUpButton';
import { useRouter } from 'next/navigation';

const SignUp = ({ setIsSignUp }) => {
  const [FirstName, setFirstName] = useState('');
  const [FirstNameError, setFirstNameError] = useState(false);
  const [LastName, setLastName] = useState('');
  const [LastNameError, setLastNameError] = useState(false);
  const [Email, setEmail] = useState('');
  const [EmailError, setEmailError] = useState(false);
  const [Password, setPassword] = useState('');
  const [PasswordError, setPasswordError] = useState(false);

  const [isAllValid, setIsAllValid] = useState(false);
  const [isFirstload, setIsFirstLoad] = useState(true);

  const router = useRouter();

  const checkAllValid = () => {
    setIsAllValid(
      !FirstNameError && !LastNameError && !EmailError && !PasswordError
    );
  };

  const handelSubmit = () => {
    isAllValid && router.push('/onboarding');
  };

  useEffect(() => {
    if (isFirstload) {
      setIsFirstLoad(false);
      return;
    }
    checkAllValid();
  }, [FirstNameError, LastNameError, EmailError, PasswordError]);

  return (
    <div className="flex min-h-screen w-full h-full">
      <div className="w-full  flex justify-center relative items-center h-full min-h-screen">
        <div className="bg-white w-full  md:w-[420px] h-full mt-1  pt-[6.25rem] pb-[2.75rem] px-6">
          <h1 className="text-primary-text text-[3rem] font-semibold leading-[125%]">
            Sign Up
          </h1>

          <p className="text-primary-text my-[1rem] text-base">
            Financial Portal delivering Freedom via Talent-backed Loans
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
            <div className="flex flex-col mobile-lg:flex-row gap-3 mobile-lg:gap-6">
              <InputField
                label={'First name'}
                errorMessage={'First name is required'}
                inputValue={FirstName}
                setInputValue={setFirstName}
                isEmpty={FirstNameError}
                setIsEmpty={setFirstNameError}
              />
              <InputField
                label={'Last name'}
                errorMessage={'Last name is required'}
                inputValue={LastName}
                setInputValue={setLastName}
                isEmpty={LastNameError}
                setIsEmpty={setLastNameError}
              />
            </div>

            <EmailField
              label={'Email'}
              errorMessage={'Invalid email address'}
              Email={Email}
              setEmail={setEmail}
              EmailError={EmailError}
              setEmailError={setEmailError}
            />
            <PasswordField
              label={'Password'}
              Password={Password}
              setPassword={setPassword}
              PasswordError={PasswordError}
              setPasswordError={setPasswordError}
            />
            <SignUpButton
              isAllValid={isAllValid}
              label={'Sign up'}
              handelSubmit={handelSubmit}
            />
          </form>
          <p className=" text-secondary-text text-[0.875rem] leading-[150%] font-normal pb-6">
            By clicking “Sign up” or “Sign up with Google,” you’re agreeing to
            FreedFi’s{' '}
            <Link href={'./terms'} className="inline-block underline">
              Terms of Use.
            </Link>
          </p>
          <hr className="bg-light-gray w-full h-[1px]" />
          <p className=" text-secondary-text  text-[0.875rem] leading-[150%] font-normal pt-6 mb-2 ">
            <span className="mr-[1px]">Already have an FreedFi account?</span>

            <span
              onClick={() => setIsSignUp(false)}
              className="text-link inline-block ml-[2px] font-semibold leading-[130%] cursor-pointer underline">
              Log in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
