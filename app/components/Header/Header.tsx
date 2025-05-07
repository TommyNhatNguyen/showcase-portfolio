import React from "react";
import Link from "next/link";
import { ROUTES } from "../../constants/links";
import Button from "../Button/Button";
import { FiArrowRight } from "react-icons/fi";
import clsx from "clsx";

type HeaderProps = {
  handleToggleHamburger: () => void;
  isHamburgerActive: boolean;
};

const Header = ({ handleToggleHamburger, isHamburgerActive }: HeaderProps) => {
  return (
    <header className="header" id="header">
      <div className="container">
        <div className="header-wrapper">
          {/* Left logo */}
          <div className="header__logo">
            <Link href={ROUTES.HOME} className="header__logo-name">
              Tommy Nguyen
            </Link>
          </div>
          {/* Right cta */}
          <div className="header__cta">
            {/* Lets talk button */}
            <Button
              href="#"
              variant="talk"
              icon={FiArrowRight}
              iconPosition="right"
            >
              Let's Talk
            </Button>
            {/* Hamburger */}
            <button
              className={clsx(
                "btn-hamburger btn",
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
