"use client";
import React from "react";
import dynamic from "next/dynamic";

import Landing from "~/components/Landing";

// components
const About = dynamic(() => import("~/components/About"));
const AppHeader = dynamic(() => import("~/components/AppHeader"));
const HireMe = dynamic(() => import("~/components/HireMe"));
const LetsTalk = dynamic(() => import("~/components/LetsTalk"));
const Projects = dynamic(() => import("~/components/Projects"));
const Skills = dynamic(() => import("~/components/Skills"));

export default function Home() {
  return (
    <main>
      <AppHeader />

      <Landing />

      <Skills />

      <About />

      <HireMe />

      <Projects />

      <LetsTalk />
    </main>
  );
}
