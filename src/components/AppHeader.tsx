"use client";

import React from "react";
import Link from "next/link";

// components
import Container from "~/components/shared/Container";
import { ArrowDown } from "~/components/shared/Icons";

// config
import { AppNavigation } from "~/config/appNavigation";

export default function AppHeader() {
  const [pageHeight, setPageHeight] = React.useState<number | null>(null);

  React.useEffect(() => {
    const height = document.body.scrollHeight + document.body.clientHeight;
    setPageHeight(height);
  }, []);

  const handleNavigation = (nav: string) => {
    if (nav === "contact") {
      window.scrollTo({
        top: pageHeight as number,
        left: 0,
        behavior: "smooth",
      });
      return;
    }
    const section = document.getElementById(nav);
    if (!section) return;
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="w-full fixed top-0 z-50 mix-blend-difference px-5">
      <Container className="flex items-center justify-between">
        <nav>
          <ul className="flex gap-4 bg-inherit">
            {AppNavigation.map((nav) => (
              <li key={nav}>
                <button
                  className="relative font-[400] text-white text-sm cursor-pointer capitalize after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all"
                  onClick={() => handleNavigation(nav)}
                >
                  {nav}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* download cv */}
        <Link
          href="/CV.pdf"
          target="_blank"
          download="Furkan_Can_Resume.pdf"
          className="relative w-fit font-[400] text-white text-sm group"
        >
          <span className="pr-6 cursor-pointer whitespace-nowrap hidden sm:inline-block">
            Download Resume
          </span>
          <span className="inline-block pr-6 sm:hidden">CV</span>
          <span className="absolute right-0 -translate-y-5 opacity-0 cursor-pointer group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <ArrowDown />
          </span>
          <span className="absolute right-0 translate-y-0 opacity-100 cursor-pointer group-hover:translate-y-5 group-hover:opacity-0 transition-all duration-500">
            <ArrowDown />
          </span>
        </Link>
      </Container>
    </header>
  );
}
