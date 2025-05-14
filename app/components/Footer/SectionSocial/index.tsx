import { SOCIAL_LINKS } from "@/app/constants/links";
import React from "react";
import AnimatedTextHover from "../../AnimatedTextHover";
import { ROUTES } from "@/app/constants/links";
import Link from "next/link";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import Button from "../../Button/Button";

type Props = {};

const SectionSocial = (props: Props) => {
  return (
    <section className="footer__socials --ptb">
      <div className="container">
        {/* Top */}
        <div className="footer__socials-top">
          {/* Sitemap */}
          <ul className="sitemap">
            <li className="sitemap__item">
              <Link href={ROUTES.HOME} className="sitemap__item-link">
                Home
              </Link>
            </li>
            <li className="sitemap__item">
              <Link href={ROUTES.ABOUT} className="sitemap__item-link">
                About
              </Link>
            </li>
            <li className="sitemap__item">
              <Link href={ROUTES.WORK} className="sitemap__item-link">
                Works
              </Link>
            </li>
            <li className="sitemap__item">
              <Link href={ROUTES.BLOG} className="sitemap__item-link">
                Insights
              </Link>
            </li>
          </ul>
          {/* Socials */}
          <ul className="socials">
            <li className="socials__item">
              <Link href={SOCIAL_LINKS.TWITTER} className="socials__item-link">
                <AnimatedTextHover>
                  <Image
                    src="/images/twitter-icon.png"
                    alt="twitter icon"
                    width={24}
                    height={24}
                  />
                </AnimatedTextHover>
              </Link>
            </li>
            <li className="socials__item">
              <Link href={SOCIAL_LINKS.YOUTUBE} className="socials__item-link">
                <AnimatedTextHover>
                  <Image
                    src="/images/youtube-icon.png"
                    alt="youtube icon"
                    width={24}
                    height={24}
                  />
                </AnimatedTextHover>
              </Link>
            </li>
            <li className="socials__item">
              <Link href={SOCIAL_LINKS.TIKTOK} className="socials__item-link">
                <AnimatedTextHover>
                  <Image
                    src="/images/tiktok-icon.png"
                    alt="tiktok icon"
                    width={24}
                    height={24}
                  />
                </AnimatedTextHover>
              </Link>
            </li>
            <li className="socials__item">
              <Link
                href={SOCIAL_LINKS.INSTAGRAM}
                className="socials__item-link"
              >
                <AnimatedTextHover>
                  <Image
                    src="/images/instagram-icon.png"
                    alt="instagram icon"
                    width={24}
                    height={24}
                  />
                </AnimatedTextHover>
              </Link>
            </li>
          </ul>
        </div>
        {/* Bottom */}
        <div className="footer__socials-bottom">
          {/* Form */}
          <form action="/" className="form form-email">
            <div className="formgroup">
              <label className="formgroup__label" htmlFor="email">
                Keep up with me if you can.
              </label>
              <div className="formgroup__inputgroup">
                <input
                  className="formgroup__inputgroup-input --text"
                  type="text"
                  placeholder="Enter your email"
                />
                <Button
                  type="submit"
                  variant="icon"
                  size="md"
                  className="formgroup__inputgroup-icon"
                  icon={FiArrowUpRight}
                  isRounded={false}
                  isAnimated={false}
                />
              </div>
              <p className="formgroup__error error">Please enter your email</p>
            </div>
          </form>
          {/* Copyright */}
          <p className="copyright">
            &#169;2025 All Rights Reserved. Designed with 🤍 and Coded with ❤️‍🔥
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionSocial;
