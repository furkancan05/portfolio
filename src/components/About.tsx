import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// components
import Section from "~/components/shared/Section";
import Title from "~/components/shared/Title";

// config
import { Skills } from "~/config/skills";

export default function About() {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
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
    <Section id="about" background="white" className="pb-44 mt-[100vh]">
      <Title title="About" description="Who Am I" />

      <p className="w-full font-semibold">
        Hello, I am a front-end developer living and working in Istanbul with 3
        years of professional experience. I have been actively involved in
        software development both as a freelancer and in an office setting.
        During this time, I have specialized in developing websites, mobile
        applications, and web3 applications.
        <br /> <br /> My focus is on creating fluid, high-performance, and
        impressive interfaces that prioritize user experience. My passion for my
        work and interest in technological advancements have enabled me to
        provide innovative and creative solutions in my projects. <br /> <br />{" "}
        In the dynamic business environment of Istanbul, I have always aimed to
        deliver the best by maintaining the highest level of customer
        satisfaction.
      </p>

      <div className="mt-14 flex w-full flex-wrap gap-6 px-5 justify-center sm:px-0 lg:justify-center">
        {Skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            className="relative group"
          >
            <Image
              src={skill.imagePath}
              alt=""
              width={100}
              height={100}
              loading="lazy"
              className="w-14 aspect-square grayscale hover:grayscale-0 transition-all rounded-full"
            />

            <div className="absolute -top-6 opacity-0 text-xs -left-1/2 translate-x-0 whitespace-nowrap font-semibold text-white bg-black/60 p-2 rounded-md transition-all group-hover:-top-10 group-hover:opacity-100">
              {skill.name}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
