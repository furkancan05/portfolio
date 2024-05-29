"use client";
import React from "react";

// components
import About from "~/components/About";
import AppHeader from "~/components/AppHeader";
import HireMe from "~/components/HireMe";
import Landing from "~/components/Landing";
import LetsTalk from "~/components/LetsTalk";
import Projects from "~/components/Projects";
import Skills from "~/components/Skills";

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
