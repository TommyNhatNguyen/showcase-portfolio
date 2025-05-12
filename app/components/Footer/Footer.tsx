import Image from "next/image";
import Link from "next/link";
import { ROUTES, SOCIAL_LINKS } from "../../constants/links";
import Button from "../Button/Button";
import { FiArrowUpRight } from "react-icons/fi";
import AnimatedTextHover from "../AnimatedTextHover";
import SectionSocial from "./SectionSocial";

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
      <SectionSocial />
    </footer>
  );
};

export default Footer;
