import React from "react";
import Link from "next/link";

import Container from "~/components/Container";

import { AppNavigation } from "~/config/appNavigation";

export default function AppHeader() {
  return (
    <header className="w-full fixed top-0 z-50 mix-blend-difference">
      <Container className="flex items-center justify-between">
        <nav>
          <ul className="flex gap-4">
            {AppNavigation.map((nav) => (
              <li key={nav}>
                <Link
                  href={`#${nav}`}
                  className="relative font-semibold text-white text-sm cursor-pointer capitalize after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all"
                >
                  {nav}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button className="relative font-semibold text-white text-sm after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all">
          Contact
        </button>
      </Container>
    </header>
  );
}
