export const contractAddress = '0x1E758656f3Ba1aC562b6D93D08E2ffE0DbE347B0'

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
