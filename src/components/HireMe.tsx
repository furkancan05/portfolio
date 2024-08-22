import React from "react";
import Marquee from "react-fast-marquee";

export default function HireMe() {
  const [pageHeight, setPageHeight] = React.useState<number | null>(null);

  React.useEffect(() => {
    const height = document.body.scrollHeight + document.body.clientHeight;
    setPageHeight(height);
  }, []);

  const scrollBottom = () => {
    if (!pageHeight) return;

    document.getElementById("end")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="pb-44 bg-white cursor-pointer">
      <div className="w-full bg-black cursor-pointer group">
        <Marquee autoFill>
          <p
            onClick={scrollBottom}
            className="text-white/20 font-black text-[120px] mx-10 group-hover:text-white/30 group-hover:-translate-y-3 group-hover:translate-x-3 transition-all"
          >
            HIRE ME
          </p>
        </Marquee>
      </div>
    </div>
  );
}
