import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

import { ReactNode } from 'react';
import { CompareProvider } from '../context/CompareContext';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'My Sensor Ranker',
  description: 'Sistema moderno em Next.js para ranquear, avaliar e comparar sensores de temperatura como DHT22, LM35, TMP36 e mais.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <CompareProvider>
          {children}
        </CompareProvider>
      </body>
    </html>
  );
}
