import React from "react";

import Container from "~/components/shared/Container";

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
      className={cn("w-full  text-black", {
        "bg-black": background === "black",
        "text-white": background === "black",
        "h-fit": large,
      })}
    >
      <Container className={cn("", className)}>{children}</Container>
    </section>
  );
}
