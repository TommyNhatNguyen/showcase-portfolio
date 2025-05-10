import { ROUTES } from "@/app/constants/links";
import Link from "next/link";
import React from "react";
import Button from "../Button/Button";
import { FiArrowRight } from "react-icons/fi";
import clsx from "clsx";
import AnimatedTextHover from "../AnimatedTextHover";

type Props = {
  isHamburgerActive: boolean;
  handleHideHamburger: () => void;
};

const Navigation = ({ isHamburgerActive, handleHideHamburger }: Props) => {
  const _onHideNav = () => {
    handleHideHamburger();
  };
  return (
    <nav className={clsx("nav", isHamburgerActive && "--active")}>
      <div className="container">
        <ul className="nav__list">
          <li className="nav__list-item">
            <Link href={ROUTES.HOME} className="link">
              <AnimatedTextHover>
                <div className="link__text">
                  Home <span className="link__text-position">(01)</span>
                </div>
              </AnimatedTextHover>
              <Button
                variant="icon"
                size="md"
                className="link__btn"
                icon={FiArrowRight}
                type="button"
              />
            </Link>
          </li>
          <li className="nav__list-item">
            <Link href={ROUTES.ABOUT} className="link">
              <AnimatedTextHover>
                <div className="link__text">
                  About Me <span className="link__text-position">(02)</span>
                </div>
              </AnimatedTextHover>
              <Button
                variant="icon"
                size="md"
                className="link__btn"
                icon={FiArrowRight}
                type="button"
              />
            </Link>
          </li>
          <li className="nav__list-item">
            <Link href={ROUTES.WORK} className="link">
              <AnimatedTextHover>
                <div className="link__text">
                  Works <span className="link__text-position">(03)</span>
                </div>
              </AnimatedTextHover>
              <Button
                variant="icon"
                size="md"
                className="link__btn"
                icon={FiArrowRight}
                type="button"
              />
            </Link>
          </li>
          <li className="nav__list-item">
            <Link href={ROUTES.BLOG} className="link">
              <AnimatedTextHover>
                <div className="link__text">
                  Blog <span className="link__text-position">(04)</span>
                </div>
              </AnimatedTextHover>
              <Button
                variant="icon"
                size="md"
                className="link__btn"
                icon={FiArrowRight}
                type="button"
              />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
