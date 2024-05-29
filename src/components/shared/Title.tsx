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
      <h2 className={cn("font-black text-3xl z-10 sm:text-[56px]", className)}>
        {title}
      </h2>

      <h3
        className={cn(
          "uppercase absolute text-[48px] top-10 left-10 font-black opacity-5 sm:text-[100px] sm:left-3 sm:top-2",
          descClassName
        )}
      >
        {description}
      </h3>
    </div>
  );
}
