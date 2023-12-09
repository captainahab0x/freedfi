'use client';

import Authorization from '@/components/Authorization';
import Education from '@/components/Education';
import Resume from '@/components/Resume';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';
import BackLogo from '@/assets/LeftGrayArrow.svg';
import Image from 'next/image';
import RightArrow from '@/assets/RightArrow.svg';
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { onboardingActions } from '@/store/onboarding-slice';
import BlackTick from '@/assets/BlackTick.svg';
import BlackDownArrow from '@/assets/BlackDownArrow.svg';
import BrandLogo from '@/assets/brand-logo-combined.svg';

const Onboarding = () => {
  const dispatch = useDispatch();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const targetRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const { linkedInUrlError, linkedInUrl } = useSelector(
    (state) => state.onboarding
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const checkLinkedInUrl = () => {
    dispatch(onboardingActions.checkLinkedInUrl());
    linkedInUrlError && linkedInUrl !== ''
      ? toast.error('LinkedIn URL is not saved')
      : linkedInUrl !== '' && toast.success('LinkedIn URL is saved');
  };

  const nextPanel = (e) => {
    e.preventDefault();

    if (index === 1) {
      checkLinkedInUrl();
    }

    if (index < 2) {
      setIndex(index + 1);
      targetRef.current.scrollLeft += 740;
      setDirection(1);
    }
  };

  const prevPanel = (e) => {
    e.preventDefault();

    if (index === 1) {
      checkLinkedInUrl();
    }

    if (index > 0) {
      setIndex(index - 1);
      targetRef.current.scrollLeft -= 740;
      setDirection(-1);
    }
  };

  const handleScroll = (e) => {
    if (isMobile) {
      e.preventDefault();
    }
  };

  return (
    <div className="w-full  lg:pt-[2.75rem] lg:pb-[4rem] ">
      {/* Logo */}
      <div className="hidden lg:block">
        <Image
          src={BrandLogo}
          className="h-[2.75rem] fixed top-[2.75rem] left-[0.25rem]"
          alt="brand-logo"
        />
      </div>
      {/* Mobile nav bar */}
      <div className="h-[60px] lg:hidden px-4 w-full  shadow-nav sticky top-0 left-0 z-[50] flex items-center justify-between mb-2">
        <div className="flex-1 flex justify-start">
          <Image
            onClick={prevPanel}
            src={BlackDownArrow}
            alt="back"
            className={`h-[1.5rem] w-fit rotate-90 cursor-pointer transition-all duration-300 ${
              index > 0 ? 'block opacity-[100%]' : 'hidden opacity-0'
            }`}
          />
        </div>
        <div className="flex gap-1 flex-1 justify-center">
          <div
            className={`w-4 h-[3px] rounded-full   ${
              index > 0 ? 'bg-black' : 'bg-light-gray'
            }`}></div>
          <div
            className={`w-4 h-[3px] rounded-full   ${
              index > 1 ? 'bg-black' : 'bg-light-gray'
            }`}></div>
          <div
            className={`w-4 h-[3px] rounded-full   ${
              index > 2 ? 'bg-black' : 'bg-light-gray'
            }`}></div>
        </div>
        <div className="flex-1  flex justify-end">
          <button
            onClick={nextPanel}
            className="py-[10px] w-fit  px-8 text-[0.875rem] rounded font-semibold bg-primary-button text-primary-text hover:bg-secondary-button hover:-translate-y-0.5  hover:shadow-button ease-in-out-expo transform transition-transform duration-150 cursor-pointer">
            Next
          </button>
        </div>
      </div>
      <Toaster />
      <div
        className="max-w-[62.5rem]  bg-white py-[2.75rem] shadow-onboard overflowx-x-hidden mx-auto relative rounded-[1.5rem]"
        onScroll={handleScroll}>
        <div
          ref={targetRef}
          className="max-w-[52.125rem] w-full mx-auto overflow-x-clip scrollbar-hide ">
          {/* Back button */}
          <div className="hidden lg:block">
            <div
              onClick={prevPanel}
              className={`absolute ${
                index > 0 ? 'block' : 'hidden'
              } top-[3rem] left-[3rem] cursor-pointer`}>
              <Image
                src={BackLogo}
                alt="back"
                className="w-[0.625rem] h-[1rem]"
              />
            </div>
            {/* Header */}
            <div className="w-full flex justify-between">
              <span
                className={`text-[0.75rem] leading-[150%] transition-all duration-300  text-primary-text ${
                  index == 0 && 'font-semibold'
                }`}>
                Education
              </span>
              <span
                className={`text-[0.75rem] leading-[150%] transition-all duration-300  text-primary-text ${
                  index == 1 && 'font-semibold'
                }`}>
                Resume
              </span>
              <span
                className={`text-[0.75rem] leading-[150%] transition-all duration-300 text-primary-text ${
                  index == 2 && 'font-semibold'
                }`}>
                Authorization
              </span>
            </div>
            <hr className=" w-full bg-gray-hover h-[1px] mt-[1.5rem] mb-[2.25rem] mx-auto" />
          </div>

          {/* Slides */}
          <AnimatePresence initial={false} custom={index} mode={`wait`}>
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 300 * direction }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}>
              {index === 0 && <Education />}
              {index === 1 && <Resume />}
              {index === 2 && <Authorization />}
            </motion.div>
          </AnimatePresence>
          <div className="hidden w-full mt-[2rem] lg:flex justify-center">
            <button
              onClick={nextPanel}
              className="max-w-[13.25rem]   mx-auto  bg-primary-button px-4 rounded font-semibold text-[0.875rem] h-[2.5rem] flex items-center gap-2 hover:bg-secondary-button hover:-translate-y-0.5  hover:shadow-button ease-in-out-expo transform transition-transform duration-150 cursor-pointer">
              {index == 2 ? 'Complete Profile' : 'Save and Continue'}
              <Image
                src={index == 2 ? BlackTick : RightArrow}
                alt="back"
                className="h-[0.875rem] w-fit"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
