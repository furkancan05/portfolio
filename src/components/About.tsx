import Title from "./Title";
import { ArrowDown, Download } from "../icons/icons";

export default function About() {
  return (
    <section className="px-[160px]">
      <Title title="About Me" />

      <div className="flex justify-between gap-10">
        <div className="flex-1 aspect-square rounded-full overflow-hidden border border-black/80 bg-black/20">
          <img
            src="/images/photo.png"
            alt=""
            className="w-full brightness-50 grayscale mt-14"
          />
        </div>

        <div className="flex flex-1 flex-col justify-evenly pr-10">
          <button
            type="button"
            onClick={() => {}}
            className="w-24 h-24 flex flex-col items-center justify-center rounded-full bg-primary/90 ml-auto animate-shadow_pulse hover:bg-primary transition-colors box-shadow-anim"
          >
            <Download />

            <p className="font-extrabold text-2xl">CV</p>
          </button>

          <p className="text-3xl font-bold top-20 left-1/2">
            I am a simple front-end developer working in Istanbul. I have been
            dealing with software professionally for 1 year.
          </p>

          <button
            type="submit"
            onClick={() => {}}
            className="relative gap-3 text-lg bg-primary/90 rounded-full py-3 pl-8 pr-14 w-fit hover:bg-primary transition-colors"
          >
            <span className="font-bold">Contact</span>

            <ArrowDown />
          </button>
        </div>
      </div>
    </section>
  );
}
