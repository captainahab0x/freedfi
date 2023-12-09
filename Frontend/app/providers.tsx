'use client';

import * as React from 'react';
import { getDefaultWallets, RainbowKitProvider, connectorsForWallets } from '@rainbow-me/rainbowkit';
import type { AppProps } from 'next/app';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  avalanche,
  avalancheFuji,
  polygon,
  polygonMumbai,
} from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

// RainbowKit
import { enhanceWalletWithAAConnector } from '@zerodev/wagmi/rainbowkit'

// Connector
import { enhanceConnectorWithAA } from '@zerodev/wagmi'

import { 
  googleWallet,
  facebookWallet,
  githubWallet,
  discordWallet,
  twitchWallet,
  twitterWallet, 
} from '@zerodev/wagmi/rainbowkit'

import {
  argentWallet,
  coinbaseWallet,
  imTokenWallet,
  injectedWallet,
  ledgerWallet,
  metaMaskWallet,
  omniWallet,
  rainbowWallet,
  trustWallet,
  walletConnectWallet,
} from '@rainbow-me/rainbowkit/wallets';

const allowedChains = [avalancheFuji, polygonMumbai]

const { chains, publicClient, webSocketPublicClient } = configureChains(
  allowedChains,
  [publicProvider()]
)

const connectors = connectorsForWallets([
  { groupName: 'Legacy Wallets',
    wallets: [ 
      metaMaskWallet({ chains, projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID as string }),
      walletConnectWallet({ chains, projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID as string }),
      injectedWallet({ chains, projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID as string }),
      ledgerWallet({ chains, projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID as string }),
      omniWallet({ chains, projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID as string }),
      trustWallet({ chains, projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID as string }),
    ]
  },
  {
    groupName: 'Social (AA)',
    wallets: [
      googleWallet({chains: allowedChains, options: { projectId: process.env.NEXT_PUBLIC_ZERODEV_PROJECT_ID as string }}),
      facebookWallet({chains: allowedChains, options: { projectId: process.env.NEXT_PUBLIC_ZERODEV_PROJECT_ID as string }}),
      githubWallet({chains: allowedChains, options: { projectId: process.env.NEXT_PUBLIC_ZERODEV_PROJECT_ID as string }}),
      discordWallet({chains: allowedChains, options: { projectId: process.env.NEXT_PUBLIC_ZERODEV_PROJECT_ID as string }}),
      twitchWallet({chains: allowedChains, options: { projectId: process.env.NEXT_PUBLIC_ZERODEV_PROJECT_ID as string }}),
      twitterWallet({chains: allowedChains, options: { projectId: process.env.NEXT_PUBLIC_ZERODEV_PROJECT_ID as string }}),      
    ],
  },
  {
    groupName: 'EOA',
    wallets: [
      rainbowWallet({ chains, projectId: process.env.NEXT_PUBLIC_ZERODEV_PROJECT_ID as string }),
    ],
  },  
  {
    groupName: 'EOA Wrapped with AA',
    wallets: [
      enhanceWalletWithAAConnector(
        metaMaskWallet({ chains, projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID as string }),
        { projectId: process.env.NEXT_PUBLIC_ZERODEV_PROJECT_ID as string }
      ),
    ],
  },
]);

const demoAppInfo = {
    appName: 'FreedFi',
  };

const config = createConfig({
  autoConnect: false,
  connectors,
  publicClient,
  webSocketPublicClient,
})

export function Providers({ children }: { children: React.ReactNode }) {
    
  const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => setMounted(true), []);

    return (
      <WagmiConfig config={config}>
        <RainbowKitProvider chains={chains} appInfo={demoAppInfo}>
          {mounted && children}
        </RainbowKitProvider>
      </WagmiConfig>
    );
    
  }
