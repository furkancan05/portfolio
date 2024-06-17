"use client";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Globe } from "~/components/Globe";

gsap.registerPlugin(ScrollTrigger);

function Landing() {
  const triggerRef = React.useRef<HTMLDivElement>(null);
  const targetRef = React.useRef<HTMLDivElement>(null);

  // parallax scroll to texts
  React.useLayoutEffect(() => {
    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          // @ts-ignore
          target: triggerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      timeline.to(targetRef.current, { y: -300 }, 0);
    });

    return () => context.revert();
  }, []);

  return (
    <section
      ref={triggerRef}
      id="home"
      className="fixed top-0 bg-black w-full text-white h-screen p-5 -z-20 overflow-hidden"
    >
      <div
        ref={targetRef}
        className="max-w-[1200px] h-full mx-auto flex flex-col items-center justify-center overflow-hidden gap-10 md:justify-between md:flex-row md:gap-0"
      >
        <div className="flex flex-col items-center text-center md:text-left md:items-start z-50">
          <small className="font-semibold text-white/60">
            Frontend Developer
          </small>
          <h1 className="text-[48px] font-black font-['NF_Ultra'] tracking-[0.3rem]">
            FURKAN CAN
          </h1>
          <p className="font-semibold text-white/60">
            Hello I am Furkan Can. I`m working as Frontend Developer, <br />
            also Mobile Applications and Web3 Projects.
          </p>
        </div>
      </div>

      <span className="visible absolute bottom-10 left-1/2 -translate-x-1/2 text-white font-semibold text-sm mask-image z-50">
        Scroll to explore
      </span>

      <div className="-z-20">
        <Globe />
      </div>
    </section>
  );
}

export default Landing;
