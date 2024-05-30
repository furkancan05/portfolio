import React from "react";

// components
import Container from "~/components/shared/Container";

// utils
import { cn } from "~/utils/cn";

interface SectionProps {
  id: string;
  large?: boolean;
  children: React.ReactNode;
  background: "black" | "white";
  className?: string;
}

export default function Section(props: SectionProps) {
  return (
    <section
      id={props.id}
      className={cn("w-full bg-white text-black px-5", {
        "bg-black": props.background === "black",
        "text-white": props.background === "black",
        "h-fit": props.large,
      })}
    >
      <Container className={cn("", props.className)}>
        {props.children}
      </Container>
    </section>
  );
}
