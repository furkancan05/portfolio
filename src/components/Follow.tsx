import { Discord, Github, Instagram, Linkedin, Telegram } from "../icons/icons";

export default function Follow() {
  return (
    <div className="w-full px-[160px] my-10">
      <div className="flex items-center justify-between w-full h-10 bg-white/5 border border-white/20 rounded-lg px-10 py-10">
        <p className="font-extrabold text-3xl">Follow me on</p>

        <div className="flex gap-6">
          <a
            href=""
            target="_blank"
            className="w-16 h-16 rounded-full bg-primary/60 flex items-center justify-center hover:bg-primary/80 transition-colors"
          >
            <Github width={32} height={32} />
          </a>
          <a
            href=""
            target="_blank"
            className="w-16 h-16 rounded-full bg-primary/60 flex items-center justify-center hover:bg-primary/80 transition-colors"
          >
            <Linkedin width={32} height={32} />
          </a>
          <a
            href=""
            target="_blank"
            className="w-16 h-16 rounded-full bg-primary/60 flex items-center justify-center hover:bg-primary/80 transition-colors"
          >
            <Instagram width={32} height={32} />
          </a>
          <a
            href=""
            target="_blank"
            className="w-16 h-16 rounded-full bg-primary/60 flex items-center justify-center hover:bg-primary/80 transition-colors"
          >
            <Telegram width={32} height={32} />
          </a>
          <a
            href=""
            target="_blank"
            className="w-16 h-16 rounded-full bg-primary/60 flex items-center justify-center hover:bg-primary/80 transition-colors"
          >
            <Discord width={32} height={32} />
          </a>
        </div>
        {/*  discord */}
      </div>
    </div>
  );
}
