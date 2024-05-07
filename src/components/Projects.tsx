"use client";
import React from "react";
import Image from "next/image";

import Title from "~/components/shared/Title";

import { PROJECTS } from "~/config/projects";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section from "./shared/Section";

export default function Projects() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sections = gsap.utils.toArray(ref);

    // ScrollTrigger.create({
    //   trigger: containerRef.current,
    //   start: "top top",

    //   end: "+=" + 1000,
    //   pin: true,
    //   animation: tween,
    //   scrub: 1,
    // });
    gsap.to(ref, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + containerRef.current?.offsetWidth,
      },
    });
  }, []);

  return (
    <div className="mb-[100vh]">
      <Section id="projects" background="white" className="">
        <Title title="Projects" description="My Portfolio" />

        <div className="w-full h-[500px] flex bg-red-500 overflow-scroll">
          {PROJECTS.map((project) => (
            <div
              key={project.url}
              ref={ref}
              className="w-full flex flex-row even:flex-row-reverse gap-10"
            >
              {/* left side */}
              <div className="w-48 aspect-video flex-1 shadow-2xl p-2 rounded-lg">
                <Image
                  src={project.imageLink}
                  alt=""
                  width={300}
                  height={300}
                  loading="lazy"
                  className="w-full h-full rounded-md"
                />
              </div>

              {/* right side */}
              <div className="flex flex-1 flex-col gap-3 justify-center">
                <p className="text-lg font-bold">{project.projectName}</p>
                <span className="text-semibold">{project.description}</span>

                {/* techs */}
                <div className="flex text-sm font-semibold gap-2 flex-wrap">
                  {project.techs.map((tech) => (
                    <div
                      key={tech}
                      className="rounded-full px-4 py-2 bg-black text-white"
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
                    className="relative font-semibold after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all"
                  >
                    Wiew
                  </Link>

                  {project.sourceUrl ? (
                    <Link
                      href={project.sourceUrl}
                      target="_blank"
                      className="relative font-semibold after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all"
                    >
                      Source
                    </Link>
                  ) : (
                    <div />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
    // <div
    //   id="projects"
    //   ref={containerRef}
    //   className="w-full max-w-[1200px] bg-white mx-auto px-5 py-44 mb-[100vh] bg-blue-500"
    // >
    //   <Title title="Projects" description="My Portfolio" />

    //   <div className="flex flex-col w-full h-full gap-40 bg-white bg-red-500">
    //     {PROJECTS.map((project) => (
    //       <div
    //         key={project.url}
    //         ref={ref}
    //         className="flex flex-row even:flex-row-reverse gap-10"
    //       >
    //         {/* left side */}
    //         <div className="w-48 aspect-video flex-1 shadow-2xl p-2 rounded-lg">
    //           <Image
    //             src={project.imageLink}
    //             alt=""
    //             width={300}
    //             height={300}
    //             loading="lazy"
    //             className="w-full h-full rounded-md"
    //           />
    //         </div>

    //         {/* right side */}
    //         <div className="flex flex-1 flex-col gap-3 justify-center">
    //           <p className="text-lg font-bold">{project.projectName}</p>
    //           <span className="text-semibold">{project.description}</span>

    //           {/* techs */}
    //           <div className="flex text-sm font-semibold gap-2 flex-wrap">
    //             {project.techs.map((tech) => (
    //               <div
    //                 key={tech}
    //                 className="rounded-full px-4 py-2 bg-black text-white"
    //               >
    //                 {tech}
    //               </div>
    //             ))}
    //           </div>

    //           <div className="h-full"></div>

    //           {/* links */}
    //           <div className="flex justify-between">
    //             <Link
    //               href={project.url}
    //               target="_blank"
    //               className="relative font-semibold after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all"
    //             >
    //               Wiew
    //             </Link>

    //             {project.sourceUrl ? (
    //               <Link
    //                 href={project.sourceUrl}
    //                 target="_blank"
    //                 className="relative font-semibold after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all"
    //               >
    //                 Source
    //               </Link>
    //             ) : (
    //               <div />
    //             )}
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
}
