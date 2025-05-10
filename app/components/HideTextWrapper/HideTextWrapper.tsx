import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

type Props = {
  children: React.ReactNode;
};

const HideTextWrapper = ({ children }: Props) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      if (!wrapperRef.current) return;
      //   Select the first inner child
      const firstChild = wrapperRef.current.firstChild;
      if (!firstChild) return;
      gsap.set(firstChild, {
        opacity: 0,
        y: 40,
      });
    },
    {
      scope: wrapperRef,
    }
  );
  return (
    <div ref={wrapperRef} className="hide-text-wrapper">
      {children}
    </div>
  );
};

export default HideTextWrapper;
