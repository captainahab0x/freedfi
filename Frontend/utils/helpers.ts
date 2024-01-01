import { createAlchemyWeb3 } from '@alch/alchemy-web3';

const alchemyKey = process.env.NEXT_PUBLIC_ALCHEMY_KEY;
const web3 = createAlchemyWeb3(alchemyKey);

export const convertToWei = (value: number) => {
  return web3.utils.toWei(String(value), 'ether');
};