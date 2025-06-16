import Image from "next/image";
import Link from "next/link";
import { ROUTES, SOCIAL_LINKS } from "../../constants/links";
import { FiArrowUpRight } from "react-icons/fi";
import AnimatedTextHover from "../AnimatedTextHover";
import SectionSocial from "./SectionSocial";
import Button from "../Button/Button";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { BREAKPOINTS, MEDIA_MAX_WIDTH } from "@/app/constants/media";

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const footer = document.querySelector(".footer");
      const footerEmailWrapper = footer?.querySelector(
        ".email-wrapper"
      ) as HTMLElement;
      const footerEmail = footer?.querySelector(".email") as HTMLElement;
      const footerEmailContentTop = footerEmail?.querySelector(
        ".content-top"
      ) as HTMLElement;
      const footerEmailContentTopText = footerEmailContentTop?.querySelector(
        ".email__content-text"
      ) as HTMLElement;
      const footerEmailContentTopExtension =
        footerEmailContentTop?.querySelector(
          ".email__content-extension"
        ) as HTMLElement;
      const footerEmailContentBottom = footer?.querySelector(
        ".content-bottom"
      ) as HTMLElement;
      const footerEmailContentBottomText =
        footerEmailContentBottom?.querySelector(
          ".email__content-text"
        ) as HTMLElement;
      const footerEmailContentBottomExtension =
        footerEmailContentBottom?.querySelector(
          ".email__content-extension"
        ) as HTMLElement;
      const tl = gsap.timeline({});
      const mm = gsap.matchMedia();
      mm.add(BREAKPOINTS.desktop, () => {
        footerEmailWrapper.addEventListener("mouseenter", () => {
          tl.to([footerEmailContentTopText, footerEmailContentBottomText], {
            y: "-100%",
            duration: 0.3,
          }).to(
            [footerEmailContentTopExtension, footerEmailContentBottomExtension],
            {
              y: "-100%",
              duration: 0.3,
              onComplete: () => {
                gsap.set(
                  [
                    footerEmailContentTopText,
                    footerEmailContentBottomText,
                    footerEmailContentTopExtension,
                    footerEmailContentBottomExtension,
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
      });
    },
    {
      scope: footerRef,
    }
  );
  return (
    <footer ref={footerRef} className="footer" id="footer">
      {/* CTA */}
      <section className="footer__cta" id="footer__cta">
        <div className="container">
          <div className="footer__cta-wrapper">
            <div className="footer__cta-title">
              <p className="para">
                FEELS LIKE WE'RE ON THE SAME PAGE? LET'S CONNECT
              </p>
              <div className="email-wrapper">
                {/* <div className="arrow">
                  <FiArrowUpRight />
                </div> */}
                <Link
                  href="mailto:nguyenanhnhat123456@gmail.com"
                  className="email"
                >
                  <div className="email__content content-top">
                    <span className="email__content-text --text ">
                      nguyenanhnhat123456
                    </span>
                    <span className="email__content-extension --text --gray">
                      @gmail.com
                    </span>
                  </div>
                  <div className="email__content content-bottom">
                    <span className="email__content-text --text ">
                      nguyenanhnhat123456
                    </span>
                    <span className="email__content-extension --text --gray">
                      @gmail.com
                    </span>
                  </div>
                </Link>
                <AnimatedTextHover>
                  <Link
                    href="mailto:nguyenanhnhat123456@gmail.com"
                    className="email --mobile"
                  >
                    <div className="email__content content-top">
                      <span className="email__content-text --text ">
                        <span className="--gray">nguyenanhnhat123456</span>{" "}
                        @gmail.com
                      </span>
                    </div>
                    <div className="email__content content-bottom">
                      <span className="email__content-text --text ">
                        <span className="--gray">nguyenanhnhat123456</span>{" "}
                        @gmail.com
                      </span>
                    </div>
                  </Link>
                </AnimatedTextHover>
              </div>
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
