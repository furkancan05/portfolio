import Marquee from "react-fast-marquee";
import { Skills } from "../config/skills";
import ReactTypingEffect from "react-typing-effect";

export default function Landing() {
  return (
    <section className="flex flex-col justify-between w-full h-[100vh]">
      <div />
      <div className="flex flex-col items-center font-bold gap-3">
        <h3 className="text-2xl">Hey there 👋</h3>
        <h1 className="text-[64px] leading-[52px]">I'm Furkan Can</h1>
        <ReactTypingEffect
          className="h-20"
          speed={100}
          eraseSpeed={80}
          eraseDelay={1500}
          typingDelay={300}
          cursor=" "
          text={["Front End Developer", "Mobile Developer", "Web3 Developer"]}
          displayTextRenderer={(text, i) => {
            return (
              <h1 key={i}>
                {text.split("").map((char, i) => {
                  const key = `${i}`;
                  return (
                    <span
                      key={key}
                      className="text-[72px] text-[#ff4532] drop-shadow-[0px_0px_10px_rgb(255,69,50)]"
                    >
                      {char}
                    </span>
                  );
                })}
              </h1>
            );
          }}
        ></ReactTypingEffect>
      </div>

      <CustomMarque />
    </section>
  );
}

function CustomMarque() {
  return (
    <div className="flex flex-col w-full h-fit py-2 gap-2 bg-background/20">
      <Marquee
        pauseOnHover={true}
        gradient={true}
        gradientColor="#030303"
        speed={50}
      >
        {Skills.map((skill) => {
          return (
            <div className="flex flex-col items-center w-[200px] rounded-md py-3 mx-1 gap-2 bg-card/30">
              <div className="flex items-center justify-center ">
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
        gradientColor="#030303"
        speed={50}
      >
        {Skills.reverse().map((skill, i) => {
          return (
            <div
              key={i}
              className="flex flex-col items-center w-[200px] rounded-md py-3 mx-1 gap-2 bg-card/30"
            >
              <div className="flex items-center justify-center ">
                <img src={skill.imagePath} alt="" className="w-12 h-12" />
              </div>
              <span className="font-bold">{skill.name}</span>
            </div>
          );
        })}
      </Marquee>
    </div>
  );
}
