import React from "react";

import Section from "~/components/shared/Section";
import Title from "~/components/shared/Title";

export default function About() {
  return (
    <Section id="about" background="white" className="pb-44">
      <Title title="About" description="Who Am I" />

      <p className="w-full font-semibold sm:w-1/2">
        I am a simple front-end developer working in Istanbul. I have been
        dealing with software professionally for 3 years as freelancer and on
        office. <br />
        <br /> I have been developing websites, mobile applications and web3
        applications with fluent, high-performance and impressive interfaces.
      </p>
    </Section>
  );
}
