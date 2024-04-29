import React from "react";
import Marquee from "react-fast-marquee";

import { Skills as SkillsConfig } from "~/config/skills";

export default function Skills() {
  return (
    <section className="flex flex-col w-full h-fit py-2 gap-2">
      <Marquee
        pauseOnHover={true}
        gradient={true}
        gradientColor="#f3f3f3"
        speed={50}
      >
        {SkillsConfig.map((skill) => {
          return (
            <div
              key={skill.name}
              className="flex flex-col items-center w-[200px] rounded-md py-3 mx-1 gap-2 bg-black/30"
            >
              <div className="flex items-center justify-center">
                <img src={skill.imagePath} alt="" className="w-12 h-12" />
              </div>
              <span className="font-bold">{skill.name}</span>
            </div>
          );
        })}
      </Marquee>
      <Marquee
        direction="right"
        pauseOnHover={true}
        gradient={true}
        gradientColor="#f3f3f3"
        speed={50}
      >
        {SkillsConfig.reverse().map((skill) => {
          return (
            <div
              key={skill.name}
              className="flex flex-col items-center w-[200px] rounded-md py-3 mx-1 gap-2 bg-black/30"
            >
              <div className="flex items-center justify-center">
                <img src={skill.imagePath} alt="" className="w-12 h-12" />
              </div>
              <span className="font-bold">{skill.name}</span>
            </div>
          );
        })}
      </Marquee>
    </section>
  );
}
