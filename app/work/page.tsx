"use client";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import clsx from "clsx";
import { FiArrowRight } from "react-icons/fi";
import { ROUTES } from "../constants/links";

export default function Work() {
  const workRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleActive = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  useGSAP(
    () => {
      if (!workRef.current) return;
      const heroSection = workRef.current.querySelector(
        "#schero"
      ) as HTMLElement;
      const workSection = workRef.current.querySelector(
        "#scwork"
      ) as HTMLElement;
      const heroTitle = heroSection.querySelector(".schero__title-text");
      const heroTitleSplit = SplitText.create(heroTitle);
      const skillsItems = gsap.utils.toArray(
        ".schero__skills-item"
      ) as HTMLElement[];
      const workItems = gsap.utils.toArray(
        ".scwork__list-item"
      ) as HTMLElement[];

      const tl = gsap.timeline({});

      gsap.set([heroTitle, skillsItems, workItems], {
        opacity: 0,
        y: 40,
      });

      tl.to([heroTitle], {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      tl.to(
        [heroTitleSplit.lines],
        {
          scrambleText: {
            text: "{original}",
            chars: "//ai",
          },
          duration: 0.9,
          ease: "none",
        },
        "<-10%"
      );

      tl.to(
        heroTitleSplit.lines,
        {
          color: `var(--neutral-100)`,
          stagger: 0.2,
          duration: 0.3,
          ease: "power1.inOut",
        },
        "<+0.3"
      );

      // Animate skills items
      tl.to(
        skillsItems,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
        },
        "<+0.1"
      );

      // Animate work items
      tl.to(
        workItems,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: workSection,
            start: "top bottom",
            end: "top center",
          },
        },
        "<+0.3"
      );
    },
    {
      scope: workRef,
    }
  );

  return (
    <main className="work" id="work" ref={workRef}>
      {/* Hero */}
      <section className="schero --pt" id="schero">
        <div className="container">
          <div className="schero-wrapper">
            <div className="schero__title">
              <h1 className="schero__title-text --gray">
                Bringing your brand to life in the
                <span className="--gray"> digital world</span>
              </h1>
            </div>
            <ul className="schero__skills">
              <li className="schero__skills-item">
                <span>Web Design</span>
              </li>
              <li className="schero__skills-item">
                <span>UI/UX Design</span>
              </li>
              <li className="schero__skills-item">
                <span>Branding</span>
              </li>
              <li className="schero__skills-item">
                <span>Mobile App</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Work */}
      <section className="scwork --ptb" id="scwork">
        <div className="container">
          <div className="scwork-wrapper">
            <ul className="scwork__list">
              {[1, 2, 3, 4, 5].map((item, index) => (
                <li
                  key={index}
                  className={clsx("scwork__list-item", {
                    "--active": activeIndex === index,
                  })}
                  onClick={() => toggleActive(index)}
                >
                  <div className="wrapper">
                    {/* Content */}
                    <div className="content">
                      <div className="content__info">
                        <div className="content__info-title --block">
                          Sportly
                          <div className="icon">
                            <FiArrowRight />
                          </div>
                        </div>
                        <span className="content__info-time --block">
                          May 5, 2023
                        </span>
                      </div>
                      <div className="content__desc">
                        <p className="content__desc-text">
                          Website Redesign: Improving user experience and
                          modernizing design.
                        </p>
                        <ul className="content__desc-tags">
                          <li>UIUX</li>
                          <li>Branding</li>
                        </ul>
                      </div>
                    </div>
                    {/* Thumbnail */}
                    <Link href={ROUTES.WORK} className="thumbnail">
                      <Image
                        src="/images/project-1.jpg"
                        alt="Sportly"
                        width={400}
                        height={300}
                      />
                      <div className="thumbnail__btn btn --md --btn-icon">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.125 10H16.875"
                            stroke="#030712"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M11.25 4.375L16.875 10L11.25 15.625"
                            stroke="#030712"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
