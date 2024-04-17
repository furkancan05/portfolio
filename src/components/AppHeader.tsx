export default function AppHeader() {
  const titles = ["Home", "About", "Projects", "Contact"];
  return (
    <div className=" flex items-center justify-center fixed w-4/5 py-4 rounded-lg bg-black/20 border border-white/20 backdrop-blur-sm z-50 -top-6 left-1/2 -translate-x-1/2 gap-10 mt-10">
      {titles.map((title) => {
        return (
          <a
            key={title}
            className="relative font-bold after:absolute after:h-0.5 after:w-0 after:bg-white after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:transition-all hover:after:w-[120%]"
          >
            {title}
          </a>
        );
      })}
    </div>
  );
}
