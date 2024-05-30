"use client";
import React from "react";
import dynamic from "next/dynamic";

// components
const About = dynamic(() => import("~/components/About"));
const AppHeader = dynamic(() => import("~/components/AppHeader"));
const HireMe = dynamic(() => import("~/components/HireMe"));
const Landing = dynamic(() => import("~/components/Landing"));
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
