import React from "react";
import Link from "next/link";
import { ROUTES } from "../../constants/links";
import Button from "../Button/Button";
import { FiArrowRight } from "react-icons/fi";
import clsx from "clsx";
import AnimatedTextHover from "../AnimatedTextHover";

type HeaderProps = {
  handleToggleHamburger: () => void;
  isHamburgerActive: boolean;
};

const Header = ({ handleToggleHamburger, isHamburgerActive }: HeaderProps) => {
  return (
    <header
      className={clsx("header", isHamburgerActive && "--active")}
      id="header"
    >
      <div className="container">
        <div className="header-wrapper">
          {/* Left logo */}
          <div className="header__logo">
            <AnimatedTextHover>
              <Link href={ROUTES.HOME} className="header__logo-name">
                Tommy Nguyen
              </Link>
            </AnimatedTextHover>
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
