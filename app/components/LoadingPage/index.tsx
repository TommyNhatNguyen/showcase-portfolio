"use client";
import { BREAKPOINTS } from "@/app/constants/media";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CustomEase, SplitText } from "gsap/all";
import React, { useEffect, useRef, useState } from "react";

type Props = {};

const LoadingPage = ({}: Props) => {
  const loaderRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useGSAP(() => {
    gsap.set(document.body, {
      visibility: "visible",
    });
    if (!loaderRef.current) return;
    const line = document.querySelector(".loading-indicator__line");
    const lineInner = document.querySelector(".loading-indicator__line-inner");
    const loadingIndicator = document.querySelector(".loading");
    const bgOpacityLoading = document.querySelector(".bg-opacity-loading");
    const text = document.querySelector(".loading-indicator__text");
    const counterContainer = document.querySelector(
      ".loading-indicator__loading"
    );
    const counter2 = document.querySelector(".counter-2");
    const counter3 = document.querySelector(".counter-3");
    const numHeight = document.querySelector(".num")?.clientHeight || 80;
    const DURATION = 3;
    const EASE = CustomEase.create(
      "custom",
      "M0,0 C0.027,0.085 0.055,0.253 0.06,0.26 0.169,0.435 0.3,0.5 0.3,0.5 0.3,0.5 0.601,0.52 0.601,0.52 0.601,0.52 0.91,0.895 1,1.1"
    );
    const mm = gsap.matchMedia();
    mm.add(BREAKPOINTS.desktop, () => {
      gsap.set(counter3, {
        y: numHeight * ((counter3?.children.length || 0) - 1),
      });
      gsap.set(counter2, {
        y: numHeight * (counter2?.children.length || 0),
      });
      gsap.set(lineInner, {
        x: "-100%",
      });
      const tl = gsap.timeline({
        defaults: {
          autoAlpha: 1,
        },
        onUpdate: function () {
          if (this.progress() >= 0.91) {
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
              delay: 0.6,
              ease: "power2.out",
              onComplete: () => {
                setIsLoading(false);
              },
            });
          }
          if (this.progress() >= 1) {
            document.body.classList.remove("--loading");
          }
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
        ease: EASE,
      });
      tl.to(
        counter2,
        {
          y: 0,
          duration: DURATION,
          ease: EASE,
        },
        "<+0.3"
      );
    });
    // MOBILE
    const loadingIndicatorMobile = document.querySelector(
      ".loading.--mobile"
    ) as HTMLDivElement;
    const bgOpacityLoadingMobile = loadingIndicatorMobile.querySelector(
      ".bg-opacity-loading"
    ) as HTMLDivElement;
    const counterContainerMobile = loadingIndicatorMobile.querySelector(
      ".loading-indicator__loading"
    ) as HTMLDivElement;
    mm.add(BREAKPOINTS.mobile, () => {
      const counter2Mobile = loadingIndicatorMobile.querySelector(".counter-2");
      const counter3Mobile = loadingIndicatorMobile.querySelector(".counter-3");
      const numHeightMobile =
        loadingIndicatorMobile.querySelector(".num")?.clientHeight || 40;

      gsap.set(counter3Mobile, {
        y: numHeightMobile * ((counter3Mobile?.children.length || 0) - 1),
      });
      gsap.set(counter2Mobile, {
        y: numHeightMobile * (counter2Mobile?.children.length || 0),
      });

      const tlMobile = gsap.timeline({
        defaults: {
          autoAlpha: 1,
        },
        onUpdate: function () {
          if (this.progress() >= 0.91) {
            gsap.to(counterContainerMobile, {
              y: -20,
              opacity: 0,
              duration: 0.1,
            });
            gsap.to(loadingIndicatorMobile, {
              height: 0,
              duration: 0.8,
              ease: "power2.inOut",
            });
            gsap.to(bgOpacityLoadingMobile, {
              height: 0,
              duration: 0.6,
              delay: 0.6,
              ease: "power2.out",
              onComplete: () => {
                setIsLoading(false);
              },
            });
          }
          if (this.progress() >= 1) {
            document.body.classList.remove("--loading");
          }
        },
      });

      gsap.set(counterContainerMobile, {
        opacity: 0,
        y: 20,
      });
      gsap.to(counterContainerMobile, {
        y: 0,
        opacity: 1,
        duration: 0.5,
      });

      tlMobile.to(counter3Mobile, {
        y: 0,
        duration: DURATION,
        ease: EASE,
      });
      tlMobile.to(
        counter2Mobile,
        {
          y: 0,
          duration: DURATION,
          ease: EASE,
        },
        "<+0.3"
      );
    });
  }, []);

  useEffect(() => {
    document.body.classList.add("--loading");
  }, []);

  if (!isLoading) return null;

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
          <div className="loading-indicator__loading counter">
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
            </div>
            {/* Percentage */}
            <div className="counter-4 digit">
              <div className="num percentage">%</div>
            </div>
          </div>
        </div>
        <div className="bg-opacity-loading"></div>
      </div>
      <div className="loading --mobile">
        <div className="loading-indicator">
          <div className="loading-indicator__loading counter">
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
            </div>
            {/* Percentage */}
            <div className="counter-4 digit">
              <div className="num percentage">%</div>
            </div>
          </div>
        </div>
        <div className="bg-opacity-loading"></div>
      </div>
    </div>
  );
};

export default LoadingPage;
