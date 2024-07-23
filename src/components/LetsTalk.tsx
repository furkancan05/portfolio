"use client";

import React from "react";
import Link from "next/link";

// components
import Section from "~/components/shared/Section";
import Title from "~/components/shared/Title";
import { Loader } from "~/components/shared/Icons";
import { Input, TextArea } from "~/components/shared/Input";

// config
import { Social } from "~/config/social";

// hooks
import useEmail from "~/hooks/useEmail";

// utils
import { cn } from "~/utils/cn";

export default function LetsTalk() {
  const {
    form,
    loading,
    disabledButton,
    buttonText,
    handleInputs,
    handleSubmit,
  } = useEmail();

  const [visible, setVisible] = React.useState(true);
  const year = new Date().getFullYear();

  // changes landing pages z index on scroll
  // to set footer visible
  const scrollTrigger = () => {
    if (window.scrollY > 1000) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", () => scrollTrigger());

    return () => window.removeEventListener("scroll", () => scrollTrigger());
  }, []);

  return (
    <footer
      className={cn(
        "flex flex-col justify-between fixed bottom-0 w-full h-screen bg-black -z-30",
        {
          "-z-10": !visible,
        }
      )}
    >
      <div />

      <Section id="contact" background="black">
        <Title
          title="Contact"
          description="Lets Talk"
          descClassName="text-white/10"
        />

        <div className="flex flex-col items-center justify-between gap-10 sm:flex-row">
          <div className="flex-1 font-extrabold leading-[50px] sm:leading-[75px] uppercase text-center sm:text-left">
            <p className="text-lg sm:text-[max(max(12px,2.5vw))]">
              Lets build together
            </p>
            <p className="text-[40px] sm:text-[max(max(24px,4.5vw))]">
              something
            </p>
            <p className="text-[48px] text-primary sm:text-[max(max(24px,5.5vw))]">
              COOL
            </p>
          </div>

          <form
            onSubmit={(e) => handleSubmit(e)}
            className="flex flex-col gap-4 flex-1 w-full md:min-w-[300px] md:max-w-[450px] font-bold bg-black/20 rounded-md p-5 md:px-10 md:py-5 border border-white/20"
          >
            <Input
              label="Full Name"
              name="fullName"
              placeholder="John Doe"
              required
              value={form.fullName}
              onChange={(e) => handleInputs(e)}
            />
            <Input
              label="Email"
              name="email"
              placeholder="johndoe@email.com"
              value={form.email}
              onChange={(e) => handleInputs(e)}
            />

            <TextArea
              label="Message"
              name="message"
              placeholder="Hello, Mr. Furkan..."
              value={form.message}
              onChange={(e) => handleInputs(e)}
            />

            <button
              type="submit"
              disabled={disabledButton || loading}
              className="text-lg bg-primary/90 rounded-full py-3 w-full hover:bg-primary transition-colors disabled:bg-primary/20 disabled:text-white/50"
            >
              {loading ? (
                <div className="w-fit mx-auto animate-spin">
                  <Loader />
                </div>
              ) : (
                buttonText
              )}
            </button>
          </form>
        </div>
      </Section>

      {/* social links */}
      <div className="w-full max-w-[1200px] mx-auto flex flex-col justify-between py-4 border-t border-t-solid border-t-white/20 px-5 text-white left-0 bottom-0 sm:flex-row">
        <div className="flex justify-center gap-4">
          {Social.map((social) => (
            <Link
              key={social.name}
              href={social.link}
              target="_blank"
              className="text-sm font-semibold hover:text-primary transition-colors"
            >
              {social.name}
            </Link>
          ))}
        </div>

        <span className="text-xs font-semibold hidden sm:block">{`©${year} Furkan Can. All rights reserved.`}</span>
      </div>
    </footer>
  );
}
