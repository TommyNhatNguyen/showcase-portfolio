import { ROUTES } from "@/app/constants/links";
import Link from "next/link";
import React from "react";
import Button from "../Button/Button";
import { FiArrowRight } from "react-icons/fi";
import clsx from "clsx";

type Props = {
  isHamburgerActive: boolean;
};

const Navigation = ({ isHamburgerActive }: Props) => {
  return (
    <nav className={clsx("nav", isHamburgerActive && "--active")}>
      <div className="container">
        <ul className="nav__list">
          <li className="nav__list-item">
            <Link href={ROUTES.HOME} className="link">
              <div className="link__text">
                Home <span className="link__text-position">(01)</span>
              </div>
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
              <div className="link__text">
                About Me <span className="link__text-position">(02)</span>
              </div>
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
              <div className="link__text">
                Works <span className="link__text-position">(03)</span>
              </div>
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
              <div className="link__text">
                Blog <span className="link__text-position">(04)</span>
              </div>
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
