import React from "react";

import { cn } from "~/utils/cn";

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("w-full h-full max-w-[1200px] mx-auto py-5", className)}>
      {children}
    </div>
  );
}
