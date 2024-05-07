"use client";
import React from "react";

import { Globe } from "~/components/Globe";

const Landing = React.forwardRef<HTMLDivElement>(function Loading(_, ref) {
  return (
    <section
      ref={ref}
      id="home"
      className="top-0 absolute bg-black w-full text-white h-screen p-5 -z-10 overflow-hidden"
    >
      <div className="max-w-[1200px] h-full mx-auto flex flex-col items-center justify-center overflow-hidden gap-10 md:justify-between md:flex-row md:gap-0">
        <div className="flex flex-col items-center text-center md:text-left md:items-start z-50">
          <small className="font-semibold text-white/60">
            Frontend Developer
          </small>
          <p className="text-[48px] font-black font-['NF_Ultra'] tracking-[0.3rem]">
            FURKAN CAN
          </p>
          <p className="font-semibold text-white/60">
            Hello I am Furkan Can. I`m working as Frontend Developer, <br />
            also Mobile Applications and Web3 Projects.
          </p>
        </div>
      </div>

      <span className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white font-semibold text-sm mask-image z-50">
        Scroll to explore
      </span>

      <Globe />
    </section>
  );
});

export default Landing;
