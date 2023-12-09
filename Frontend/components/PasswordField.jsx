import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import PasswordVisible from '@/assets/password-visible.svg';
import PasswordInvisible from '@/assets/password-invisible.svg';
import RedCross from '@/assets/redCross.svg';
import GreenTick from '@/assets/greenTick.svg';

const PasswordField = ({
  label,
  Password,
  setPassword,
  PasswordError,
  setPasswordError,
}) => {
  const [isFirstTime, setIsFirstTime] = useState(true);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const [hasUppercase, setHasUppercase] = useState(false);
  const [hasLowercase, setHasLowercase] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [hasSpecialChar, setHasSpecialChar] = useState(false);
  const [hasMinLength, setHasMinLength] = useState(false);

  const [showPasswordStrength, setShowPasswordStrength] = useState(false);

  const isValidPassword = (password) => {
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(
      password
    );
    const hasMinLength = password.length >= 8;

    setHasUppercase(hasUppercase);
    setHasLowercase(hasLowercase);
    setHasNumber(hasNumber);
    setHasSpecialChar(hasSpecialChar);
    setHasMinLength(hasMinLength);

    return (
      hasUppercase &&
      hasLowercase &&
      hasNumber &&
      hasSpecialChar &&
      hasMinLength
    );
  };

  const handleInput = (e) => {
    setPassword(e.target.value);
    isFirstTime
      ? setIsFirstTime(false)
      : isValidPassword(e.target.value) === false
      ? [setPasswordError(true), setShowPasswordStrength(true)]
      : setPasswordError(false);
  };

  const checkisValid = () => {
    if (isValidPassword(Password) === false) {
      setIsFirstTime(false);
      setPasswordError(true);
      setShowPasswordStrength(true);
    }
  };

  return (
    <div>
      <label
        htmlFor="email"
        className="text-primary-text text-[0.875rem] leading-[150%] font-semibold inline-block mb-[0.375rem]">
        {label}
      </label>
      <div className="relative">
        <input
          type={isPasswordVisible ? 'text' : 'password'}
          name="text"
          value={Password}
          onChange={handleInput}
          onBlur={checkisValid}
          className={`w-full text-[1rem] bg-white h-12 rounded py-[0.1rem] px-[0.875rem] pr-[3.125rem]  mb-[0.8125rem]  text-primary-text ${
            PasswordError
              ? 'outline outline-2 outline-text-red'
              : 'border border-light-gray focus:outline-black'
          }`}
        />

        <div
          onClick={() => setIsPasswordVisible(!isPasswordVisible)}
          className="absolute right-3 top-3">
          {isPasswordVisible ? (
            <Image
              src={PasswordVisible}
              alt="Password Visible"
              width={24}
              height={24}
              className="cursor-pointer"
            />
          ) : (
            <Image
              src={PasswordInvisible}
              alt="Password Visible"
              width={24}
              height={24}
              className="cursor-pointer"
            />
          )}
        </div>
        {showPasswordStrength && (
          <div className="text-secondary-text flex flex-col gap-4 mt-5 ">
            <p className="flex items-center gap-4 ">
              <Image
                src={hasUppercase ? GreenTick : RedCross}
                alt="Error Icon"
                width={14}
                height={14}
                className="inline-block text-[1rem]"
              />
              <span className="text-[1rem] leading-[130%]">
                One uppercase character (A-Z)
              </span>
            </p>
            <p className="flex items-center gap-4">
              <Image
                src={hasLowercase ? GreenTick : RedCross}
                alt="Error Icon"
                width={14}
                height={14}
                className="inline-block text-[1rem]"
              />
              <span className="text-[1rem] leading-[130%]">
                One lowercase character (a-z)
              </span>
            </p>
            <p className="flex items-center gap-4">
              <Image
                src={hasNumber ? GreenTick : RedCross}
                alt="Error Icon"
                width={14}
                height={14}
                className="inline-block text-[1rem]"
              />
              <span className="text-[1rem] leading-[130%]">
                One number (0-9)
              </span>
            </p>
            <p className="flex items-center gap-4">
              <Image
                src={hasSpecialChar ? GreenTick : RedCross}
                alt="Error Icon"
                width={14}
                height={14}
                className="inline-block text-[1rem]"
              />
              <span className="text-[1rem] leading-[130%]">
                One Symbol (e.g. $,!,#,&)
              </span>
            </p>
            <p className="flex items-center gap-4">
              <Image
                src={hasMinLength ? GreenTick : RedCross}
                alt="Error Icon"
                width={14}
                height={14}
                className="inline-block text-[1rem]"
              />
              <span className="text-[1rem] leading-[130%]">
                More than 8 characters
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PasswordField;
