'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { connectWallet, getCurrentWalletConnected } from '@/lib/utils/interact'
import { ConnectButton } from '@rainbow-me/rainbowkit'

const Connect = () => {

  return (
    <div className="font-poppins font-normal cursor-pointer text-[16px] text-black bg-blue-gradient p-2.5 rounded-md transform transition-all duration-300 hover:scale-110">
      <ConnectButton accountStatus={'avatar'} />
    </div>
  )
}

export default Connect
