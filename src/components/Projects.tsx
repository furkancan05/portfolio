"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

// components
import Title from "~/components/shared/Title";

// config
import { PROJECTS } from "~/config/projects";

// gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useLayoutEffect(() => {
    let gsapContext = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");

      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          // snap: 1 / (panels.length - 1),
          end: () => "+=" + (scrollRef.current?.offsetWidth || 0) * 4,
        },
      });
    }, containerRef);

    return () => gsapContext.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      id="projects"
      className="w-full h-screen bg-white mb-[100vh] relative"
    >
      <div className="w-full md:max-w-[1200px] absolute top-0 left-1/2 px-5 -translate-x-1/2 mix-blend-difference text-white z-50 sm:px-0">
        <Title title="Projects" description="My Portfolio" />
      </div>

      <div ref={scrollRef} className="w-full h-full flex overflow-hidden">
        {PROJECTS.map((project) => (
          <div
            key={project.url}
            className="relative min-w-[100vw] w-[100vw] h-full panel flex items-center odd:bg-black group"
          >
            <div className="max-w-[1250px] mx-auto flex flex-col md:flex-row items-center gap-10 p-5">
              {/* left side */}
              <Link
                href={project.url}
                target="_blank"
                className="w-full md:w-[50%] md:max-w-[50%] aspect-video flex-1 rounded-lg overflow-hidden"
              >
                <Image
                  src={project.imageLink}
                  alt=""
                  width={700}
                  height={700}
                  loading="lazy"
                  className="w-full h-full rounded-md scale-110 hover:scale-100 transition-transform duration-1000 object-cover"
                />
              </Link>

              {/* right side */}
              <div className="flex flex-1 flex-col gap-3 justify-center text-black group-odd:text-white">
                <p className="text-3xl font-bold">{project.projectName}</p>
                <span className="font-semibold">{project.description}</span>

                {/* techs */}
                <div className="flex text-sm font-semibold gap-2 flex-wrap">
                  {project.techs.map((tech) => (
                    <div
                      key={tech}
                      className="rounded-full px-4 py-2 bg-black text-white group-odd:bg-white group-odd:text-black"
                    >
                      {tech}
                    </div>
                  ))}
                </div>

                <div className="h-full"></div>

                {/* links */}
                <div className="flex justify-between">
                  <Link
                    href={project.url}
                    target="_blank"
                    className="relative font-semibold after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-black group-odd:after:bg-white hover:after:w-full after:transition-all"
                  >
                    View
                  </Link>

                  {project.sourceUrl ? (
                    <Link
                      href={project.sourceUrl}
                      target="_blank"
                      className="relative font-semibold after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-black group-odd:after:bg-white hover:after:w-full after:transition-all"
                    >
                      Source
                    </Link>
                  ) : (
                    <div />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
