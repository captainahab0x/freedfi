'use client';
import './globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import store from '@/store';
import { Provider as ReduxProvider } from 'react-redux';

import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { arbitrumSepolia } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

const projectId = process.env.NEXT_PUBLIC_PROJECTID as string

const { chains, publicClient } = configureChains(
  [arbitrumSepolia],
  [ publicProvider() ]
);

const { connectors } = getDefaultWallets({
  appName: 'FreedFi',
  projectId: 'YOUR_PROJECT_ID',
  chains
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ReduxProvider store={store}>
          <WagmiConfig config={wagmiConfig}>
            <RainbowKitProvider chains={chains}>
              {children}
            </RainbowKitProvider>
          </WagmiConfig>
        </ReduxProvider>
      </body>
    </html>
  );
}
