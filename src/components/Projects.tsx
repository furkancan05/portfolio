import React from "react";
import Image from "next/image";

import Title from "~/components/shared/Title";

import { PROJECTS } from "~/config/projects";

export default function Projects() {
  return (
    <div id="projects" className="w-full max-w-[1200px] mx-auto px-5">
      <Title title="Projects" description="My Portfolio" />

      <div className="flex flex-col w-full h-full gap-20">
        {PROJECTS.map((project) => (
          <div className="flex flex-row even:flex-row-reverse gap-10">
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
