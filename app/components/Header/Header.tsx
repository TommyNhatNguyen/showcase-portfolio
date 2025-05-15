import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ROUTES } from "../../constants/links";
import Button from "../Button/Button";
import { FiArrowRight } from "react-icons/fi";
import clsx from "clsx";
import AnimatedTextHover from "../AnimatedTextHover";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Observer } from "gsap/all";
import { usePathname } from "next/navigation";

type HeaderProps = {
  handleToggleHamburger: () => void;
  isHamburgerActive: boolean;
};

const Header = ({ handleToggleHamburger, isHamburgerActive }: HeaderProps) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  useGSAP(
    () => {
      // HEADER
      const headerSection = document.querySelector("#header") as HTMLElement;
      const logoLink = headerSection.querySelector(
        ".header__logo-link"
      ) as HTMLElement;
      const contentTop = headerSection.querySelector(
        ".content-top"
      ) as HTMLElement;
      const contentTopFirstName = contentTop.querySelector(
        ".header__logo-name"
      ) as HTMLElement;
      const contentTopLastName = contentTop.querySelector(
        ".header__logo-middle"
      ) as HTMLElement;
      const contentBottom = headerSection.querySelector(
        ".content-bottom"
      ) as HTMLElement;
      const contentBottomFirstName = contentBottom.querySelector(
        ".header__logo-name"
      ) as HTMLElement;
      const contentBottomLastName = contentBottom.querySelector(
        ".header__logo-middle"
      ) as HTMLElement;
      const tl = gsap.timeline({});
      logoLink.addEventListener("mouseenter", () => {
        tl.to([contentTopFirstName, contentBottomFirstName], {
          y: "-100%",
          duration: 0.3,
        }).to(
          [contentTopLastName, contentBottomLastName],
          {
            y: "-100%",
            duration: 0.3,
            onComplete: () => {
              gsap.set(
                [
                  contentTopFirstName,
                  contentBottomFirstName,
                  contentTopLastName,
                  contentBottomLastName,
                ],
                {
                  clearProps: "all",
                }
              );
            },
          },
          "<+0.1"
        );
      });
      const observer = Observer.create({
        target: window,
        onUp: (self) => {
          if (document.body.classList.contains("--disable-scroll")) return;
          headerSection.classList.add("--scroll-up");
          headerSection.classList.remove("--scroll-down");
        },
        onDown: (self) => {
          if (document.body.classList.contains("--disable-scroll")) return;
          headerSection.classList.add("--scroll-down");
          headerSection.classList.add("--scroll-up");
        },
      });
    },
    {
      scope: headerRef,
    }
  );
  useEffect(() => {
    headerRef.current?.classList.remove("--scroll-up", "--scroll-down");
  }, [pathname]);
  return (
    <header
      className={clsx("header", isHamburgerActive ? "--active" : "--scroll-up")}
      id="header"
      ref={headerRef}
    >
      <div className="container">
        <div className="header-wrapper">
          {/* Left logo */}
          <div className="header__logo">
            <Link className="header__logo-link" href={ROUTES.HOME}>
              <div className="content-top">
                <span className="header__logo-name --text">Tommy</span>
                <span className="header__logo-middle --text">Nguyen</span>
              </div>
              <div className="content-bottom">
                <span className="header__logo-name --text">Tommy</span>
                <span className="header__logo-middle --text">Nguyen</span>
              </div>
            </Link>
          </div>
          {/* Right cta */}
          <div className="header__cta">
            {/* Hamburger */}
            <button
              className={clsx(
                "btn-hamburger btn --rounded",
                isHamburgerActive && "--active"
              )}
              onClick={handleToggleHamburger}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
