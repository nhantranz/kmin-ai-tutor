import type {Metadata} from 'next';
import React from 'react';
import './globals.scss';
import NavBar from "@/components/nav-bar/NavBar";

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
      <body>
      <NavBar />
      {children}
      </body>
    </html>
  );
}
