"use client";
import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "../constants/links";
import Button from "../components/Button/Button";
import { FiArrowRight } from "react-icons/fi";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { SplitText } from "gsap/all";
export default function Blog() {
  const blogRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      if (!blogRef.current) return;
      const heroSection = blogRef.current.querySelector(
        "#schero"
      ) as HTMLElement;
      const heroTitle = heroSection.querySelector(".schero__title");
      const heroDesc = heroSection.querySelector(".schero__desc");
      const heroCaption = heroSection.querySelector(".schero__caption");
      const heroTitleSplit = SplitText.create(heroTitle);
      const heroDescSplit = SplitText.create(heroDesc);
      const heroCaptionSplit = SplitText.create(heroCaption);
      const tl = gsap.timeline({});
      gsap.set([heroDesc, heroTitle, heroCaption], {
        opacity: 0,
        y: 40,
      });
      tl.to([heroCaption, heroTitle, heroDesc], {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
      });
      tl.to(
        [heroDescSplit.lines, heroTitleSplit.lines, heroCaptionSplit.lines],
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
    },
    {
      scope: blogRef,
    }
  );
  return (
    <main className="blog" id="blog" ref={blogRef}>
      {/* Hero */}
      <section className="schero --ptb" id="schero">
        <div className="container">
          <div className="schero-wrapper">
            <p className="schero__caption">Insights</p>
            <h1 className="schero__title --gray">
              A collection of my
              <span className="--gray"> insights</span>
            </h1>
            <p className="schero__desc">
              Subscribe to my newsletter to learn more about design, our blog
              and other things we like to share.
            </p>
          </div>
        </div>
      </section>

      {/* Latest Insights */}
      <section className="sclatestinsights --ptb" id="sclatestinsights">
        <div className="container">
          <div className="sclatestinsights-wrapper">
            <div className="sclatestinsights__title">
              <h2 className="sclatestinsights__title-text">
                My latest insights
              </h2>
            </div>
            <ul className="sclatestinsights__list">
              <li className="sclatestinsights__list-item">
                <div className="thumbnail">
                  <Image
                    className="thumbnail__img"
                    src="/images/blog.jpg"
                    alt="Blog 1"
                    width={400}
                    height={300}
                  />
                </div>
                <div className="content">
                  <h3 className="content__title">
                    Exploring the Power of Minimalism in Visual Design
                  </h3>
                  <p className="content__desc">
                    Dive into the world of minimalistic design and discover how
                    simplicity, clean lines, and negative space can enhance user
                    experiences and create visually stunning designs.
                  </p>
                  <Button
                    href="#"
                    variant="icon"
                    size="md"
                    className="content__btn"
                    icon={FiArrowRight}
                  />
                </div>
              </li>
              <li className="sclatestinsights__list-item">
                <div className="thumbnail">
                  <Image
                    className="thumbnail__img"
                    src="/images/blog.jpg"
                    alt="Blog 1"
                    width={400}
                    height={300}
                  />
                </div>
                <div className="content">
                  <h3 className="content__title">
                    Exploring the Power of Minimalism in Visual Design
                  </h3>
                  <p className="content__desc">
                    Dive into the world of minimalistic design and discover how
                    simplicity, clean lines, and negative space can enhance user
                    experiences and create visually stunning designs.
                  </p>
                </div>
              </li>
              <li className="sclatestinsights__list-item">
                <div className="thumbnail">
                  <Image
                    className="thumbnail__img"
                    src="/images/blog.jpg"
                    alt="Blog 1"
                    width={400}
                    height={300}
                  />
                </div>
                <div className="content">
                  <h3 className="content__title">
                    Exploring the Power of Minimalism in Visual Design
                  </h3>
                  <p className="content__desc">
                    Dive into the world of minimalistic design and discover how
                    simplicity, clean lines, and negative space can enhance user
                    experiences and create visually stunning designs.
                  </p>
                </div>
              </li>
              <li className="sclatestinsights__list-item">
                <div className="thumbnail">
                  <Image
                    className="thumbnail__img"
                    src="/images/blog.jpg"
                    alt="Blog 1"
                    width={400}
                    height={300}
                  />
                </div>
                <div className="content">
                  <h3 className="content__title">
                    Exploring the Power of Minimalism in Visual Design
                  </h3>
                  <p className="content__desc">
                    Dive into the world of minimalistic design and discover how
                    simplicity, clean lines, and negative space can enhance user
                    experiences and create visually stunning designs.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* All Insights */}
      <section className="scallinsights --ptb" id="scallinsights">
        <div className="container">
          <div className="scallinsights-wrapper">
            <div className="scallinsights__title">
              <h2 className="scallinsights__title-text">All Insights</h2>
            </div>
            <ul className="scallinsights__list">
              <li className="scallinsights__list-item">
                <div className="content">
                  <p className="content__title">
                    Designing for Accessibility: Bridging the Gap to Inclusive
                    Experiences
                  </p>
                  <p className="content__time">May 5, 2023</p>
                </div>
                <div className="desc">
                  <p className="desc__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                    nulla accusantium ratione in ducimus asperiores expedita
                    dolorem perferendis ipsa nobis tempora reprehenderit quia
                    repudiandae voluptates rerum adipisci, officia cum corrupti?
                  </p>
                </div>
              </li>
              <li className="scallinsights__list-item">
                <div className="content">
                  <p className="content__title">
                    Designing for Accessibility: Bridging the Gap to Inclusive
                    Experiences
                  </p>
                  <p className="content__time">May 5, 2023</p>
                </div>
                <div className="desc">
                  <p className="desc__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                    nulla accusantium ratione in ducimus asperiores expedita
                    dolorem perferendis ipsa nobis tempora reprehenderit quia
                    repudiandae voluptates rerum adipisci, officia cum corrupti?
                  </p>
                </div>
              </li>
              <li className="scallinsights__list-item">
                <div className="content">
                  <p className="content__title">
                    Designing for Accessibility: Bridging the Gap to Inclusive
                    Experiences
                  </p>
                  <p className="content__time">May 5, 2023</p>
                </div>
                <div className="desc">
                  <p className="desc__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                    nulla accusantium ratione in ducimus asperiores expedita
                    dolorem perferendis ipsa nobis tempora reprehenderit quia
                    repudiandae voluptates rerum adipisci, officia cum corrupti?
                  </p>
                </div>
              </li>
            </ul>
            <Button
              href="#"
              size="md"
              className="scallinsights__btn"
              variant="talk"
            >
              Show more
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
