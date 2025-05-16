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
    if (!loaderRef.current) return;
    const line = document.querySelector(".loading-indicator__line");
    const lineInner = document.querySelector(".loading-indicator__line-inner");
    const loadingIndicator = document.querySelector(".loading");
    const bgOpacityLoading = document.querySelector(".bg-opacity-loading");
    const text = document.querySelector(".loading-indicator__text");
    const counterContainer = document.querySelector(
      ".loading-indicator__loading"
    );
    const counter1 = document.querySelector(".counter-1");
    const counter2 = document.querySelector(".counter-2");
    const counter3 = document.querySelector(".counter-3");
    const counter4 = document.querySelector(".counter-4");
    const numHeight = document.querySelector(".num")?.clientHeight || 80;
    const DURATION = 3;
    gsap.set(counter3, {
      y: numHeight * ((counter3?.children.length || 0) - 1),
    });
    gsap.set(counter2, {
      y: numHeight * ((counter2?.children.length || 0) - 1),
    });
    gsap.set(counter1, {
      y: numHeight * ((counter1?.children.length || 0) - 1),
    });
    gsap.set(lineInner, {
      x: "-100%",
    });
    const tl = gsap.timeline({
      onUpdate: function () {
        gsap.to(lineInner, {
          x: `${-80 + this.progress() * 100}%`,
        });
        if (this.progress() >= 1) {
          document.body.classList.remove("--loading");
        }
      },
      onComplete: function () {
        gsap.to([text, line, counterContainer], {
          y: -40,
          opacity: 0,
          stagger: 0.1,
          duration: 0.1,
        });
        gsap.to(loadingIndicator, {
          height: 0,
          duration: 0.8,
          ease: "power2.inOut",
        });
        gsap.to(bgOpacityLoading, {
          height: 0,
          duration: 0.6,
          delay: 0.4,
          ease: "power2.out",
          onComplete: () => {
            setIsLoading(false);
          },
        });
      },
    });
    gsap.set([text, line, counterContainer], {
      opacity: 0,
      y: 40,
    });
    gsap.to([text, line, counterContainer], {
      y: 0,
      opacity: 1,
      duration: 0.5,
      stagger: 0.1,
    });
    tl.to(counter3, {
      y: 0,
      duration: DURATION,
    });
    tl.to(
      counter2,
      {
        y: 0,
        duration: DURATION,
      },
      "<+0.3"
    );
    tl.to(
      counter1,
      {
        y: 0,
        duration: DURATION,
      },
      "<+0.3"
    );
  }, []);

  useEffect(() => {
    document.body.classList.add("--loading");
  }, []);

  if (!isLoading) return null;

  return (
    <div className="loading" ref={loaderRef}>
      <div className="loading-indicator">
        <div className="loading-indicator__text">
          Hi, I'm Tommy. Please wait a minute
        </div>
        <div className="loading-indicator__line line">
          <div className="loading-indicator__line-inner"></div>
        </div>
        <div className="loading-indicator__loading counter">
          {/* Hundred */}
          <div className="counter-1 digit">
            <div className="num">0</div>
            <div className="num num1offset1">1</div>
          </div>
          {/* Ten */}
          <div className="counter-2 digit">
            <div className="num">0</div>
            <div className="num num1offset2">1</div>
            <div className="num">2</div>
            <div className="num">3</div>
            <div className="num">4</div>
            <div className="num">5</div>
            <div className="num">6</div>
            <div className="num">7</div>
            <div className="num">8</div>
            <div className="num">9</div>
            <div className="num">0</div>
          </div>
          {/* Digit */}
          <div className="counter-3">
            <div className="num">0</div>
            <div className="num">1</div>
            <div className="num">2</div>
            <div className="num">3</div>
            <div className="num">4</div>
            <div className="num">5</div>
            <div className="num">6</div>
            <div className="num">7</div>
            <div className="num">8</div>
            <div className="num">9</div>
            <div className="num">0</div>
            <div className="num">1</div>
            <div className="num">2</div>
            <div className="num">3</div>
            <div className="num">4</div>
            <div className="num">5</div>
            <div className="num">6</div>
            <div className="num">7</div>
            <div className="num">8</div>
            <div className="num">9</div>
            <div className="num">0</div>
            <div className="num">1</div>
            <div className="num">2</div>
            <div className="num">3</div>
            <div className="num">4</div>
            <div className="num">5</div>
            <div className="num">6</div>
            <div className="num">7</div>
            <div className="num">8</div>
            <div className="num">9</div>
            <div className="num">0</div>
          </div>
          {/* Percentage */}
          <div className="counter-4 digit">
            <div className="num percentage">%</div>
          </div>
        </div>
      </div>
      <div className="bg-opacity-loading"></div>
    </div>
  );
};

export default LoadingPage;
