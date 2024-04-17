import React from "react";

import { useParallax } from "react-scroll-parallax";
import AnimatedCursor from "react-animated-cursor";

import Landing from "./components/Landing";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import AppHeader from "./components/AppHeader";
import LetsTalk from "./components/LetsTalk";
import About from "./components/About";
import Follow from "./components/Follow";

function App() {
  const parallax = useParallax({
    translateY: [-100, 100],
  });

  return (
    <div style={{ position: "relative" }}>
      {/* background image */}
      <img
        ref={parallax.ref as React.LegacyRef<HTMLImageElement>}
        src="/images/background.jpg"
        alt=""
        className="absolute w-full object-fit blur-[20px] brightness-[0.2] pointer-events-none -z-10"
      />
      <AnimatedCursor
        color="235,235,235"
        outerSize={30}
        outerAlpha={0}
        outerScale={1.5}
        outerStyle={{ border: "2px solid rgb(235, 235,235)" }}
      />

      <AppHeader />
      <Navigation />

      <Landing />
      <About />
      <Projects />
      <LetsTalk />
      <Follow />
    </div>
  );
}

export default App;
