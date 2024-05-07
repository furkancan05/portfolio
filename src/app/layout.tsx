import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import SmoothScrolling from "~/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Furkan Can - Frontend Developer | Mobile Developer | Web3 Developer",
  description: "Furkan Can Official Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
