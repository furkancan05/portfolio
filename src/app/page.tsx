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

export default function Home() {
  return (
    <main>
      <AppHeader />

      <Landing />

      <About />

      <HireMe />

      <Projects />

      <div id="end" />

      <LetsTalk />
    </main>
  );
}
