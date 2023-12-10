import { useState, useEffect } from 'react';
import { connectWallet, getCurrentWalletConnected } from '@/utils/interact';
import Image from 'next/image';

const Connect = () => {
  const [walletAddress, setWallet] = useState('');

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
        } else {
          setWallet('');
        }
      });
    }
  }

  useEffect(() => {
    async function fetchData() {
      const { address } = await getCurrentWalletConnected();
      setWallet(address);

      addWalletListener();
    }

    fetchData();
  }, []);

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();

    setWallet(walletResponse.address);
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
