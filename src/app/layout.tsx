import type {Metadata} from 'next';
import React from 'react';
import './globals.scss';

export const metadata: Metadata = {
  title: 'Sample NextJS App',
  description: 'Please change this description',
};

export default function RootLayout({
  children,
}: Readonly<{
	children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
