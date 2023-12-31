'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { connectWallet, getCurrentWalletConnected } from '@/utils/interact';

const Connect = () => {

  const router = useRouter();

  const [walletAddress, setWalletAddress] = useState('');

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', (accounts) => {
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
        } else {
          setWalletAddress('');
        }
      });
    }
  }

  useEffect(() => {
    async function fetchData() {
      const { address } = await getCurrentWalletConnected();
      setWalletAddress(address);

      addWalletListener();
    }

    fetchData();
  }, []);

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setWalletAddress(walletResponse.address);
    router.push('/onboarding');
  };

  return (
    <div className="font-poppins font-normal cursor-pointer text-[16px] text-black bg-blue-gradient p-2.5 rounded-md transform transition-all duration-300 hover:scale-110">
      {walletAddress.length > 0 ? (
        <div className="flex items-center">
          <span className="mr-1 mt-1">
            {String(walletAddress).substring(0, 6) +
              '...' +
              String(walletAddress).substring(38)}
          </span>
        </div>
      ) : (
        <button onClick={connectWalletPressed}>Connect Wallet</button>
      )}
    </div>
  );
};

export default Connect;
