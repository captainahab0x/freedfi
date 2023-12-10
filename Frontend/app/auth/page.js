'use client';

import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';
import React, { useState } from 'react';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { Poller_One } from 'next/font/google';
import Connect from '../../components/Connect';

const poller_one = Poller_One({
  weight: ['400'],
  subsets: ['latin'],
});
const inter = Inter({
  subsets: ['latin'],
});

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <div className={`${inter.className}`}>
      <div className="top-0 left-0 w-full z-10 fixed">
        <div className="px-12 py-6">
          <div className="bg-white rounded-lg flex justify-between items-center px-6 py-4 shadow-sm border-grey border-[1px]">
            <div className="flex items-center justify-between w-full">
              <Link href="/" className="ml-4 lg:ml-0">
                <h1
                  className={`text-xl active:scale-75 transition-all duration-200 font-bold ${poller_one.className}`}>
                  FreedFi
                </h1>
              </Link>
              <Connect />
            </div>
          </div>
        </div>
      </div>
      {isSignUp ? (
        <SignUp setIsSignUp={setIsSignUp} />
      ) : (
        <SignIn setIsSignUp={setIsSignUp} />
      )}
    </div>
  );
};

export default Auth;
