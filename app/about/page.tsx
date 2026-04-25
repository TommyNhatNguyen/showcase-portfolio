"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import Link from "next/link";
import { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import AnimatedThumbnail from "../components/AnimatedThumbnail/AnimatedThumbnail";
import Button from "../components/Button/Button";
import { ROUTES, SOCIAL_LINKS } from "../constants/links";
import { BREAKPOINTS } from "../constants/media";

export default function About() {
  const aboutRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      // --------------------------------
      // HERO
      // --------------------------------
      if (!aboutRef.current) return;
      const heroSection = aboutRef.current.querySelector(
        "#schero",
      ) as HTMLElement;
      const heroTitle = heroSection.querySelector(".schero__title-text");
      const heroDesc = heroSection.querySelector(".schero__desc");
      const heroContent = heroSection.querySelector(".schero__content");

      const heroInfo = heroSection.querySelector(
        ".schero__content-info",
      ) as HTMLElement;
      const heroInfoHeadline = heroInfo.querySelector(".headline");
      const heroInfoDescItems = gsap.utils.toArray(
        ".desc .desc__para",
      ) as HTMLElement[];

      const tl = gsap.timeline({});
      const heroInfoTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroInfo,
          start: "top bottom",
          end: "top bottom",
        },
      });
      let mm = gsap.matchMedia();
      mm.add(BREAKPOINTS.desktop, () => {
        const heroTitleSplit = SplitText.create(heroTitle);
        const heroDescSplit = SplitText.create(heroDesc);
        const heroInfoHeadLineSplit = SplitText.create(heroInfoHeadline);
        gsap.set(
          [
            heroDesc,
            heroTitle,
            heroContent,
            heroInfoHeadline,
            heroInfoDescItems,
          ],
          {
            opacity: 0,
            y: 40,
          },
        );
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
          heroContent,
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            delay: 0.2,
          },
          "<",
        );
        heroInfoTl
          .to(heroInfoHeadline, {
            opacity: 1,
            y: 0,
            duration: 0.3,
          })
          .to(
            heroInfoHeadLineSplit.lines,
            {
              scrambleText: {
                text: "{original}",
                chars: "//ai",
              },
              duration: 0.9,
              ease: "none",
            },
            "<-50%",
          );
        heroInfoDescItems.map((item) => {
          const split = SplitText.create(item);
          heroInfoTl
            .to(
              item,
              {
                opacity: 1,
                y: 0,
                duration: 0.3,
              },
              "<",
            )
            .to(
              split.lines,
              {
                scrambleText: {
                  text: "{original}",
                  chars: "//ai",
                },
                duration: 0.9,
                ease: "none",
              },
              "<-50%",
            );
        });
      });
      mm.add(BREAKPOINTS.mobile, () => {
        gsap.set(
          [
            heroDesc,
            heroTitle,
            heroContent,
            heroInfoHeadline,
            heroInfoDescItems,
          ],
          {
            opacity: 0,
            y: 40,
          },
        );
        tl.to([heroTitle, heroDesc], {
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
          heroContent,
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            delay: 0.2,
          },
          "<",
        );
        heroInfoTl
          .to(heroInfoHeadline, {
            opacity: 1,
            y: 0,
            duration: 0.3,
          })
          .to(
            heroInfoHeadline,
            {
              scrambleText: {
                text: "{original}",
                chars: "//ai",
              },
              duration: 0.9,
              ease: "none",
            },
            "<-50%",
          );
        heroInfoDescItems.map((item) => {
          const split = SplitText.create(item);
          heroInfoTl
            .to(
              item,
              {
                opacity: 1,
                y: 0,
                duration: 0.3,
              },
              "<",
            )
            .to(
              split.lines,
              {
                scrambleText: {
                  text: "{original}",
                  chars: "//ai",
                },
                duration: 0.9,
                ease: "none",
              },
              "<-50%",
            );
        });
      });
      // --------------------------------
      // EXPERIENCE
      // --------------------------------
      const experienceSection = aboutRef.current.querySelector(
        "#scexperience",
      ) as HTMLElement;
      const experienceList = gsap.utils.toArray(
        ".scexperience__list-item",
      ) as HTMLElement[];
      const experienceListTl = gsap.timeline({
        scrollTrigger: {
          trigger: experienceSection,
          start: "top bottom",
          end: "top bottom",
        },
      });
      gsap.set(experienceList, {
        opacity: 0,
        y: 40,
      });
      experienceListTl.to(experienceList, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.3,
      });
      experienceList.forEach((item, index) => {
        const title = item.querySelector(".content__title") as HTMLElement;
        const year = item.querySelector(".year") as HTMLElement;
        const desc = item.querySelector(".content__desc") as HTMLElement;
        experienceListTl.to(
          title,
          {
            scrambleText: {
              text: "{original}",
              chars: "//ai",
            },
            duration: 0.9 * (index + 1),
            ease: "none",
          },
          `<-${10 * (index + 1)}%`,
        );
        experienceListTl.to(
          year,
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
        experienceListTl.to(
          desc,
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
      });
      // --------------------------------
      // CLIENTS
      // --------------------------------
      // const clientsSection = aboutRef.current.querySelector(
      //   "#scclients",
      // ) as HTMLElement;
      // const clientsTitle = clientsSection.querySelector(".scclients__title");
      // const clientsTitleSplit = SplitText.create(clientsTitle);
      // const clientListItems = gsap.utils.toArray(
      //   ".scclients__list-item",
      // ) as HTMLElement[];
      // const clientTl = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: clientsSection,
      //     start: "top bottom",
      //     end: "top bottom",
      //   },
      // });
      // gsap.set([clientsTitle, clientListItems], {
      //   opacity: 0,
      //   y: 40,
      // });
      // clientTl.to(clientsTitle, {
      //   opacity: 1,
      //   y: 0,
      //   duration: 0.3,
      // });
      // clientTl.to(
      //   clientsTitleSplit.lines,
      //   {
      //     scrambleText: {
      //       text: "{original}",
      //       chars: "//ai",
      //     },
      //     opacity: 1,
      //     y: 0,
      //     duration: 0.9,
      //   },
      //   "<-50%",
      // );
      // clientTl.to(
      //   clientListItems,
      //   {
      //     opacity: 1,
      //     y: 0,
      //     duration: 0.9,
      //     stagger: 0.3,
      //   },
      //   "<",
      // );
      // --------------------------------
      // CTA
      // --------------------------------
      const ctaSection = aboutRef.current.querySelector(
        "#sccta",
      ) as HTMLElement;
      const ctaTitle = ctaSection.querySelector(".sccta__title-text");
      const ctaTitleSplit = SplitText.create(ctaTitle);
      const ctaLinks = gsap.utils.toArray(
        ".sccta__links-item",
      ) as HTMLElement[];
      const ctaButton = ctaSection.querySelector(".btn-talk") as HTMLElement;
      const ctaTl = gsap.timeline({
        scrollTrigger: {
          trigger: ctaSection,
          start: "top bottom",
          end: "top bottom",
        },
      });
      gsap.set([ctaTitle, ctaLinks, ctaButton], {
        opacity: 0,
        y: 40,
      });
      ctaTl.to(ctaLinks, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
      });
      ctaTl.to(
        ctaTitle,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "<+0.3",
      );
      ctaTl.to(
        ctaTitleSplit.lines,
        {
          scrambleText: {
            text: "{original}",
            chars: "//ai",
          },
          duration: 0.9,
          ease: "none",
        },
        "<-50%",
      );
      ctaTl.to(
        ctaTitleSplit.lines,
        {
          color: `var(--neutral-100)`,
          stagger: 0.2,
          duration: 0.3,
          ease: "power1.inOut",
        },
        "<+0.3",
      );
      ctaTl.to(
        ctaButton,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
        },
        "<+0.3",
      );
    },
    {
      scope: aboutRef,
    },
  );

  return (
    <main className="about" id="main" ref={aboutRef}>
      {/* Hero */}
      <section className="schero --ptb" id="schero">
        <div className="container">
          {/* Title */}
          <div className="schero__title">
            <h1 className="schero__title-text --gray">
              <strong>
                <span className="--gray">About me,</span> a Front End Developer
                based in Vietnam
              </strong>
            </h1>
          </div>
          {/* Description */}
          <div className="schero__desc">
            <p className="para">
              Tommy Nguyen. Front End Developer based in Ho Chi Minh City,
              Vietnam. Experienced with React.js, TypeScript, Next.js, Node.js.
              Transitioned from financial analysis into software development.
            </p>
          </div>
          {/* Content */}
          <div className="schero__content">
            {/* Thumbnail */}
            <div className="schero__content-thumbnail">
              <AnimatedThumbnail
                src="/images/thumbnail.jpg"
                alt="about hero"
                className="schero__content-thumbnail-img"
                width={500}
                height={300}
              />
            </div>
            {/* Info */}
            <div className="schero__content-info">
              {/* Headline */}
              <h4 className="headline">
                <strong>
                  Front End Developer with a background in financial analysis
                  and a focus on clean, maintainable code
                </strong>
              </h4>
              {/* Description */}
              <div className="desc">
                <p className="desc__para">
                  Currently at Pitek (Next.js, TypeScript, Tailwind CSS,
                  Firebase). Previously at Tanca (React.js, React Native,
                  TypeScript). Prior to software, worked as an Equity Analyst at
                  FPTS for three years covering research and investment reports.
                </p>
                <p className="desc__para">
                  Pursuing a second degree in Information Technology at the
                  University of Information Technology (UIT). Holds a Bachelor
                  of Business Administration from the University of Economics
                  HCMC.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="scexperience --ptb" id="scexperience">
        <div className="container">
          {/* Title */}
          <div className="scexperience-wrapper">
            <ul className="scexperience__list">
              <li className="scexperience__list-item">
                <p className="year">05/2025 – Present</p>
                <div className="content">
                  <h4 className="content__title">Front End Developer</h4>
                  <p className="content__desc">
                    at Pitek · Next.js, TypeScript, Tailwind CSS, Firebase
                  </p>
                </div>
              </li>
              <li className="scexperience__list-item">
                <p className="year">10/2024 – 05/2025</p>
                <div className="content">
                  <h4 className="content__title">Front End Developer</h4>
                  <p className="content__desc">
                    at Tanca · React.js, React Native, TypeScript
                  </p>
                </div>
              </li>
              <li className="scexperience__list-item">
                <p className="year">08/2021 – 03/2024</p>
                <div className="content">
                  <h4 className="content__title">Equity Analyst</h4>
                  <p className="content__desc">
                    at FPTS · research, analysis & investment reports
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sccta --ptb" id="sccta">
        <div className="container">
          <div className="sccta-wrapper">
            {/* Links */}
            <ul className="sccta__links">
              <li className="sccta__links-item">
                <Link href={ROUTES.HOME} className="link">
                  Home
                </Link>
              </li>
              <li className="sccta__links-item">
                <Link href={ROUTES.WORK} className="link">
                  Work
                </Link>
              </li>
              <li className="sccta__links-item">
                <Link href={ROUTES.BLOG} className="link">
                  Blogs
                </Link>
              </li>
              <li className="sccta__links-item">
                <Link href={SOCIAL_LINKS.GITHUB} className="link">
                  GitHub
                </Link>
              </li>
            </ul>
            <div className="sccta__title">
              <h1 className="sccta__title-text --gray">
                <strong>
                  Open to opportunities
                  <span className="--gray"> — let's talk.</span>
                </strong>
              </h1>
            </div>
            {/* CTA */}
            <Button
              href="mailto:nguyenanhnhat123456@gmail.com"
              variant="talk"
              size="lg"
              className="--btn-primary"
              icon={FiArrowRight}
              iconPosition="right"
            >
              Let's Connect
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
