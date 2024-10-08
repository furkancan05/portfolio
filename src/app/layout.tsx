import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

import SmoothScrolling from "~/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Furkan Can - Frontend Developer | Mobile Developer | Web3 Developer",
  description:
    "Welcome to Furkan Can's portfolio. Discover my projects and skills in web development.",
  authors: [{ name: "Furkan Can", url: "https://furkancan.com" }],
  keywords:
    "Furkan Can, Front End Developer, Web Developer, React, Next, Web3, Blockchain, JavaScript, Typescript, React, Portfolio",
  openGraph: {
    title:
      "Furkan Can - Frontend Developer | Mobile Developer | Web3 Developer",
    description:
      "Explore Furkan Can's portfolio showcasing projects and skills in front end development",
    images: ["../assets/images/photo.webp"],
    url: "https://furkancan.com",
    type: "website",
  },
  verification: {
    google: "_YyMdvpTT81qIWbI-bNZfPt5clKjggP6WQClRQbaFRk",
  },
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
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
