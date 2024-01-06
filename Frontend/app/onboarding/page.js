'use client'

import React from 'react'
import PurposeSection from '@/components/purpose-section'
import Link from 'next/link'
import { Poller_One } from 'next/font/google'
import Connect from '../../components/Connect'

const poller_one = Poller_One({
  weight: ['400'],
  subsets: ['latin'],
})

const Onboarding = () => {
  return (
    <>
      <div className="top-0 left-0 w-full z-10 fixed">
        <div className="px-12 py-6">
          <div className="bg-white border-purple-500 border-[1px] rounded-lg flex justify-between items-center px-6 py-4 shadow-sm border-grey ">
            <div className="flex items-center justify-between w-full">
              <Link href="/" className="ml-4 lg:ml-0">
                <h1
                  className={`text-xl active:scale-75 transition-all duration-200 font-bold ${poller_one.className}`}
                >
                  FreedFi
                </h1>
              </Link>
              <Connect />
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-viewport-minus-sections">
        <PurposeSection />
      </div>
    </>
  )
}

export default Onboarding
