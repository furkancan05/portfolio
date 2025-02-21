import { StaticImageData } from "next/image";

// assets
import balance_software from "~/assets/images/projects/balance-software.webp";
import exchange from "~/assets/images/projects/exchange.webp";
import nft from "~/assets/images/projects/nft.webp";
import swap from "~/assets/images/projects/swap.webp";
import articareer from "~/assets/images/projects/articareer.webp";
import movie_app from "~/assets/images/projects/movie-app.png";
import exchange_mobile from "~/assets/images/projects/exchange-mobile.webp";
import denizcilik_tahkim from "~/assets/images/projects/denizcilik-tahkim.webp";
import rick_and_morty_assessment from "~/assets/images/projects/rick-and-morty-assessment.png";
import blindlover from "~/assets/images/projects/blindlover.webp";
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
    projectName: "NFT Marketplace",
    imageLink: nft,
    url: "https://nftmarketplace-wheat-seven.vercel.app/",
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
    url: "https://swap-six-beryl.vercel.app/",
    description:
      "Swap application is a platform that allows users to swap crypto assets, contribute to liquidity pools and preserve their assets for certain maturities. Additionally, users can stake their crypto assets.",
    techs: ["React", "Zustand", "Typescript", "Tailwind CSS", "Wagmi JS"],
  },
  {
    projectName: "Exchange",
    imageLink: exchange,
    url: "https://exchange-orcin-iota.vercel.app/market",
    description:
      "The Exchange site serves as a CEX exchange site where users can buy and sell cryptocurrencies.",
    techs: ["React", "Redux", "Typescript", "CSS"],
  },
  {
    projectName: "Denizcilik Tahkim",
    imageLink: denizcilik_tahkim,
    url: "https://denizciliktahkim.org/",
    description: "A landing page design job I took from outsource.",
    techs: ["HTML 5", "CSS 3", "Javascript", "PHP"],
  },
  {
    projectName: "ArtiCareer",
    imageLink: articareer,
    url: "https://articareer.com/",
    description:
      "An artificial intelligence-supported website that allows users to make character analysis and future career choices based on personality based on the survey they enter.",
    techs: ["React", "Zustand", "Typescript", "Tailwind CSS"],
  },
  {
    projectName: "Blindlover",
    imageLink: blindlover,
    url: "https://apps.apple.com/tr/app/blind-lover/id6740008681?l=tr",
    description:
      "Artificial intelligence-supported mobile application where partners can see the compatibility between each other.",
    techs: [
      "React Native",
      "Zustand",
      "Typescript",
      "Firebase",
      "APNS",
      "Google Ads",
    ],
  },
  {
    projectName: "Exchange Mobile",
    imageLink: exchange_mobile,
    url: "",
    description: "The mobile app of Exchange website.",
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
