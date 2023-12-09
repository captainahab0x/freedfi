import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import ErrorIcon from '@/assets/exclamatory.svg';
import PasswordVisible from '@/assets/password-visible.svg';
import PasswordInvisible from '@/assets/password-invisible.svg';

const PasswordFieldSignIn = ({
  label,
  errorMessage,
  inputValue,
  setInputValue,
  isEmpty,
  setIsEmpty,
}) => {
  const [isFirstTime, setIsFirstTime] = useState(true);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleInput = (e) => {
    setInputValue(e.target.value);
    isFirstTime
      ? setIsFirstTime(false)
      : e.target.value === ''
      ? setIsEmpty(true)
      : setIsEmpty(false);
  };

  const checkIsEmpty = () => {
    if (inputValue === '') {
      setIsFirstTime(false);
      setIsEmpty(true);
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
          value={inputValue}
          onChange={handleInput}
          onBlur={checkIsEmpty}
          className={`w-full text-[1rem] bg-white h-12 rounded py-[0.1rem] px-[0.875rem] pr-[3.125rem]  mb-[0.8125rem]  text-primary-text ${
            isEmpty
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
        {isEmpty && (
          <p className="text-[0.75rem] leading-[125%] font-normal text-text-red flex items-center mt-[0.15rem]  ">
            <Image
              src={ErrorIcon}
              alt="Error Icon"
              width={16}
              height={16}
              className="bg-text-red w-5 h-5 rounded-full"
            />
            <span className="pl-[0.625rem]">{errorMessage}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default PasswordFieldSignIn;
