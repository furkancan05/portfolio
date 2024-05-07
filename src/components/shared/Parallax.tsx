"use client";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useWindowSize } from "@studio-freight/hamo";

interface ParallaxProps {
  className?: string;
  children: React.ReactNode;
  speed?: number;
  id?: string;
}

export default function Parallax({
  className,
  children,
  speed = 1,
  id = "parallax",
}: ParallaxProps) {
  const trigger = React.useRef<HTMLDivElement>(null);
  const target = React.useRef<HTMLDivElement>(null);
  const timeline = React.useRef(null);

  const windowsize = useWindowSize() as { width: number; height: number };

  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const y = windowsize.width! * speed * 0.1;

    const setY = gsap.quickSetter(target.current, "y", "px");

    //@ts-ignore
    timeline.current = gsap.timeline({
      scrollTrigger: {
        id,
        trigger: trigger.current,
        scrub: true,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (e) => {
          console.log("first", e.progress - 0.5);

          setY((e.progress - 0.5) * -y);
        },
      },
    });

    return () => {
      //@ts-ignore
      timeline.current.kill();
    };
  }, [id, windowsize, speed]);

  return (
    <div ref={trigger} className={className}>
      <div ref={target}>{children}</div>
    </div>
  );
}
