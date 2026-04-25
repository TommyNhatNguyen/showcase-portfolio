"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { FiArrowRight, FiArrowUpRight, FiDownload } from "react-icons/fi";
import AnimatedTextHover from "./components/AnimatedTextHover";
import AnimatedThumbnail from "./components/AnimatedThumbnail/AnimatedThumbnail";
import Button from "./components/Button/Button";
import HideTextWrapper from "./components/HideTextWrapper/HideTextWrapper";
import { ROUTES } from "./constants/links";
import { BREAKPOINTS } from "./constants/media";

export default function Home() {
  const homeRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      // --------------------------------
      // HERO
      // --------------------------------
      if (!homeRef.current) return;
      const heroSection = homeRef.current.querySelector(
        "#schero",
      ) as HTMLElement;
      const heroTitle = heroSection.querySelector(".schero__title-text");
      const heroDesc = heroSection.querySelector(".schero__desc-text");
      const heroDescLine = heroSection.querySelector(".schero__desc-line");
      const heroCta = heroSection.querySelector(".schero__cta-button");
      // --------------------------------
      // ABOUT
      // --------------------------------
      const aboutSection = homeRef.current.querySelector(
        "#scabout",
      ) as HTMLElement;
      const aboutTitle = aboutSection.querySelector(".scabout__content-title");
      const aboutDesc = aboutSection.querySelector(".scabout__content-desc");

      const aboutButton = aboutSection.querySelector(".scabout__content-link");
      // --------------------------------
      // WORKS
      // --------------------------------
      const worksSection = homeRef.current.querySelector(
        "#scwork",
      ) as HTMLElement;
      const worksTitle = worksSection.querySelector(".scwork__title");
      const worksTitleSplit = SplitText.create(worksTitle);
      const worksBtn = worksSection.querySelector(".scwork__btnviewall");
      const workListItems = gsap.utils.toArray(
        ".scwork__list-item",
      ) as HTMLElement[];
      const workListFirstGroup = workListItems.slice(0, 3);
      const workListMidGroup = workListItems.slice(3, 4);
      const workListLastGroup = workListItems.slice(4);
      // --------------------------------
      // CLIENTS
      // --------------------------------
      const clientsSection = homeRef.current.querySelector(
        "#scclient",
      ) as HTMLElement;
      const clientsTitle = clientsSection.querySelector(".scclient__title");
      const clientsTitleSplit = SplitText.create(clientsTitle);
      const clientListItems = gsap.utils.toArray(
        ".scclient__list-item",
      ) as HTMLElement[];
      // --------------------------------
      // BLOG
      // --------------------------------
      const blogSection = homeRef.current.querySelector(
        "#scblog",
      ) as HTMLElement | null;
      const blogTitle =
        blogSection?.querySelector(".scblog__title .titlegroup__title") ?? null;
      const blogTitleSplit = blogTitle ? SplitText.create(blogTitle) : null;
      const blogBtn = blogSection?.querySelector(".scblog__btn") ?? null;
      const blogListItems = blogSection
        ? (gsap.utils.toArray(".scblog__list-card") as HTMLElement[])
        : [];

      const tl = gsap.timeline({ paused: true });
      const aboutTl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutSection,
          start: "top +=90%",
          end: "bottom bottom",
        },
      });
      const blogTl = blogSection
        ? gsap.timeline({
            scrollTrigger: {
              trigger: blogSection,
              start: "top +=90%",
              end: "bottom bottom",
            },
          })
        : null;
      const workTl = gsap.timeline({
        scrollTrigger: {
          trigger: worksSection,
          start: "top +=90%",
          end: "bottom bottom",
        },
      });
      const clientTl = gsap.timeline({
        scrollTrigger: {
          trigger: clientsSection,
          start: "top +=90%",
          end: "bottom bottom",
        },
      });
      let aboutTextDuration = 0.3;
      const mm = gsap.matchMedia();
      mm.add(BREAKPOINTS.desktop, () => {
        const heroTitleSplit = SplitText.create(heroTitle);
        const heroDescSplit = SplitText.create(heroDesc);
        const aboutTitleSplit = SplitText.create(aboutTitle);
        const aboutDescSplit = SplitText.create(aboutDesc);
        gsap.set([heroDesc, heroTitle, heroCta], {
          opacity: 0,
          y: 40,
        });
        tl.to([heroDesc, heroTitle], {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
        });
        tl.to(
          [heroDescSplit.lines, heroTitleSplit.lines],
          {
            scrambleText: {
              text: "{original}",
              chars: "//ai",
            },
            duration: 0.9,
            ease: "none",
          },
          "<-10%",
        );
        tl.to(
          heroTitleSplit.lines,
          {
            color: `var(--neutral-100)`,
            stagger: 0.2,
            duration: 0.3,
            ease: "power1.inOut",
          },
          "<+0.3",
        );
        tl.to(
          heroCta,
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            delay: 0.2,
          },
          "<",
        );
        tl.from(
          heroDescLine,
          {
            width: 0,
            duration: 0.3,
            ease: "power3.inOut",
          },
          "<",
        );

        aboutTl
          .to(
            [aboutTitle],
            {
              opacity: 1,
              y: 0,
              duration: aboutTextDuration,
            },
            "<+0.3",
          )
          .to(
            aboutDesc,
            {
              opacity: 1,
              y: 0,
              duration: aboutTextDuration * 2,
            },
            "<",
          )
          .to(
            aboutButton,
            {
              opacity: 1,
              y: 0,
              duration: aboutTextDuration * 2.5,
            },
            "<",
          )
          .to(
            [aboutTitleSplit.lines, aboutDescSplit.lines],
            {
              scrambleText: {
                text: "{original}",
                chars: "//ai",
              },
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: "none",
            },
            "<-50%",
          );
      });
      mm.add(BREAKPOINTS.mobile, () => {
        gsap.set([heroDesc, heroTitle, heroCta], {
          opacity: 0,
          y: 40,
        });
        tl.to([heroDesc, heroTitle], {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
        });
        tl.to(
          [heroTitle, heroDesc],
          {
            scrambleText: {
              text: "{original}",
              chars: "//ai",
            },
            duration: 0.9,
            ease: "none",
          },
          "<-10%",
        );
        tl.to(
          heroTitle,
          {
            color: `var(--neutral-100)`,
            stagger: 0.2,
            duration: 0.3,
            ease: "power1.inOut",
          },
          "<+0.3",
        );
        tl.to(
          heroCta,
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            delay: 0.2,
          },
          "<",
        );

        aboutTl
          .to(
            [aboutTitle],
            {
              opacity: 1,
              y: 0,
              duration: aboutTextDuration,
            },
            "<+0.3",
          )
          .to(
            aboutDesc,
            {
              opacity: 1,
              y: 0,
              duration: aboutTextDuration * 2,
            },
            "<",
          )
          .to(
            aboutButton,
            {
              opacity: 1,
              y: 0,
              duration: aboutTextDuration * 2.5,
            },
            "<",
          )
          .to(
            [aboutTitle, aboutDesc],
            {
              scrambleText: {
                text: "{original}",
                chars: "//ai",
              },
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: "none",
            },
            "<-50%",
          );
      });

      const checkLoading = () => {
        if (!document.body.classList.contains("--loading")) {
          tl.play();
        } else {
          gsap.delayedCall(0, checkLoading);
        }
      };
      checkLoading();

      workTl
        .to(worksTitle, {
          opacity: 1,
          y: 0,
          duration: 0.3,
        })
        .to(
          worksTitleSplit.lines,
          {
            scrambleText: {
              text: "{original}",
              chars: "//ai",
            },
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "none",
          },
          "<-50%",
        );

      workListFirstGroup.forEach((item) => {
        const content = item.querySelector(".cardwork__content");
        const contentTitle = content?.querySelector(
          ".cardwork__content-desc .title",
        );
        const contentDesc = content?.querySelector(
          ".cardwork__content-desc .desc",
        );
        gsap.to(content, {
          scrollTrigger: {
            trigger: item,
            start: "top +=70%",
            end: "bottom bottom",
          },
          opacity: 1,
          y: 0,
          duration: 0.6,
        });
        gsap.to([contentTitle, contentDesc], {
          scrollTrigger: {
            trigger: item,
            start: "top +=70%",
            end: "bottom bottom",
          },
          scrambleText: {
            text: "{original}",
            chars: "//ai",
          },
          opacity: 1,
          y: 0,
          duration: 0.9,
        });
      });
      workListMidGroup.forEach((item) => {
        const content = item.querySelector(".cardwork__content");
        const contentTitle = content?.querySelector(
          ".cardwork__content-desc .title",
        );
        const contentDesc = content?.querySelector(
          ".cardwork__content-desc .desc",
        );
        gsap.to(content, {
          scrollTrigger: {
            trigger: item,
            start: "top +=70%",
            end: "bottom bottom",
          },
          opacity: 1,
          y: 0,
          duration: 0.6,
        });
        gsap.to([contentTitle, contentDesc], {
          scrollTrigger: {
            trigger: item,
            start: "top +=70%",
            end: "bottom bottom",
          },
          scrambleText: {
            text: "{original}",
            chars: "//ai",
          },
          opacity: 1,
          y: 0,
          duration: 0.9,
        });
      });
      workListLastGroup.forEach((item) => {
        const content = item.querySelector(".cardwork__content");
        const contentTitle = content?.querySelector(
          ".cardwork__content-desc .title",
        );
        const contentDesc = content?.querySelector(
          ".cardwork__content-desc .desc",
        );
        gsap.to(content, {
          scrollTrigger: {
            trigger: item,
            start: "top +=70%",
            end: "bottom bottom",
          },
          opacity: 1,
          y: 0,
          duration: 0.6,
        });
        gsap.to([contentTitle, contentDesc], {
          scrollTrigger: {
            trigger: item,
            start: "top +=70%",
            end: "bottom bottom",
          },
          scrambleText: {
            text: "{original}",
            chars: "//ai",
          },
          opacity: 1,
          y: 0,
          duration: 0.9,
        });
      });
      gsap.to(worksBtn, {
        scrollTrigger: {
          trigger: worksBtn,
          start: "top bottom",
          end: "bottom bottom",
        },
        opacity: 1,
        y: 0,
        duration: 0.3,
      });

      gsap.set(clientListItems, {
        opacity: 0,
        y: 40,
      });
      clientTl.to(clientsTitle, {
        opacity: 1,
        y: 0,
        duration: 0.3,
      });
      clientTl.to(
        clientsTitleSplit.lines,
        {
          scrambleText: {
            text: "{original}",
            chars: "//ai",
          },
          opacity: 1,
          y: 0,
          duration: 0.9,
        },
        "<-50%",
      );
      clientTl.to(
        clientListItems,
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.3,
        },
        "<",
      );

      if (blogSection && blogTl && blogTitleSplit) {
        gsap.to([blogBtn, blogListItems], {
          opacity: 0,
          y: 40,
          duration: 0,
        });
        blogTl.to(blogTitle, {
          opacity: 1,
          y: 0,
          duration: 0.3,
        });
        blogTl.to(
          blogTitleSplit.lines,
          {
            scrambleText: {
              text: "{original}",
              chars: "//ai",
            },
            opacity: 1,
            y: 0,
            duration: 0.9,
          },
          "<-50%",
        );
        blogTl.to(
          blogBtn,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          "<",
        );
        blogTl.to(
          blogListItems,
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.3,
          },
          "<",
        );
      }
    },
    {
      scope: homeRef,
    },
  );

  return (
    <main className="home" id="home" ref={homeRef}>
      <section className="schero --ptb" id="schero">
        <div className="container">
          <div className="schero__title">
            <h1 className="schero__title-text --gray">
              <strong> Tommy Nguyen </strong>
              <br />
              <span className="schero__title-gray">Front End Developer</span>
            </h1>
          </div>

          <div className="schero__desc">
            <div className="schero__desc-line line"></div>

            <div className="schero__desc-text">
              <p className="para">
                Tommy Nguyen — Front End Developer based in Ho Chi Minh City,
                Vietnam. Currently at Pitek building web applications with
                Next.js, TypeScript, Tailwind CSS, and Firebase. Former Equity
                Analyst at FPTS. Studying Information Technology at UIT.
              </p>
            </div>
          </div>

          <div className="schero__cta">
            <Link
              href="https://github.com/TommyNhatNguyen"
              target="_blank"
              className="btn btn-talk --lg --rounded schero__cta-button"
            >
              <div className="content-top">
                <div className="btn__icon">
                  <Image
                    src="/images/github-logo.png"
                    alt="GitHub"
                    width={20}
                    height={20}
                  />
                </div>
                <span className="btn__text">Github</span>
              </div>
              <div className="content-bottom">
                <div className="btn__icon">
                  <Image
                    src="/images/github-logo.png"
                    alt="GitHub"
                    width={20}
                    height={20}
                  />
                </div>
                <span className="btn__text">Github</span>
              </div>
            </Link>
            <Button
              href={
                "https://drive.google.com/file/d/1fo3-LRv_8G9WCmSmMhSR3tPpGKTsc681/view?usp=sharing"
              }
              target="_blank"
              variant="talk"
              className="btn btn-talk --lg --rounded schero__cta-button"
              icon={FiDownload}
              iconPosition="right"
              isRounded={false}
            >
              My Resume
            </Button>
          </div>
        </div>
      </section>

      <section className="scabout --ptb" id="scabout">
        <div className="container">
          <div className="scabout-wrapper">
            <AnimatedThumbnail
              src="/images/thumbnail.jpg"
              alt="My thumbnail"
              width={500}
              height={300}
              className="scabout__thumbnail"
            />

            <div className="scabout__content">
              <div className="scabout__content-wrapper">
                <HideTextWrapper>
                  <h2 className="scabout__content-title">
                    Skills & Background
                  </h2>
                </HideTextWrapper>
                <HideTextWrapper>
                  <p className="scabout__content-desc para">
                    React.js · TypeScript · Next.js · Node.js · Python ·
                    Firebase · Flutter. Background in equity analysis and
                    financial research. Currently pursuing a second degree in
                    Information Technology at UIT and a hobbyst in C++.
                  </p>
                </HideTextWrapper>
              </div>
              <HideTextWrapper>
                <Button
                  href={ROUTES.ABOUT}
                  variant="link"
                  className="scabout__content-link"
                  icon={FiArrowRight}
                  iconPosition="right"
                  isRounded={false}
                >
                  About Me
                </Button>
              </HideTextWrapper>
            </div>
          </div>
        </div>
      </section>

      <section className="scwork --ptb" id="scwork">
        <div className="container">
          <div className="scwork-wrapper">
            <HideTextWrapper>
              <h2 className="scwork__title">
                <strong>Projects</strong>
              </h2>
            </HideTextWrapper>

            <ul className="scwork__list">
              <li className="scwork__list-item cardwork">
                <Link
                  href={`#`}
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                  className="cardwork__thumbnail"
                >
                  <AnimatedThumbnail
                    src="/images/picare-project.gif"
                    alt="Picare CMS"
                    width={1024}
                    height={976}
                  />
                </Link>
                <HideTextWrapper>
                  <div className="cardwork__content">
                    <div className="cardwork__content-desc">
                      <AnimatedTextHover>
                        <Link
                          href={`#`}
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                          className="title"
                        >
                          PiCare Web Admin Panel (Current Work)
                        </Link>
                      </AnimatedTextHover>
                      <p className="desc">
                        My work at Pitek (Not Public) - Next.js, TypeScript,
                        Tailwind CSS
                      </p>
                    </div>

                    <Button
                      href={`#`}
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      variant="link"
                      size="lg"
                      className="cardwork__content-btn"
                      icon={FiArrowUpRight}
                      isRounded={false}
                    />
                  </div>
                </HideTextWrapper>
              </li>
              <li className="scwork__list-item cardwork">
                <Link
                  href={`https://dqharchitects.vn/vi/home`}
                  target="_blank"
                  className="cardwork__thumbnail"
                >
                  <AnimatedThumbnail
                    src="/images/project-1.png"
                    alt="DQH Architecture"
                    width={1024}
                    height={976}
                  />
                </Link>
                <HideTextWrapper>
                  <div className="cardwork__content">
                    <div className="cardwork__content-desc">
                      <AnimatedTextHover>
                        <Link
                          href={`https://dqharchitects.vn/vi/home`}
                          target="_blank"
                          className="title"
                        >
                          DQH Architecture (Project)
                        </Link>
                      </AnimatedTextHover>
                      <p className="desc">
                        Creative Website & Strapi CMS - Next.js, TypeScript,
                        SCSS
                      </p>
                    </div>

                    <Button
                      href={`https://dqharchitects.vn/vi/home`}
                      target="_blank"
                      variant="link"
                      size="lg"
                      className="cardwork__content-btn"
                      icon={FiArrowUpRight}
                      isRounded={false}
                    />
                  </div>
                </HideTextWrapper>
              </li>
              <li className="scwork__list-item cardwork">
                <Link
                  href={`https://vintage-car-gules.vercel.app/`}
                  target="_blank"
                  className="cardwork__thumbnail"
                >
                  <AnimatedThumbnail
                    src="/images/project-6.jpg"
                    alt="Vintage Car (Concept)"
                    width={1024}
                    height={976}
                  />
                </Link>

                <HideTextWrapper>
                  <div className="cardwork__content">
                    <div className="cardwork__content-desc">
                      <AnimatedTextHover>
                        <Link
                          href={`https://vintage-car-gules.vercel.app/`}
                          target="_blank"
                          className="title"
                        >
                          Vintage Car (Concept)
                        </Link>
                      </AnimatedTextHover>
                      <p className="desc">
                        Animated Website - Next.js, TypeScript, GSAP
                      </p>
                    </div>

                    <Button
                      href={`https://vintage-car-gules.vercel.app/`}
                      target="_blank"
                      variant="link"
                      size="lg"
                      className="cardwork__content-btn"
                      icon={FiArrowUpRight}
                      isRounded={false}
                    />
                  </div>
                </HideTextWrapper>
              </li>
              <li className="scwork__list-item cardwork">
                <Link
                  href={`https://architecture-ver1.vercel.app/`}
                  target="_blank"
                  className="cardwork__thumbnail"
                >
                  <AnimatedThumbnail
                    src="/images/project-2.jpg"
                    alt="RUMAÉ (Concept)"
                    width={1024}
                    height={976}
                  />
                </Link>
                <HideTextWrapper>
                  <div className="cardwork__content">
                    <div className="cardwork__content-desc">
                      <AnimatedTextHover>
                        <Link
                          href={`https://architecture-ver1.vercel.app/`}
                          target="_blank"
                          className="title"
                        >
                          RUMAÉ (Concept)
                        </Link>
                      </AnimatedTextHover>
                      <p className="desc">
                        Website Animation - Next.js, TypeScript, GSAP
                      </p>
                    </div>

                    <Button
                      href={`https://architecture-ver1.vercel.app/`}
                      target="_blank"
                      variant="link"
                      size="lg"
                      className="cardwork__content-btn"
                      icon={FiArrowUpRight}
                      isRounded={false}
                    />
                  </div>
                </HideTextWrapper>
              </li>
              <li className="scwork__list-item cardwork">
                <Link
                  href={`https://finance-flow-rho.vercel.app/`}
                  target="_blank"
                  className="cardwork__thumbnail"
                >
                  <AnimatedThumbnail
                    src="/images/project-4.jpg"
                    alt="project 4"
                    width={400}
                    height={300}
                  />
                </Link>

                <HideTextWrapper>
                  <div className="cardwork__content">
                    <div className="cardwork__content-desc">
                      <AnimatedTextHover>
                        <Link
                          href={`https://finance-flow-rho.vercel.app/`}
                          target="_blank"
                          className="title"
                        >
                          Finance Flow (Concept)
                        </Link>
                      </AnimatedTextHover>
                      <p className="desc">
                        Landing Page - HTML, CSS, JavaScript
                      </p>
                    </div>

                    <Button
                      href={`https://finance-flow-rho.vercel.app/`}
                      target="_blank"
                      variant="link"
                      size="lg"
                      className="cardwork__content-btn"
                      icon={FiArrowUpRight}
                      isRounded={false}
                    />
                  </div>
                </HideTextWrapper>
              </li>
            </ul>

            <HideTextWrapper>
              <Button
                href={ROUTES.WORK}
                variant="link"
                className="scwork__btnviewall"
                icon={FiArrowRight}
                black={true}
                isRounded={false}
              >
                View All Works
              </Button>
            </HideTextWrapper>
          </div>
        </div>
      </section>

      <section className="scclient --ptb" id="scclient">
        <div className="container">
          <div className="scclient-wrapper">
            <HideTextWrapper>
              <h2 className="scclient__title">Experiences & Education</h2>
            </HideTextWrapper>

            <ul className="scclient__list">
              {/* Pitek */}
              <li className="scclient__list-item">
                <Link
                  href="https://pitek.one/"
                  target="_blank"
                  className="logo"
                >
                  <Image
                    src="/images/pitek-logo.webp"
                    alt="Pitek Logo"
                    width={200}
                    height={200}
                  />
                </Link>

                <div className="content">
                  <span className="content__title --block">
                    <span className="font-bold">Front End Developer</span>
                    <br />
                    Tech Stack: Next.js, TypeScript, Tailwind CSS, Firebase
                  </span>
                  <span className="content__year --block">
                    05/2025 - Present
                  </span>
                </div>
              </li>
              {/* Tanca */}
              <li className="scclient__list-item">
                <Link href="https://tanca.io/" target="_blank" className="logo">
                  <Image
                    src="/images/tanca-logo.webp"
                    alt="Tanca Logo"
                    width={200}
                    height={200}
                  />
                </Link>

                <div className="content">
                  <span className="content__title --block">
                    <span className="font-bold">Front End Developer</span>
                    <br />
                    Tech Stack: React Native, React.js, TypeScript
                  </span>
                  <span className="content__year --block">
                    10/2024 - 05/2025
                  </span>
                </div>
              </li>
              {/* FPTS */}
              <li className="scclient__list-item">
                <Link
                  href="https://www.fpts.com.vn/"
                  target="_blank"
                  className="logo"
                >
                  <Image
                    src="/images/fpts.png"
                    alt="FPTS Logo"
                    width={200}
                    height={200}
                  />
                </Link>

                <div className="content">
                  <span className="content__title --block">
                    <span className="font-bold">Equity Analyst</span>
                    <br />
                    Working on: Analysis and Research Report
                  </span>

                  <span className="content__year --block">
                    08/2021 - 03/2024
                  </span>
                </div>
              </li>
              {/* UIT - University of Information Technology */}
              <li className="scclient__list-item">
                <div className="logo">
                  <Image
                    src="/images/uit-logo.png"
                    alt="UIT Logo"
                    width={200}
                    height={200}
                  />
                </div>

                <div className="content">
                  <span className="content__title --block">
                    <span className="font-bold">
                      Second Major in Bachelor of Information Technology
                    </span>
                    <br />
                    University of Information Technology
                  </span>
                  <span className="content__year --block">2024 - Present</span>
                </div>
              </li>
              {/* Informatics Center – University of Science */}
              <li className="scclient__list-item">
                <div className="logo">
                  <Image
                    src="/images/infomatics-center-logo.jpeg"
                    alt="UIT Logo"
                    width={200}
                    height={200}
                  />
                </div>

                <div className="content">
                  <span className="content__title --block">
                    <span className="font-bold">
                      Data Science and Machine Learning Certificate
                    </span>
                    <br />
                    Informatics Center – University of Science
                  </span>
                  <span className="content__year --block">2022 - 2023</span>
                </div>
              </li>
              {/* UEH */}
              <li className="scclient__list-item">
                <div className="logo">
                  <Image
                    src="/images/ueh-logo.png"
                    alt="UEH Logo"
                    width={200}
                    height={200}
                  />
                </div>

                <div className="content">
                  <span className="content__title --block">
                    <span className="font-bold">
                      Bachelor of Business Administration
                    </span>
                    <br />
                    University of Economics HCMC
                  </span>
                  <span className="content__year --block">2018 - 2021</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* <section className="scblog --ptb" id="scblog">
        <div className="container">
          <div className="scblog-wrapper">
            <div className="titlegroup scblog__title">
              <HideTextWrapper>
                <h5 className="titlegroup__title">My Blogs</h5>
              </HideTextWrapper>

              <Button
                href={ROUTES.BLOG}
                variant="link"
                className="btn --btn-link titlegroup__btn scblog__btn"
                icon={FiArrowRight}
                isRounded={false}
              >
                View All Blogs
              </Button>
            </div>

            <ul className="scblog__list">
              <li className="scblog__list-card card --horizontal">
                <Link href={"#"} className="card__thumbnail">
                  <Image
                    src="/images/blog-1.jpg"
                    alt="blog thumbnail 1"
                    width={300}
                    height={200}
                  />
                </Link>
                <div className="card__content">
                  <AnimatedTextHover>
                    <Link href={"#"} className="card__content-title">
                      Comming soon...
                    </Link>
                  </AnimatedTextHover>
                  <span className="card__content-time --block">
                    Comming soon...
                  </span>
                </div>
              </li>
              <li className="scblog__list-card card --horizontal">
                <Link href={ROUTES.BLOG} className="card__thumbnail">
                  <Image
                    src="/images/blog-1.jpg"
                    alt="blog thumbnail 1"
                    width={300}
                    height={200}
                  />
                </Link>
                <div className="card__content">
                  <AnimatedTextHover>
                    <Link href={ROUTES.BLOG} className="card__content-title">
                      Comming soon...
                    </Link>
                  </AnimatedTextHover>
                  <span className="card__content-time --block">
                    Comming soon...
                  </span>
                </div>
              </li>
            </ul>

            <Button
              href={ROUTES.BLOG}
              variant="link"
              className="btn --btn-link scblog__btnviewall --mobile"
              icon={FiArrowRight}
              isRounded={false}
            >
              View All Blogs
            </Button>
          </div>
        </div>
      </section> */}
    </main>
  );
}
