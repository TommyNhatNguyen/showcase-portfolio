import React from "react";
import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const AnimatedTextHover = ({ children, className, ...props }: Props) => {
  return (
    <div className={clsx("animated-text-hover", className)} {...props}>
      <div className="content-top">{children}</div>
      <div className="content-bottom">{children}</div>
    </div>
  );
};

export default AnimatedTextHover;
