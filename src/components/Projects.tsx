"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

// components
import Title from "~/components/shared/Title";
import { ArrowRight } from "~/components/shared/Icons";
import Section from "~/components/shared/Section";

// config
import { Projects as ProjectsType, PROJECTS } from "~/config/projects";
import { motion } from "framer-motion";

export default function Projects() {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * index,
      },
    }),
  };

  return (
    <Section
      id="projects"
      background="white"
      className="w-full bg-white mb-[100vh]"
    >
      <Title title="Projects" description="My Portfolio" />

      <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </Section>
  );

  function ProjectCard({ project }: { project: ProjectsType[0] }) {
    return (
      <div className="flex flex-col justify-end gap-2 w-full shadow-2xl rounded-lg h-[480px] group overflow-hidden">
        <div className="w-full aspect-video overflow-hidden rounded-t-md">
          <Image
            src={project.imageLink}
            alt=""
            width={700}
            height={700}
            loading="lazy"
            className="w-full h-full rounded-md scale-110 group-hover:scale-[102%] transition-transform duration-1000 object-cover"
          />
        </div>

        <p className="text-lg font-bold px-2">{project.projectName}</p>

        <p className="font-semibold text-sm flex-1 px-2">
          {project.description}
        </p>

        {/* techs */}
        <div className="flex text-sm font-semibold gap-2 flex-wrap px-2 h-fit">
          {project.techs.map((tech) => (
            <div
              key={tech}
              className="flex rounded-full px-3 py-1.5 bg-black text-white text-xs"
            >
              {tech}
            </div>
          ))}
        </div>

        {/* links */}
        <div className="flex h-8 justify-between items-end mx-2 mb-2">
          {project.url ? (
            <Link
              href={project.url}
              target="_blank"
              className="relative text-sm group/link cursor-pointer"
            >
              <span>View</span>

              <span className="absolute right-0 translate-x-4 opacity-0 group-hover/link:translate-x-6 group-hover/link:opacity-100 transition-all duration-500">
                <ArrowRight />
              </span>
              <span className="absolute right-0 translate-x-6 opacity-100 group-hover/link:translate-x-8 group-hover/link:opacity-0 transition-all duration-500">
                <ArrowRight />
              </span>
            </Link>
          ) : null}

          {project.sourceUrl ? (
            <Link
              href={project.sourceUrl}
              target="_blank"
              className="relative text-sm group/link cursor-pointer mr-6"
            >
              <span>Source</span>

              <span className="absolute right-0 translate-x-4 opacity-0 group-hover/link:translate-x-6 group-hover/link:opacity-100 transition-all duration-500">
                <ArrowRight />
              </span>
              <span className="absolute right-0 translate-x-6 opacity-100 group-hover/link:translate-x-8 group-hover/link:opacity-0 transition-all duration-500">
                <ArrowRight />
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    );
  }
}
