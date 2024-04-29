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
      <h1 className={cn("font-black text-[56px] z-10", className)}>{title}</h1>

      <span
        className={cn(
          "absolute text-[100px] top-2 left-20 font-black text-black/5",
          descClassName
        )}
      >
        {description}
      </span>
    </div>
  );
}
