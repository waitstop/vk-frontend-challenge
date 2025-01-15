import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children: React.ReactNode;
} & React.HTMLProps<HTMLDivElement>;

const Card = React.forwardRef<HTMLDivElement, Props>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "hover:shadow-[0_12px_8px_0_rgba(0,0,0,0.5)] transition-all hover:scale-105 md:hover:scale-110",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

export default Card;
