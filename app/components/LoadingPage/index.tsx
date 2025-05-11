"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

type Props = {};

const LoadingPage = ({}: Props) => {
  const loaderRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useGSAP(() => {
    if (loaderRef.current) {
      gsap.set([".loading", ".loading-indicator", ".bg-opacity-loading"], {
        height: "100%",
      });

      const tl = gsap.timeline({
        onComplete: () => {
          setIsLoading(false);
          document.body.classList.remove("--loading");
        },
      });

      tl.to([".loading", ".loading-indicator"], {
        height: 0,
        duration: 0.8,
        ease: "power2.inOut",
      }).to(
        ".bg-opacity-loading",
        {
          height: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "<+60%"
      );
    }
  }, []);

  useEffect(() => {
    document.body.classList.add("--loading");
  }, []);

  if (!isLoading) return null;

  return (
    <div className="loading" ref={loaderRef}>
      <div className="loading-indicator"></div>
      <div className="bg-opacity-loading"></div>
    </div>
  );
};

export default LoadingPage;
