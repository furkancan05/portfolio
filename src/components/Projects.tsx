import Title from "./Title";
import Animate from "./Animate";

import { PROJECTS } from "../config/projects";

import { Project } from "../types/projects.types";
import { Github, Link } from "../icons/icons";

export default function Projects() {
  return (
    <section className="px-[160px]">
      <Title title="Projects" />

      <div className="flex-1 grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-3">
        {PROJECTS.map((project, i) => {
          return (
            <Animate delay={i * 200}>
              <ProjectCard key={project.projectName} project={project} />
            </Animate>
          );
        })}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="w-full rounded-lg p-3 border border-white/30 font-bold hover:-translate-y-2 hover:bg-white/10 transition-all">
      <div className="w-full aspect-video rounded-t-lg overflow-hidden">
        <img
          src={project.imageLink}
          alt=""
          className="w-full h-full object-fit"
        />
      </div>

      <div className="h-44 my-2">
        <p className="text-lg">{project.projectName}</p>
        <small className="text-white/80">{project.description}</small>
      </div>

      <div className="flex overflow-scroll no-scrollbar gap-2">
        {project.techs.map((tech) => {
          return (
            <div
              key={tech}
              className="border border-white/30 bg-white/10 rounded-full px-3 py-1"
            >
              <p className="text-xs whitespace-nowrap">{tech}</p>
            </div>
          );
        })}
      </div>

      <div className="w-full mt-4 flex items-center justify-between">
        <a
          className="flex item-center gap-2 text-white/50 hover:text-white"
          href={project.url}
          target="_blank"
          rel="noreferrer"
        >
          <Link />

          <span className="text-xs font-bold transition-colors">
            Live Prewiew
          </span>
        </a>

        {project.sourceUrl && (
          <a
            href={project.sourceUrl}
            target="_blank"
            rel="noreferrer"
            className="flex item-center gap-2 text-white/50 hover:text-white"
          >
            <Github />

            <span className="text-xs font-bold transition-colors">
              View source code
            </span>
          </a>
        )}
      </div>
    </div>
  );
}
