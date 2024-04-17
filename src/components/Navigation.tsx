import { navigationPaths } from "../config/navigation.config";

export default function Navigation() {
  return (
    <div className="fixed flex flex-col items-end gap-3 w-fit bottom-1/2 right-5 z-10">
      {navigationPaths.map((nav, index) => {
        return (
          <a
            href=""
            key={index}
            className="flex items-center justify-between gap-2 w-24 font-bold transition-all hover:w-32"
          >
            <span>{nav}</span>
            <div className="w-full h-0.5 bg-white" />
          </a>
        );
      })}
    </div>
  );
}
