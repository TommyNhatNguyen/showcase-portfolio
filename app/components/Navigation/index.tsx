import { ROUTES } from "@/app/constants/links";
import Link from "next/link";
import React, { useRef } from "react";
import Button from "../Button/Button";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import clsx from "clsx";
import AnimatedTextHover from "../AnimatedTextHover";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SectionSocial from "../Footer/SectionSocial";

type Props = {
  isHamburgerActive: boolean;
  handleHideHamburger: () => void;
};

const Navigation = ({ isHamburgerActive, handleHideHamburger }: Props) => {
  const navRef = useRef<HTMLDivElement>(null);
  const _onHideHamburger = () => {
    handleHideHamburger();
  };
  useGSAP(
    () => {
      const GAP = 16;
      const tl = gsap.timeline({});
      const bgOpacity = document.querySelector(".bg-opacity");
      const navListItem = document.querySelectorAll(".nav__list-item");
      const navListItemText = document.querySelectorAll(
        ".nav__list-item .link__text"
      );
      const navListItemArrow = document.querySelectorAll(
        ".nav__list-item .arrow"
      );
      if (isHamburgerActive) {
        tl.set([navRef.current, bgOpacity], {
          opacity: 1,
        });
        tl.set(navListItem, {
          x: -navListItemArrow[0].clientWidth - GAP,
        });
        tl.to(bgOpacity, {
          height: "100%",
          duration: 0.6,
          ease: "power3.inOut",
        });
        tl.to(
          navRef.current,
          {
            height: "100%",
            paddingTop: "var(--header-height)",
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "<+0.3"
        );
        tl.from(
          navListItemText,
          {
            opacity: 0,
            x: -100,
            stagger: 0.05,
            duration: 0.6,
            ease: "power3.inOut",
          },
          "<"
        );
      } else {
        tl.to([navRef.current, bgOpacity], {
          opacity: 0,
        });
        tl.set(navRef.current, {
          height: "0",
          y: -96,
        });
        tl.set(bgOpacity, {
          height: "0",
        });
      }
    },
    {
      scope: navRef,
      dependencies: [isHamburgerActive],
    }
  );
  return (
    <div className="nav-wrapper">
      <nav
        ref={navRef}
        className={clsx("nav", isHamburgerActive && "--active")}
      >
        <div className="container">
          <ul className="nav__list">
            <li className="nav__list-item">
              <Link
                href={ROUTES.HOME}
                className="link"
                onClick={_onHideHamburger}
                prefetch={true}
              >
                <div className="arrow">
                  <FiArrowUpRight />
                </div>
                <AnimatedTextHover>
                  <div className="link__text">
                    Home <span className="link__text-position">(01)</span>
                  </div>
                </AnimatedTextHover>
              </Link>
            </li>
            <li className="nav__list-item">
              <Link
                href={ROUTES.ABOUT}
                className="link"
                onClick={_onHideHamburger}
                prefetch={true}
              >
                <div className="arrow">
                  <FiArrowUpRight />
                </div>
                <AnimatedTextHover>
                  <div className="link__text">
                    About Me <span className="link__text-position">(02)</span>
                  </div>
                </AnimatedTextHover>
              </Link>
            </li>
            <li className="nav__list-item">
              <Link
                href={ROUTES.WORK}
                className="link"
                onClick={_onHideHamburger}
                prefetch={true}
              >
                <div className="arrow">
                  <FiArrowUpRight />
                </div>
                <AnimatedTextHover>
                  <div className="link__text">
                    Works <span className="link__text-position">(03)</span>
                  </div>
                </AnimatedTextHover>
              </Link>
            </li>
            <li className="nav__list-item">
              <Link
                href={ROUTES.BLOG}
                className="link"
                onClick={_onHideHamburger}
                prefetch={true}
              >
                <div className="arrow">
                  <FiArrowUpRight />
                </div>
                <AnimatedTextHover>
                  <div className="link__text">
                    Blog <span className="link__text-position">(04)</span>
                  </div>
                </AnimatedTextHover>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="bg-opacity"></div>
    </div>
  );
};

export default Navigation;
