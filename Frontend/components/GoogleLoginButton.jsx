import React from 'react';
import Image from 'next/image';
import GoogleLogo from '@/assets/GoogleSSO.png';

const GoogleLoginButton = () => {
  return (
    <button className="w-full h-[40px]  px-4 rounded outline outline-[1px]  transform transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-button ease-in-out-expo">
      <div className=" relative  ">
        <Image
          src={GoogleLogo}
          alt="Google Logo"
          width={16}
          height={16}
          className="absolute top-[0.25rem]"
        />
        <span className="ml-2 align-center text-sm leading-[130%] font-semibold">
          Continue with Google
        </span>
      </div>
    </button>
  );
};

export default GoogleLoginButton;
