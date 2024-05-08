import { StaticImageData } from "next/image";

// assets
import exchange from "~/assets/images/projects/exchange.png";
import nft from "~/assets/images/projects/nft.png";
import swap from "~/assets/images/projects/swap.png";
import exchange_mobile from "~/assets/images/projects/exchange-mobile.png";
import denizcilik_tahkim from "~/assets/images/projects/denizcilik-tahkim.png";
import npm from "~/assets/images/projects/npm.png";

type Projects = {
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
    projectName: "Exchange Mobile",
    imageLink: exchange_mobile,
    url: "https://play.google.com/store/search?q=balance%20network%20exchange&c=apps",
    description:
      "The mobile app of Exchange website. Serves on Android Market and Appple Store.",
    techs: ["React Native", "Zustand", "Typescript", "Firebase", "APNS"],
  },
  {
    projectName: "Denizcilik Tahkim",
    imageLink: denizcilik_tahkim,
    url: "https://denizciliktahkim.org/",
    description: "A landing page design job I took from outsource.",
    techs: ["HTML 5", "CSS 3", "Javascript", "PHP"],
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
