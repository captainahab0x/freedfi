import { createAlchemyWeb3 } from '@alch/alchemy-web3'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

const alchemyKey = process.env.NEXT_PUBLIC_ALCHEMY_KEY
const web3 = createAlchemyWeb3(alchemyKey)

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const convertToWei = (value: number) => {
  return web3.utils.toWei(String(value), 'ether')
}
