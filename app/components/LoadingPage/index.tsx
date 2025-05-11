"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
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
        },
        onUpdate: function () {
          if (this.progress() >= 0.7) {
            document.body.classList.remove("--loading");
          }
        },
      });
      const loadingText = loaderRef.current.querySelector(
        ".loading-indicator__title"
      );
      const loadingTextSplit = new SplitText(loadingText);
      gsap.set(loadingText, {
        opacity: 1,
      });
      tl.from(loadingTextSplit.chars, {
        stagger: 0.03,
        opacity: 0,
        y: 40,
        duration: 0.3,
        ease: "sine.out",
      }).to(loadingText, {
        duration: 0.8,
        opacity: 0,
        y: 200,
        delay: 0.3,
      });
      tl.to(
        [".loading", ".loading-indicator"],
        {
          height: 0,
          duration: 0.8,
          ease: "power2.inOut",
        },
        "<"
      ).to(
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
      <div className="loading-indicator">
        <h2 className="loading-indicator__title">TOMMY NGUYEN 🧑🏻‍🎨</h2>
      </div>
      <div className="bg-opacity-loading"></div>
    </div>
  );
};

export default LoadingPage;
