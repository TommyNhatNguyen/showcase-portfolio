"use client";
import Image from "next/image";
import Link from "next/link";
import { ROUTES, SOCIAL_LINKS } from "./constants/links";
import Button from "./components/Button/Button";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import AnimatedThumbnail from "./components/AnimatedThumbnail/AnimatedThumbnail";
import HideTextWrapper from "./components/HideTextWrapper/HideTextWrapper";
import AnimatedTextHover from "./components/AnimatedTextHover";

export default function Home() {
  const homeRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      // --------------------------------
      // HERO
      // --------------------------------
      if (!homeRef.current) return;
      const heroSection = homeRef.current.querySelector(
        "#schero"
      ) as HTMLElement;
      const heroTitle = heroSection.querySelector(".schero__title-text");
      const heroDesc = heroSection.querySelector(".schero__desc-text");
      const heroDescLine = heroSection.querySelector(".schero__desc-line");
      const heroCta = heroSection.querySelector(".schero__cta-button");
      const heroTitleSplit = SplitText.create(heroTitle);
      const heroDescSplit = SplitText.create(heroDesc);
      const tl = gsap.timeline({ paused: true });
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
        heroCta,
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          delay: 0.2,
        },
        "<"
      );
      tl.from(
        heroDescLine,
        {
          width: 0,
          duration: 0.3,
          ease: "power3.inOut",
        },
        "<"
      );

      const checkLoading = () => {
        if (!document.body.classList.contains("--loading")) {
          tl.play();
        } else {
          gsap.delayedCall(0, checkLoading);
        }
      };

      checkLoading();

      // --------------------------------
      // ABOUT
      // --------------------------------
      const aboutSection = homeRef.current.querySelector(
        "#scabout"
      ) as HTMLElement;
      const aboutTitle = aboutSection.querySelector(".scabout__content-title");
      const aboutTitleSplit = SplitText.create(aboutTitle);
      const aboutDesc = aboutSection.querySelector(".scabout__content-desc");
      const aboutDescSplit = SplitText.create(aboutDesc);
      const aboutButton = aboutSection.querySelector(".scabout__content-link");

      const aboutTl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutSection,
          start: "top +=90%",
          end: "bottom bottom",
        },
      });
      let aboutTextDuration = 0.3;
      aboutTl
        .to(
          [aboutTitle],
          {
            opacity: 1,
            y: 0,
            duration: aboutTextDuration,
          },
          "<+0.3"
        )
        .to(
          aboutDesc,
          {
            opacity: 1,
            y: 0,
            duration: aboutTextDuration * 2,
          },
          "<"
        )
        .to(
          aboutButton,
          {
            opacity: 1,
            y: 0,
            duration: aboutTextDuration * 2.5,
          },
          "<"
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
          "<-50%"
        );
      // --------------------------------
      // WORKS
      // --------------------------------
      const worksSection = homeRef.current.querySelector(
        "#scwork"
      ) as HTMLElement;
      const worksTitle = worksSection.querySelector(".scwork__title");
      const worksTitleSplit = SplitText.create(worksTitle);
      const worksBtn = worksSection.querySelector(".scwork__btnviewall");
      const workListItems = gsap.utils.toArray(
        ".scwork__list-item"
      ) as HTMLElement[];
      const workTl = gsap.timeline({
        scrollTrigger: {
          trigger: worksSection,
          start: "top +=90%",
          end: "bottom bottom",
        },
      });
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
          "<-50%"
        );
      const workListFirstGroup = workListItems.slice(0, 3);
      const workListMidGroup = workListItems.slice(3, 4);
      const workListLastGroup = workListItems.slice(4);
      workListFirstGroup.forEach((item) => {
        const content = item.querySelector(".cardwork__content");
        const contentTitle = content?.querySelector(
          ".cardwork__content-desc .title"
        );
        const contentDesc = content?.querySelector(
          ".cardwork__content-desc .desc"
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
          ".cardwork__content-desc .title"
        );
        const contentDesc = content?.querySelector(
          ".cardwork__content-desc .desc"
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
          ".cardwork__content-desc .title"
        );
        const contentDesc = content?.querySelector(
          ".cardwork__content-desc .desc"
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

      // --------------------------------
      // CLIENTS
      // --------------------------------
      const clientsSection = homeRef.current.querySelector(
        "#scclient"
      ) as HTMLElement;
      const clientsTitle = clientsSection.querySelector(".scclient__title");
      const clientsTitleSplit = SplitText.create(clientsTitle);
      const clientListItems = gsap.utils.toArray(
        ".scclient__list-item"
      ) as HTMLElement[];
      const clientTl = gsap.timeline({
        scrollTrigger: {
          trigger: clientsSection,
          start: "top +=90%",
          end: "bottom bottom",
        },
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
      // BLOG
      // --------------------------------
      const blogSection = homeRef.current.querySelector(
        "#scblog"
      ) as HTMLElement;
      const blogTitle = blogSection.querySelector(
        ".scblog__title .titlegroup__title"
      );
      const blogTitleSplit = SplitText.create(blogTitle);
      const blogBtn = blogSection.querySelector(".scblog__btn");
      const blogListItems = gsap.utils.toArray(
        ".scblog__list-card"
      ) as HTMLElement[];
      const blogTl = gsap.timeline({
        scrollTrigger: {
          trigger: blogSection,
          start: "top +=90%",
          end: "bottom bottom",
        },
      });
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
        "<-50%"
      );
      blogTl.to(
        blogBtn,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
        },
        "<"
      );
      blogTl.to(
        blogListItems,
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.3,
        },
        "<"
      );
    },
    {
      scope: homeRef,
    }
  );
  return (
    <main className="home" id="home" ref={homeRef}>
      <section className="schero --ptb" id="schero">
        <div className="container">
          <div className="schero__title">
            <h1 className="schero__title-text --gray">
              <strong> I'm a visual designer with passion to create </strong>
              <br />
              <span className="schero__title-gray">a great experiences</span>
            </h1>
          </div>

          <div className="schero__desc">
            <div className="schero__desc-line line"></div>

            <div className="schero__desc-text">
              <p className="para">
                I'm Ivan, a Visual Designer living in Munich, and I focus on
                making digital experiences that are easy to use, enjoyable, and
                get the job done.
              </p>
            </div>
          </div>

          <div className="schero__cta">
            <Button
              href="#"
              variant="talk"
              size="lg"
              className="schero__cta-button"
              icon={FiArrowRight}
              iconPosition="right"
            >
              Let's Talk
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
                    Design that sparks engagement and inspires action
                  </h2>
                </HideTextWrapper>
                <HideTextWrapper>
                  <p className="scabout__content-desc para">
                    Concentrate on your primary objective which is expanding
                    your business, and leave it to me to ensure that your
                    business is efficiently portrayed in the digital realm and
                    distinguishes itself from the rivals.
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
                <strong>Discover my latest works</strong>
              </h2>
            </HideTextWrapper>

            <ul className="scwork__list">
              <li className="scwork__list-item cardwork">
                <Link href={ROUTES.WORK} className="cardwork__thumbnail">
                  <AnimatedThumbnail
                    src="/images/project-1.jpg"
                    alt="project 1"
                    width={400}
                    height={300}
                  />
                </Link>

                <HideTextWrapper>
                  <div className="cardwork__content">
                    <div className="cardwork__content-desc">
                      <AnimatedTextHover>
                        <Link href={ROUTES.WORK} className="title">
                          Sportly
                        </Link>
                      </AnimatedTextHover>
                      <p className="desc">Mobile App Design</p>
                    </div>

                    <Button
                      href={ROUTES.WORK}
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
                <Link href={ROUTES.WORK} className="cardwork__thumbnail">
                  <AnimatedThumbnail
                    src="/images/project-2.jpg"
                    alt="project 2"
                    width={400}
                    height={300}
                  />
                </Link>
                <HideTextWrapper>
                  <div className="cardwork__content">
                    <div className="cardwork__content-desc">
                      <AnimatedTextHover>
                        <Link href={ROUTES.WORK} className="title">
                          Payrole
                        </Link>
                      </AnimatedTextHover>
                      <p className="desc">Mobile App Design</p>
                    </div>

                    <Button
                      href={ROUTES.WORK}
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
                <Link href={ROUTES.WORK} className="cardwork__thumbnail">
                  <AnimatedThumbnail
                    src="/images/project-3.jpg"
                    alt="project 3"
                    width={400}
                    height={300}
                  />
                </Link>

                <HideTextWrapper>
                  <div className="cardwork__content">
                    <div className="cardwork__content-desc">
                      <AnimatedTextHover>
                        <Link href={ROUTES.WORK} className="title">
                          Wepay
                        </Link>
                      </AnimatedTextHover>
                      <p className="desc">Mobile App Design</p>
                    </div>

                    <Button
                      href={ROUTES.WORK}
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
                <Link href={ROUTES.WORK} className="cardwork__thumbnail">
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
                        <Link href={ROUTES.WORK} className="title">
                          Estatery
                        </Link>
                      </AnimatedTextHover>
                      <p className="desc">Mobile App Design</p>
                    </div>

                    <Button
                      href={ROUTES.WORK}
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
                <Link href={ROUTES.WORK} className="cardwork__thumbnail">
                  <AnimatedThumbnail
                    src="/images/project-5.jpg"
                    alt="project 5"
                    width={400}
                    height={300}
                  />
                </Link>

                <HideTextWrapper>
                  <div className="cardwork__content">
                    <div className="cardwork__content-desc">
                      <AnimatedTextHover>
                        <Link href={ROUTES.WORK} className="title">
                          Sportly
                        </Link>
                      </AnimatedTextHover>
                      <p className="desc">Mobile App Design</p>
                    </div>

                    <Button
                      href={ROUTES.WORK}
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
              <h2 className="scclient__title">
                A visual partner for brands, companies, and agencies
              </h2>
            </HideTextWrapper>

            <ul className="scclient__list">
              <li className="scclient__list-item">
                <div className="logo">
                  <Image
                    src="/images/logo-1.png"
                    alt="client 1"
                    width={100}
                    height={50}
                  />
                </div>

                <div className="content">
                  <span className="content__title --block">
                    UIUX & Branding
                  </span>

                  <span className="content__year --block">2022</span>
                </div>
              </li>
              <li className="scclient__list-item">
                <div className="logo">
                  <Image
                    src="/images/logo-1.png"
                    alt="client 1"
                    width={100}
                    height={50}
                  />
                </div>

                <div className="content">
                  <span className="content__title --block">
                    UIUX & Branding
                  </span>

                  <span className="content__year --block">2022</span>
                </div>
              </li>
              <li className="scclient__list-item">
                <div className="logo">
                  <Image
                    src="/images/logo-1.png"
                    alt="client 1"
                    width={100}
                    height={50}
                  />
                </div>

                <div className="content">
                  <span className="content__title --block">
                    UIUX & Branding
                  </span>

                  <span className="content__year --block">2022</span>
                </div>
              </li>
              <li className="scclient__list-item">
                <div className="logo">
                  <Image
                    src="/images/logo-1.png"
                    alt="client 1"
                    width={100}
                    height={50}
                  />
                </div>

                <div className="content">
                  <span className="content__title --block">
                    UIUX & Branding
                  </span>

                  <span className="content__year --block">2022</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="scblog --ptb" id="scblog">
        <div className="container">
          <div className="scblog-wrapper">
            <div className="titlegroup scblog__title">
              <HideTextWrapper>
                <h5 className="titlegroup__title">Latest Insights</h5>
              </HideTextWrapper>

              <Button
                href={ROUTES.BLOG}
                variant="link"
                className="btn --btn-link titlegroup__btn scblog__btn"
                icon={FiArrowRight}
                isRounded={false}
              >
                View All Insights
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
                      Mastering the Art of Color Theory: A Visual Designer's
                      Guide
                    </Link>
                  </AnimatedTextHover>
                  <span className="card__content-time --block">
                    May 5, 2023
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
                      Designing for User Experience: Creating Intuitive and
                      Engaging Interfaces
                    </Link>
                  </AnimatedTextHover>
                  <span className="card__content-time --block">
                    May 5, 2023
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
              View All Insights
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
