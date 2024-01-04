import { createAlchemyWeb3 } from '@alch/alchemy-web3'
import { getContract } from 'viem'
import { publicClient } from '../wagmi'
import LendingPlatform from '../../../contracts/out/GetALoan.sol/LendingPlatform.json'
import PoolController from '../../../contracts/out/PoolController.sol/PoolController.json'

const alchemyKey = process.env.NEXT_PUBLIC_ALCHEMY_KEY;
const web3 = createAlchemyWeb3(alchemyKey);

export const LPcontractAddress = '0x1E758656f3Ba1aC562b6D93D08E2ffE0DbE347B0';
export const PCcontractAddress = '0x6Cc97B5BfE61d1B985D80a71fB785e35933148a0';

export const getContractInstance = (isPoolController?: boolean) => {

  let contractABI;
  let contractAddress;

  if (isPoolController) {
    contractABI = PoolController.abi;
    contractAddress = PCcontractAddress;
  } else {
    contractABI = LendingPlatform.abi;
    contractAddress = LPcontractAddress;
  }
  return getContract({
  address: '0x6Cc97B5BfE61d1B985D80a71fB785e35933148a0',
  abi: contractABI,
  client: publicClient
})
  // return new web3.eth.Contract(contractABI, contractAddress);
};


// export const contractAddress = '0x1E758656f3Ba1aC562b6D93D08E2ffE0DbE347B0'

export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      const obj = {
        address: addressArray[0],
      };
      return obj;
    } catch (err) {
      return {
        address: '',
      };
    }
  } else {
    return {
      address: '',
    };
  }
};

export const getCurrentWalletConnected = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: 'eth_accounts',
      });
      if (addressArray.length > 0) {
        return {
          address: addressArray[0],
        };
      } else {
        return {
          address: '',
        };
      }
    } catch (err) {
      return {
        address: '',
      };
    }
  } else {
    return {
      address: '',
    };
  }
};
