import React from "react";
import Link from "next/link";
import Image from "next/image";

import Section from "~/components/Section";
import { Social } from "~/config/social";

export default function Landing() {
  return (
    <Section
      id="home"
      background="black"
      className="relative flex flex-col items-center justify-center overflow-hidden gap-10 md:justify-between md:flex-row md:gap-0"
    >
      <div className="flex flex-col items-center text-center md:text-left md:items-start">
        <small className="text-lg font-semibold text-white/60">
          Frontend Developer
        </small>
        <p className="text-[72px] font-black">Furkan Can</p>
        <p className="font-semibold text-white/60">
          Hello I am Furkan Can. I`m currently working on Frontend Developer,{" "}
          <br />
          also Mobile Applications and Web3 Projects.
        </p>

        <Link
          href="/CV.pdf"
          target="_blank"
          className="relative w-fit font-bold mt-5 after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-1 after:bg-primary hover:after:w-full after:transition-all md:mt-10"
        >
          Download Resume
        </Link>
      </div>

      <Image
        src="/images/photo.jpeg"
        alt=""
        width={500}
        height={500}
        className="w-[50vw] md:w-[30vw] aspect-square rounded-full"
      />

      {/* Social */}
      <div className="absolute bottom-2 right-0 flex gap-2">
        {Social.map((social) => (
          <div className="p-2 rounded-full border border-0.5 border-white">
            <Link key={social.name} href={social.link}>
              {social.icon}
            </Link>
          </div>
        ))}
      </div>

      {/* Name at the bottom  */}
      <p className="absolute font-black origin-center tracking-widest opacity-15 text-[72px] -bottom-12 min-[580px]:text-[140px] min-[580px]:-bottom-24 min-[800px]:text-[200px] min-[800px]:-bottom-32">
        Furkan
      </p>
    </Section>
  );
}
