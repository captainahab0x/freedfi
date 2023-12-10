'use client';
import './globals.css';
import store from '@/store';
import { Provider as ReduxProvider } from 'react-redux';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ReduxProvider store={store}>{children}</ReduxProvider>
      </body>
    </html>
  );
}
