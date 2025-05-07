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

export default function Home() {
  const homeRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      // --------------------------------
      // HERO
      // --------------------------------
      // 1. Scramble text on scroll
      if (!homeRef.current) return;
      const heroSection = homeRef.current.querySelector(
        "#schero"
      ) as HTMLElement;
      const heroTitle = heroSection.querySelector(".schero__title-text");
      const heroDesc = heroSection.querySelector(".schero__desc-text");
      const heroDescLine = heroSection.querySelector(".schero__desc-line");
      const heroTitleSplit = SplitText.create(heroTitle);
      const tl = gsap.timeline({});
      tl.from([heroDesc, heroTitle], {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.3,
      });
      tl.from(
        heroDescLine,
        {
          width: 0,
          duration: 1.2,
          ease: "power3.out",
        },
        "<+0.6"
      );
      tl.to(heroTitleSplit.chars, {
        scrollTrigger: {
          trigger: heroSection,
          start: "top top",
          end: "+=300",
          scrub: true,
        },
        color: `var(--neutral-100)`,
        stagger: 0.3,
        duration: 0.3,
        // Give natural feel-smooth but not distracting
        ease: "power1.out",
      });
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
            <ul className="schero__cta-socials">
              <li className="social">
                <Link href={SOCIAL_LINKS.INSTAGRAM} className="social__link">
                  <span className="social__link-text">Instagram</span>
                  <div className="social__link-icon">
                    <FiArrowUpRight />
                  </div>
                </Link>
              </li>
              <li className="social">
                <Link href={SOCIAL_LINKS.BEHANCE} className="social__link">
                  <span className="social__link-text">Behance</span>
                  <div className="social__link-icon">
                    <FiArrowUpRight />
                  </div>
                </Link>
              </li>
              <li className="social">
                <Link href={SOCIAL_LINKS.DRIBBLE} className="social__link">
                  <span className="social__link-text">Dribble</span>
                  <div className="social__link-icon">
                    <FiArrowUpRight />
                  </div>
                </Link>
              </li>
            </ul>

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
            <div className="scabout__thumbnail">
              <Image
                src="/images/thumbnail.jpg"
                alt="My thumbnail"
                width={500}
                height={300}
              />
            </div>

            <div className="scabout__content">
              <div className="scabout__content-wrapper">
                <h2 className="scabout__content-title">
                  Design that sparks engagement and inspires action
                </h2>
                <p className="scabout__content-desc para">
                  Concentrate on your primary objective which is expanding your
                  business, and leave it to me to ensure that your business is
                  efficiently portrayed in the digital realm and distinguishes
                  itself from the rivals.
                </p>
              </div>
              <Button
                href={ROUTES.ABOUT}
                variant="link"
                className="scabout__content-link"
                icon={FiArrowRight}
                iconPosition="right"
              >
                About Me
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="scwork --ptb" id="scwork">
        <div className="container">
          <div className="scwork-wrapper">
            <h2 className="scwork__title">
              <strong>Discover my latest works</strong>
            </h2>

            <ul className="scwork__list">
              <li className="scwork__list-item cardwork">
                <Link href="#" className="cardwork__thumbnail">
                  <Image
                    src="/images/project-1.jpg"
                    alt="project 1"
                    width={400}
                    height={300}
                  />
                </Link>

                <div className="cardwork__content">
                  <div className="cardwork__content-desc">
                    <Link href="#" className="title">
                      Sportly
                    </Link>
                    <p className="desc">Mobile App Design</p>
                  </div>

                  <Button
                    href="#"
                    variant="icon"
                    size="md"
                    className="cardwork__content-btn"
                    icon={FiArrowRight}
                  />
                </div>
              </li>
              <li className="scwork__list-item cardwork">
                <Link href="#" className="cardwork__thumbnail">
                  <Image
                    src="/images/project-2.jpg"
                    alt="project 2"
                    width={400}
                    height={300}
                  />
                </Link>

                <div className="cardwork__content">
                  <div className="cardwork__content-desc">
                    <Link href="#" className="title">
                      Payrole
                    </Link>
                    <p className="desc">Mobile App Design</p>
                  </div>

                  <Button
                    href="#"
                    variant="icon"
                    size="md"
                    className="cardwork__content-btn"
                    icon={FiArrowRight}
                  />
                </div>
              </li>
              <li className="scwork__list-item cardwork">
                <Link href="#" className="cardwork__thumbnail">
                  <Image
                    src="/images/project-3.jpg"
                    alt="project 3"
                    width={400}
                    height={300}
                  />
                </Link>

                <div className="cardwork__content">
                  <div className="cardwork__content-desc">
                    <Link href="#" className="title">
                      Wepay
                    </Link>
                    <p className="desc">Mobile App Design</p>
                  </div>

                  <Button
                    href="#"
                    variant="icon"
                    size="md"
                    className="cardwork__content-btn"
                    icon={FiArrowRight}
                  />
                </div>
              </li>
              <li className="scwork__list-item cardwork">
                <Link href="#" className="cardwork__thumbnail">
                  <Image
                    src="/images/project-4.jpg"
                    alt="project 4"
                    width={400}
                    height={300}
                  />
                </Link>

                <div className="cardwork__content">
                  <div className="cardwork__content-desc">
                    <Link href="#" className="title">
                      Estatery
                    </Link>
                    <p className="desc">Mobile App Design</p>
                  </div>

                  <Button
                    href="#"
                    variant="icon"
                    size="md"
                    className="cardwork__content-btn"
                    icon={FiArrowRight}
                  />
                </div>
              </li>
              <li className="scwork__list-item cardwork">
                <Link href="#" className="cardwork__thumbnail">
                  <Image
                    src="/images/project-5.jpg"
                    alt="project 5"
                    width={400}
                    height={300}
                  />
                </Link>

                <div className="cardwork__content">
                  <div className="cardwork__content-desc">
                    <Link href="#" className="title">
                      Sportly
                    </Link>
                    <p className="desc">Mobile App Design</p>
                  </div>

                  <Button
                    href="#"
                    variant="icon"
                    size="md"
                    className="cardwork__content-btn"
                    icon={FiArrowRight}
                  />
                </div>
              </li>
            </ul>

            <Button
              href={ROUTES.WORK}
              variant="link"
              className="scwork__btnviewall"
              icon={FiArrowRight}
              black
            >
              View All Works
            </Button>
          </div>
        </div>
      </section>

      <section className="scclient --ptb" id="scclient">
        <div className="container">
          <div className="scclient-wrapper">
            <h2 className="scclient__title">
              A visual partner for brands, companies, and agencies
            </h2>

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
              <h5 className="titlegroup__title">Latest Insights</h5>

              <Button
                href={ROUTES.BLOG}
                variant="link"
                className="btn --btn-link titlegroup__btn scblog__btn"
                icon={FiArrowRight}
              >
                View All Insights
              </Button>
            </div>

            <ul className="scblog__list">
              <li className="scblog__list-card card --horizontal">
                <div className="card__thumbnail">
                  <Image
                    src="/images/blog-1.jpg"
                    alt="blog thumbnail 1"
                    width={300}
                    height={200}
                  />
                </div>
                <div className="card__content">
                  <p className="card__content-title">
                    Mastering the Art of Color Theory: A Visual Designer's Guide
                  </p>
                  <span className="card__content-time --block">
                    May 5, 2023
                  </span>
                </div>
              </li>
              <li className="scblog__list-card card --horizontal">
                <div className="card__thumbnail">
                  <Image
                    src="/images/blog-1.jpg"
                    alt="blog thumbnail 1"
                    width={300}
                    height={200}
                  />
                </div>
                <div className="card__content">
                  <p className="card__content-title">
                    Designing for User Experience: Creating Intuitive and
                    Engaging Interfaces
                  </p>
                  <span className="card__content-time --block">
                    May 5, 2023
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
