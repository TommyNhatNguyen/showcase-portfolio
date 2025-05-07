import Image from "next/image";
import Link from "next/link";
import { ROUTES, SOCIAL_LINKS } from "../../constants/links";
import Button from "../Button/Button";
import { FiArrowUpRight } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      {/* CTA */}
      <section className="footer__cta" id="footer__cta">
        <div className="container">
          <div className="footer__cta-wrapper">
            <div className="footer__cta-title">
              <p className="para">HAVE A NICE WORKS? LET'S TALK WITH ME</p>
              <Button
                href="mailto:nguyenanhnhat123456@gmail.com"
                variant="link"
                className="email"
                icon={FiArrowUpRight}
                iconPosition="right"
                isRounded={false}
              >
                <p className="email__text">
                  <span className="--gray">nguyenanhnhat123456</span>@gmail.com
                </p>
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
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
                  About me
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
                <Link
                  href={SOCIAL_LINKS.TWITTER}
                  className="socials__item-link"
                >
                  <Image
                    src="/images/twitter-icon.png"
                    alt="twitter icon"
                    width={24}
                    height={24}
                  />
                </Link>
              </li>
              <li className="socials__item">
                <Link
                  href={SOCIAL_LINKS.YOUTUBE}
                  className="socials__item-link"
                >
                  <Image
                    src="/images/youtube-icon.png"
                    alt="youtube icon"
                    width={24}
                    height={24}
                  />
                </Link>
              </li>
              <li className="socials__item">
                <Link href={SOCIAL_LINKS.TIKTOK} className="socials__item-link">
                  <Image
                    src="/images/tiktok-icon.png"
                    alt="tiktok icon"
                    width={24}
                    height={24}
                  />
                </Link>
              </li>
              <li className="socials__item">
                <Link
                  href={SOCIAL_LINKS.INSTAGRAM}
                  className="socials__item-link"
                >
                  <Image
                    src="/images/instagram-icon.png"
                    alt="instagram icon"
                    width={24}
                    height={24}
                  />
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
                    className="formgroup__inputgroup-icon"
                    icon={FiArrowUpRight}
                  />
                </div>
                <p className="formgroup__error error">
                  Please enter your email
                </p>
              </div>
            </form>
            {/* Copyright */}
            <p className="copyright">
              &#169;2025 All Rights Reserved. Designed with 🤍 and Coded with ❤️‍🔥
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
