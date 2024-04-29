import React from "react";

import Container from "~/components/Container";

import { cn } from "~/utils/cn";

interface SectionProps {
  id: string;
  large?: boolean;
  children: React.ReactNode;
  background: "black" | "white";
  className?: string;
}

export default function Section({
  id,
  large,
  children,
  background,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("w-full h-[100vh] text-white", {
        "bg-black": background === "black",
        "text-black": background === "white",
        "h-fit": large,
      })}
    >
      <Container className={cn("", className)}>{children}</Container>
    </section>
  );
}
