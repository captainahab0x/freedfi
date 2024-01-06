import { createPublicClient, http } from 'viem'
import { arbitrumSepolia } from 'viem/chains'

export const publicClient = createPublicClient({
  chain: arbitrumSepolia,
  transport: http(),
})
