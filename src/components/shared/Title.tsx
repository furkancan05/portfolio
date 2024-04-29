import React from "react";

import { cn } from "~/utils/cn";

interface TitleProps {
  title: string;
  description: string;
  className?: string;
  descClassName?: string;
}

export default function Title({
  title,
  description,
  className,
  descClassName,
}: TitleProps) {
  return (
    <div className="relative py-16">
      <h1 className={cn("font-black text-3xl z-10 sm:text-[56px]", className)}>
        {title}
      </h1>

      <span
        className={cn(
          "absolute text-[56px] top-2 left-5 font-black text-black/5 sm:text-[100px] sm:left-20",
          descClassName
        )}
      >
        {description}
      </span>
    </div>
  );
}
