import React from "react";

import Section from "~/components/shared/Section";
import Title from "~/components/shared/Title";

export default function About() {
  return (
    <Section id="about" background="white" className="pb-44">
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
    </Section>
  );
}
