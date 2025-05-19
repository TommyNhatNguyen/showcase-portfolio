"use client";
import { BREAKPOINTS } from "@/app/constants/media";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CustomEase, SplitText } from "gsap/all";
import React, { useEffect, useRef, useState } from "react";

type Props = {};

const LoadingPage = ({}: Props) => {
  const loaderRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.set(document.body, {
      visibility: "visible",
    });
    if (!loaderRef.current) return;
    const DURATION = 3;
    const EASE = CustomEase.create(
      "custom",
      "M0,0 C0.127,0.008 0.174,0.003 0.205,0.057 0.295,0.217 0.233,0.366 0.334,0.448 0.407,0.507 0.841,0.435 0.877,0.592 0.908,0.729 0.899,1 1,1 "
    );

    const loadingContainer = document.querySelector(".loading");
    const loadingContainerMobile = document.querySelector(".loading.--mobile");
    const mm = gsap.matchMedia();
    // Desktop
    mm.add(BREAKPOINTS.desktop, () => {
      const loadingIndicator = loadingContainer?.querySelector(
        ".loading-indicator"
      ) as HTMLElement;
      const loadingCounter = loadingIndicator.querySelector(
        ".loading-indicator__loading"
      ) as HTMLElement;
      const loadingBackground = loadingContainer?.querySelector(
        ".bg-opacity-loading"
      ) as HTMLElement;
      gsap.from(loadingIndicator.children, {
        y: -60,
        opacity: 0,
        duration: 0.6,
        ease: "back(2)",
      });
      gsap.from(loadingCounter, {
        textContent: `${0}%`,
        snap: {
          textContent: 1,
        },
        stagger: {
          each: 1,
          onUpdate: function () {
            const _this = this as any;
            const progress = _this.progress();
            if (progress >= 0.97) {
              _this.paused(true);
              gsap.to(loadingIndicator.children, {
                y: -100,
                opacity: 0,
                duration: 0.3,
              });
              gsap.to(loadingContainer, {
                height: 0,
                duration: 0.5,
                ease: "power2.inOut",
                padding: 0,
              });
              gsap.to(loadingBackground, {
                height: 0,
                duration: 0.5,
                ease: "power2.inOut",
                delay: 0.2,
              });
              document.body.classList.remove("--loading");
            }
          },
        },
        duration: DURATION,
        ease: EASE,
      });
    });
    // Mobile
    mm.add(BREAKPOINTS.mobile, () => {
      const loadingIndicator = loadingContainerMobile?.querySelector(
        ".loading-indicator"
      ) as HTMLElement;
      const loadingCounter = loadingIndicator.querySelector(
        ".loading-indicator__loading"
      ) as HTMLElement;
      const loadingBackground = loadingContainerMobile?.querySelector(
        ".bg-opacity-loading"
      ) as HTMLElement;
      gsap.from(loadingIndicator.children, {
        y: -60,
        opacity: 0,
        duration: 0.6,
        ease: "back(2)",
      });
      gsap.from(loadingCounter, {
        textContent: `${0}%`,
        snap: {
          textContent: 1,
        },
        stagger: {
          each: 1,
          onUpdate: function () {
            const _this = this as any;
            const progress = _this.progress();
            if (progress >= 0.97) {
              _this.paused(true);
              gsap.to(loadingIndicator.children, {
                y: -100,
                opacity: 0,
                duration: 0.3,
              });
              gsap.to(loadingContainerMobile, {
                height: 0,
                duration: 0.5,
                ease: "power2.inOut",
                padding: 0,
              });
              gsap.to(loadingBackground, {
                height: 0,
                duration: 0.5,
                ease: "power2.inOut",
                delay: 0.2,
              });
              document.body.classList.remove("--loading");
            }
          },
        },
        duration: DURATION,
        ease: EASE,
      });
    });
  }, []);

  useEffect(() => {
    document.body.classList.add("--loading");
  }, []);

  return (
    <div className="loading-page">
      <div className="loading" ref={loaderRef}>
        <div className="loading-indicator">
          <div className="loading-indicator__text">
            Hi, I'm Tommy. Please wait a minute
          </div>
          <div className="loading-indicator__line line">
            <div className="loading-indicator__line-inner"></div>
          </div>
          <div className="loading-indicator__loading counter">100%</div>
        </div>
        <div className="bg-opacity-loading"></div>
      </div>
      <div className="loading --mobile">
        <div className="loading-indicator">
          <div className="loading-indicator__loading counter">100%</div>
        </div>
        <div className="bg-opacity-loading"></div>
      </div>
    </div>
  );
};

export default LoadingPage;
