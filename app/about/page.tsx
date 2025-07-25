"use client";
import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "../constants/links";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import AnimatedThumbnail from "../components/AnimatedThumbnail/AnimatedThumbnail";
import { extractNumber } from "../utils/extractNumber";
import AnimatedTextHover from "../components/AnimatedTextHover";
import Button from "../components/Button/Button";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
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
        "#schero"
      ) as HTMLElement;
      const heroTitle = heroSection.querySelector(".schero__title-text");
      const heroDesc = heroSection.querySelector(".schero__desc");
      const heroContent = heroSection.querySelector(".schero__content");

      const heroInfo = heroSection.querySelector(
        ".schero__content-info"
      ) as HTMLElement;
      const heroInfoHeadline = heroInfo.querySelector(".headline");
      const heroInfoDescItems = gsap.utils.toArray(
        ".desc .desc__para"
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
          }
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
        tl.to(
          heroContent,
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            delay: 0.2,
          },
          "<"
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
            "<-50%"
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
              "<"
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
              "<-50%"
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
          }
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
          "<-10%"
        );
        tl.to(
          heroTitle,
          {
            color: `var(--neutral-100)`,
            stagger: 0.2,
            duration: 0.3,
            ease: "power1.inOut",
          },
          "<+0.3"
        );
        tl.to(
          heroContent,
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            delay: 0.2,
          },
          "<"
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
            "<-50%"
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
              "<"
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
              "<-50%"
            );
        });
      });
      // --------------------------------
      // EXPERIENCE
      // --------------------------------
      const experienceSection = aboutRef.current.querySelector(
        "#scexperience"
      ) as HTMLElement;
      const experienceList = gsap.utils.toArray(
        ".scexperience__list-item"
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
          `<-${10 * (index + 1)}%`
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
          "<-10%"
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
          "<-10%"
        );
      });
      // --------------------------------
      // CLIENTS
      // --------------------------------
      const clientsSection = aboutRef.current.querySelector(
        "#scclients"
      ) as HTMLElement;
      const clientsTitle = clientsSection.querySelector(".scclients__title");
      const clientsTitleSplit = SplitText.create(clientsTitle);
      const clientListItems = gsap.utils.toArray(
        ".scclients__list-item"
      ) as HTMLElement[];
      const clientTl = gsap.timeline({
        scrollTrigger: {
          trigger: clientsSection,
          start: "top bottom",
          end: "top bottom",
        },
      });
      gsap.set([clientsTitle, clientListItems], {
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
        "<-50%"
      );
      clientTl.to(
        clientListItems,
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.3,
        },
        "<"
      );
      // --------------------------------
      // CTA
      // --------------------------------
      const ctaSection = aboutRef.current.querySelector(
        "#sccta"
      ) as HTMLElement;
      const ctaTitle = ctaSection.querySelector(".sccta__title-text");
      const ctaTitleSplit = SplitText.create(ctaTitle);
      const ctaLinks = gsap.utils.toArray(
        ".sccta__links-item"
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
        "<+0.3"
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
        "<-50%"
      );
      ctaTl.to(
        ctaTitleSplit.lines,
        {
          color: `var(--neutral-100)`,
          stagger: 0.2,
          duration: 0.3,
          ease: "power1.inOut",
        },
        "<+0.3"
      );
      ctaTl.to(
        ctaButton,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
        },
        "<+0.3"
      );
    },
    {
      scope: aboutRef,
    }
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
                <span className="--gray">About me,</span> a Frontend Developer
                living in Vietnam
              </strong>
            </h1>
          </div>
          {/* Description */}
          <div className="schero__desc">
            <p className="para">
              As a Frontend Developer with 3+ years of experience, I believe in
              crafting websites that are more than just interfaces - they're
              delightful digital experiences where brands and users connect
              meaningfully. I specialize in building intuitive, user-centered
              designs that tell compelling stories.
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
                  I'm the Frontend Developer you need to convey your brand's
                  message to your audience
                </strong>
              </h4>
              {/* Description */}
              <div className="desc">
                <p className="desc__para">
                  With a collaborative mindset and a dedication to frontend
                  development, I work closely with clients to understand their
                  technical requirements and business goals, crafting responsive
                  and performant web solutions that deliver engaging user
                  experiences.
                </p>
                <p className="desc__para">
                  Outside of work, you can find me exploring the latest trends
                  or working on personal projects.
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
                <p className="year">2013 - 2015</p>
                <div className="content">
                  <h4 className="content__title">2 years</h4>
                  <p className="content__desc">as a Product Desinger at Uber</p>
                </div>
              </li>
              <li className="scexperience__list-item">
                <p className="year">2013 - 2015</p>
                <div className="content">
                  <h4 className="content__title">2 years</h4>
                  <p className="content__desc">as a Product Desinger at Uber</p>
                </div>
              </li>
              <li className="scexperience__list-item">
                <p className="year">2013 - 2015</p>
                <div className="content">
                  <h4 className="content__title">2 years</h4>
                  <p className="content__desc">as a Product Desinger at Uber</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="scclients --ptb" id="scclients">
        <div className="container">
          <div className="scclients-wrapper">
            <h5 className="scclients__title">Clients</h5>
            <ul className="scclients__list">
              <li className="scclients__list-item">
                <Link
                  href={"https://etsolution.vn"}
                  target="_blank"
                  className="link"
                >
                  {/* Left */}
                  <div className="link__content">
                    <AnimatedTextHover>
                      <p className="link__content-title --block">
                        Etsolutions - Engineering & Technology Solutions
                      </p>
                    </AnimatedTextHover>
                    <span className="link__content-time --block">
                      May 5, 2023
                    </span>
                  </div>
                  {/* Right */}
                  <div className="link__navigate">
                    <div className="link__navigate-logo">
                      <Image
                        src="/images/etsolution-logo.png"
                        alt="etsolution logo"
                        width={100}
                        height={50}
                      />
                    </div>
                    <Button
                      variant="link"
                      size="lg"
                      className="link__navigate-btn"
                      icon={FiArrowUpRight}
                    />
                  </div>
                </Link>
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
                  Insights
                </Link>
              </li>
            </ul>
            <div className="sccta__title">
              <h1 className="sccta__title-text --gray">
                <strong>
                  Want to create something
                  <span className="--gray"> awesome?</span>
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
