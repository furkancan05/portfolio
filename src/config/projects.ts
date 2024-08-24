import { StaticImageData } from "next/image";

// assets
import exchange from "~/assets/images/projects/exchange.webp";
import nft from "~/assets/images/projects/nft.webp";
import swap from "~/assets/images/projects/swap.webp";
import movie_app from "~/assets/images/projects/movie-app.png";
import exchange_mobile from "~/assets/images/projects/exchange-mobile.webp";
import denizcilik_tahkim from "~/assets/images/projects/denizcilik-tahkim.webp";
import rick_and_morty_assessment from "~/assets/images/projects/rick-and-morty-assessment.png";
import npm from "~/assets/images/projects/npm.webp";

export type Projects = {
  projectName: string;
  imageLink: StaticImageData;
  url: string;
  description: string;
  sourceUrl?: string;
  techs: string[];
}[];

export const PROJECTS: Projects = [
  {
    projectName: "Exchange",
    imageLink: exchange,
    url: "https://www.balancenetwork.io/",
    description:
      "The Exchange site serves as a CEX exchange site where users can buy and sell cryptocurrencies.",
    techs: ["React", "Redux", "Typescript", "CSS"],
  },
  {
    projectName: "NFT Marketplace",
    imageLink: nft,
    url: "https://nft.balancenetwork.io/",
    description:
      "The NFT project allows users to produce, sell and auction NFTs and collectibles through smart contracts.",
    techs: [
      "Next.Js",
      "Zustand",
      "Typescript",
      "Tailwind CSS",
      "Wagmi JS",
      "Ethers JS",
    ],
  },
  {
    projectName: "Swap",
    imageLink: swap,
    url: "https://swap.balancenetwork.io/",
    description:
      "Swap application is a platform that allows users to swap crypto assets, contribute to liquidity pools and preserve their assets for certain maturities. Additionally, users can stake their crypto assets.",
    techs: ["React", "Zustand", "Typescript", "Tailwind CSS", "Wagmi JS"],
  },
  {
    projectName: "Denizcilik Tahkim",
    imageLink: denizcilik_tahkim,
    url: "https://denizciliktahkim.org/",
    description: "A landing page design job I took from outsource.",
    techs: ["HTML 5", "CSS 3", "Javascript", "PHP"],
  },
  {
    projectName: "Exchange Mobile",
    imageLink: exchange_mobile,
    url: "https://play.google.com/store/search?q=balance%20network%20exchange&c=apps",
    description:
      "The mobile app of Exchange website. Serves on Android Market and Apple Store.",
    techs: ["React Native", "Zustand", "Typescript", "Firebase", "APNS"],
  },
  {
    projectName: "Movie App",
    imageLink: movie_app,
    url: "",
    sourceUrl: "https://github.com/furkancan05/movie-app",
    description:
      "A movie tracking application written with Expo. Using the MovieDb infrastructure, users can follow current movies, categorize them and manage their favorite movies.",
    techs: [
      "React Native",
      "Expo",
      "Expo Router",
      "Zustand",
      "Typescript",
      "Async Storage",
    ],
  },
  {
    projectName: "Rick and Morty Assessment",
    imageLink: rick_and_morty_assessment,
    url: "",
    sourceUrl: "https://github.com/furkancan05/rick-and-morty-assessment",
    description: "The task I did for the mobile developer job application",
    techs: [
      "React Native",
      "Tailwind Css",
      "Expo",
      "Expo Router",
      "Zustand",
      "Immer",
    ],
  },
  {
    projectName: "can-zoom",
    imageLink: npm,
    url: "https://can-zoom-demo.vercel.app/",
    description:
      "An npm package that can zoom on hover and click, also customize uploaded images",
    techs: ["Typescript"],
    sourceUrl: "https://www.npmjs.com/package/can-zoom",
  },
];
