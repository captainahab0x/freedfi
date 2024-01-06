'use client'
import './globals.css'
import '@rainbow-me/rainbowkit/styles.css'
import store from '@/store'
import { Provider as ReduxProvider } from 'react-redux'

import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { arbitrumSepolia } from 'wagmi/chains'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'

const projectId = process.env.NEXT_PUBLIC_PROJECTID as string
const http = process.env.NEXT_PUBLIC_ALCHEMY_KEY as string

const { chains, publicClient } = configureChains(
  [arbitrumSepolia],
  [
    jsonRpcProvider({
      rpc: (chain) => ({
        http,
        // http: `https://${chain.id}.example.com`,
      }),
    }),
  ],
)

const { connectors } = getDefaultWallets({
  appName: 'FreedFi',
  projectId,
  chains,
})

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ReduxProvider store={store}>
          <WagmiConfig config={wagmiConfig}>
            <RainbowKitProvider chains={chains}>{children}</RainbowKitProvider>
          </WagmiConfig>
        </ReduxProvider>
      </body>
    </html>
  )
}
