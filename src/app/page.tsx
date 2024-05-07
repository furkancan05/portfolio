"use client";
import React from "react";

// components
import About from "~/components/About";
import AppHeader from "~/components/AppHeader";
import Landing from "~/components/Landing";
import LetsTalk from "~/components/LetsTalk";
import Projects from "~/components/Projects";
import Skills from "~/components/Skills";

// gsap
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const landingRef = React.useRef<HTMLDivElement>(null);

  // React.useEffect(() => {
  //   const context = gsap.context(() => {
  //     const timeline = gsap.timeline({
  //       scrollTrigger: {
  //         // @ts-ignore
  //         target: containerRef.current,
  //         start: "top bottom",
  //         end: "bottom top",
  //         scrub: true,
  //       },
  //     });

  //     timeline.to(landingRef.current, { y: 1000 }, 0);
  //   });

  //   return () => context.revert();
  // }, []);

  return (
    <main ref={containerRef}>
      <AppHeader />

      <Landing ref={landingRef} />

      <Skills />
      <About />
      <Projects />
      <LetsTalk />
    </main>
  );
}
