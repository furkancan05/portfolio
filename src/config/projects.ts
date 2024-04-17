import { Project } from "../types/projects.types";

export const PROJECTS: Project[] = [
  {
    projectName: "Exchange",
    imageLink: "/images/projects/exchange.png",
    url: "https://www.balancenetwork.io/",
    description:
      "The Exchange site serves as a CEX exchange site where users can buy and sell cryptocurrencies.",
    techs: ["React", "Typescript", "CSS"],
  },
  {
    projectName: "NFT Marketplace",
    imageLink: "/images/projects/nft.png",
    url: "https://nft.balancenetwork.io/",
    description:
      "The NFT project allows users to produce, sell and auction NFTs and collectibles through smart contracts.",
    techs: ["Next.Js", "Typescript", "Tailwind CSS", "Wagmi JS", "Ethers JS"],
  },
  {
    projectName: "Swap",
    imageLink: "/images/projects/swap.png",
    url: "https://swap.balancenetwork.io/",
    description:
      "Swap application is a platform that allows users to swap crypto assets, contribute to liquidity pools and preserve their assets for certain maturities. Additionally, users can stake their crypto assets.",
    techs: ["React", "Typescript", "Tailwind CSS", "Wagmi JS"],
  },
  {
    projectName: "can-zoom",
    imageLink: "/images/projects/npm.png",
    url: "https://can-zoom-demo.vercel.app/",
    description:
      "An npm package that can zoom on hover and click, also customize uploaded images",
    techs: ["Typescript"],
    sourceUrl: "https://www.npmjs.com/package/can-zoom",
  },
];
