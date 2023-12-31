export enum Network {
  CELO_ALFAJORES = 'alfajores'
}

export const getNetworkUrl = () => {
  switch (process.env.NEXT_PUBLIC_BLOCKCHAIN_NETWORK) {
    case Network.CELO_ALFAJORES:
      return 'https://rpc-mumbai.maticvigil.com/'
    default:
      throw new Error('Network not supported');
  }
};

export const getChainId = () => {
  switch (process.env.NEXT_PUBLIC_BLOCKCHAIN_NETWORK) {
    case Network.CELO_ALFAJORES:
      return 51
  }
};

export const getNetworkToken = () => {
  switch (process.env.NEXT_PUBLIC_BLOCKCHAIN_NETWORK) {
    case Network.CELO_ALFAJORES:
      return 'CELO'
  }
};

export const getFaucetUrl = () => {
  switch (process.env.NEXT_PUBLIC_BLOCKCHAIN_NETWORK) {
    case Network.CELO_ALFAJORES:
      return 'https://faucet.celo.org/alfajores/'
  }
};

export const getNetworkName = () => {
  switch (process.env.NEXT_PUBLIC_BLOCKCHAIN_NETWORK) {
    case Network.CELO_ALFAJORES:
      return 'Celo (Testnet)'
  }
};

export const getBlockExplorer = (address: string) => {
  switch (process.env.NEXT_PUBLIC_BLOCKCHAIN_NETWORK) {
    case Network.CELO_ALFAJORES:
      return `https://explorer.celo.org/alfajores/${address}`
  }
};
