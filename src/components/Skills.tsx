import React from "react";
import Image from "next/image";

// conponents
import Title from "~/components/shared/Title";
import Container from "~/components/shared/Container";

// config
import { Skills as SkillsConfig } from "~/config/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="flex flex-col bg-white w-full h-fit gap-2 z-50 mt-[100vh] pb-44 px-5"
    >
      <Container>
        <Title title="Skills" description="Using Techs" />

        <div className="flex flex-col gap-10 lg:gap-20">
          <div className="flex justify-center gap-5 md:gap-10">
            {SkillsConfig[0].map((skill, index) => {
              return (
                <div
                  key={index}
                  className="relative bg-white p-2 w-[78px] md:w-full md:max-w-28 aspect-square md:p-5 shadow-lg rounded-lg hover:cursor-pointer overflow-hidden group"
                >
                  <Image
                    src={skill.imagePath}
                    alt=""
                    width={130}
                    height={130}
                    loading="lazy"
                    className="w-full h-full"
                  />

                  <div className="absolute top-0 left-0 rounded-lg w-full h-full bg-black/0 group-hover:bg-black/80 transition-colors duration-1000" />

                  <p className="absolute text-sm lg:text-lg left-1/2 -translate-x-1/2 top-1/2 translate-y-[100px] group-hover:-translate-y-1/2 text-center text-white font-black transition-all duration-500">
                    {skill.name}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="flex flex-wrap justify-center gap-5 md:gap-10">
            {SkillsConfig[1].map((skill, index) => {
              return (
                <div
                  key={index}
                  className="relative bg-white p-2 w-[78px] md:w-full md:max-w-28 aspect-square md:p-5 shadow-lg rounded-lg hover:cursor-pointer overflow-hidden group"
                >
                  <Image
                    src={skill.imagePath}
                    alt=""
                    width={130}
                    height={130}
                    loading="lazy"
                    className="w-full h-full"
                  />

                  <div className="absolute top-0 left-0 rounded-lg w-full h-full bg-black/0 group-hover:bg-black/80 transition-colors duration-1000" />

                  <p className="absolute text-sm lg:text-lg left-1/2 -translate-x-1/2 top-1/2 translate-y-[100px] group-hover:-translate-y-1/2 text-center text-white font-black transition-all duration-500">
                    {skill.name}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center gap-5 md:gap-10">
            {SkillsConfig[2].map((skill, index) => {
              return (
                <div
                  key={index}
                  className="relative bg-white p-2 w-[78px] md:w-full md:max-w-28 aspect-square md:p-5 shadow-lg rounded-lg hover:cursor-pointer overflow-hidden group"
                >
                  <Image
                    src={skill.imagePath}
                    alt=""
                    width={130}
                    height={130}
                    loading="lazy"
                    className="w-full h-full"
                  />

                  <div className="absolute top-0 left-0 rounded-lg w-full h-full bg-black/0 group-hover:bg-black/80 transition-colors duration-1000" />

                  <p className="absolute text-sm lg:text-lg left-1/2 -translate-x-1/2 top-1/2 translate-y-[100px] group-hover:-translate-y-1/2 text-center text-white font-black transition-all duration-500">
                    {skill.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
