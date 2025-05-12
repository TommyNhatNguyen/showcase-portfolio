import Image from "next/image";
import Link from "next/link";
import { ROUTES, SOCIAL_LINKS } from "../../constants/links";
import { FiArrowUpRight } from "react-icons/fi";
import AnimatedTextHover from "../AnimatedTextHover";
import SectionSocial from "./SectionSocial";
import Button from "../Button/Button";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      {/* CTA */}
      <section className="footer__cta" id="footer__cta">
        <div className="container">
          <div className="footer__cta-wrapper">
            <div className="footer__cta-title">
              <p className="para">HAVE A NICE WORKS? LET'S TALK WITH ME</p>
              <AnimatedTextHover>
                <div className="email-wrapper">
                  <Link
                    href="mailto:nguyenanhnhat123456@gmail.com"
                    className="email"
                  >
                    <p className="email__text">
                      <span className="--gray">nguyenanhnhat123456</span>
                      @gmail.com
                    </p>
                  </Link>

                  <Button
                    variant="link"
                    className="btn-email"
                    icon={FiArrowUpRight}
                    isRounded={false}
                  />
                </div>
              </AnimatedTextHover>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <SectionSocial />
    </footer>
  );
};

export default Footer;
