"use client";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Globe } from "~/components/Globe";

// utils
import { cn } from "~/utils/cn";

gsap.registerPlugin(ScrollTrigger);

function Landing() {
  const triggerRef = React.useRef<HTMLDivElement>(null);
  const targetRef = React.useRef<HTMLDivElement>(null);

  const [visible, setVisible] = React.useState(true);

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

  // changes landing pages z index on scroll
  // to set footer visible
  const scrollTrigger = () => {
    if (window.scrollY > 1000) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", () => scrollTrigger());

    return () => window.removeEventListener("scroll", () => scrollTrigger());
  }, []);

  return (
    <section
      ref={triggerRef}
      id="home"
      className={cn(
        "fixed top-0 bg-black w-full text-white h-screen p-5 -z-30 overflow-hidden",
        {
          "-z-10": visible,
        }
      )}
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

      <span
        className={cn(
          "visible absolute bottom-10 left-1/2 -translate-x-1/2 text-white font-semibold text-sm mask-image z-50",
          { hidden: !visible }
        )}
      >
        Scroll to explore
      </span>

      <div className={cn("-z-10", { "-z-30": !visible })}>
        <Globe />
      </div>
    </section>
  );
}

export default Landing;
