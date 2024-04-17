import React from "react";

import { useOnScreen } from "../hooks/useOnScreen";

// set onload animate when children component displays on viewport
export default function Animate({
  children,
  className,
  delay,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref: any = React.useRef<HTMLDivElement>(null);

  const isVisible: boolean = useOnScreen(ref, "-100px");

  const [isAnimated, setIsAnimated] = React.useState(false);

  // marked as animated before
  React.useEffect(() => {
    if (isVisible) {
      setIsAnimated(true);
    }
  }, [isVisible]);

  return (
    <div
      ref={ref}
      style={{
        animationDelay: delay ? `${delay}ms` : "0",
        visibility: isVisible || isAnimated ? "visible" : "hidden",
      }}
      className="w-full h-[90vh] animate-view"
    >
      {children}
    </div>
  );
}
