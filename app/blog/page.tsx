import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "../constants/links";

export default function Blog() {
  return (
    <main className="blog" id="blog">
      {/* Hero */}
      <section className="schero --ptb" id="schero">
        <div className="container">
          <div className="schero-wrapper">
            <p className="schero__caption">Insights</p>
            <h1 className="schero__title">
              A collection of my
              <span className="--gray">insights</span>
            </h1>
            <p className="schero__desc">
              Subscribe to my newsletter to learn more about design, our blog
              and other things we like to share.
            </p>
          </div>
        </div>
      </section>

      {/* Latest Insights */}
      <section className="sclatestinsights --ptb" id="sclatestinsights">
        <div className="container">
          <div className="sclatestinsights-wrapper">
            <div className="sclatestinsights__title">
              <h2 className="sclatestinsights__title-text">
                My latest insights
              </h2>
            </div>
            <ul className="sclatestinsights__list">
              <li className="sclatestinsights__list-item">
                <div className="thumbnail">
                  <Image
                    className="thumbnail__img"
                    src="/images/blog.jpg"
                    alt="Blog 1"
                    width={400}
                    height={300}
                  />
                </div>
                <div className="content">
                  <h3 className="content__title">
                    Exploring the Power of Minimalism in Visual Design
                  </h3>
                  <p className="content__desc">
                    Dive into the world of minimalistic design and discover how
                    simplicity, clean lines, and negative space can enhance user
                    experiences and create visually stunning designs.
                  </p>
                  <Link href="#" className="content__btn btn --md --btn-icon">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.125 10H16.875"
                        stroke="#030712"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.25 4.375L16.875 10L11.25 15.625"
                        stroke="#030712"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </li>
              <li className="sclatestinsights__list-item">
                <div className="thumbnail">
                  <Image
                    className="thumbnail__img"
                    src="/images/blog.jpg"
                    alt="Blog 1"
                    width={400}
                    height={300}
                  />
                </div>
                <div className="content">
                  <h3 className="content__title">
                    Exploring the Power of Minimalism in Visual Design
                  </h3>
                  <p className="content__desc">
                    Dive into the world of minimalistic design and discover how
                    simplicity, clean lines, and negative space can enhance user
                    experiences and create visually stunning designs.
                  </p>
                </div>
              </li>
              <li className="sclatestinsights__list-item">
                <div className="thumbnail">
                  <Image
                    className="thumbnail__img"
                    src="/images/blog.jpg"
                    alt="Blog 1"
                    width={400}
                    height={300}
                  />
                </div>
                <div className="content">
                  <h3 className="content__title">
                    Exploring the Power of Minimalism in Visual Design
                  </h3>
                  <p className="content__desc">
                    Dive into the world of minimalistic design and discover how
                    simplicity, clean lines, and negative space can enhance user
                    experiences and create visually stunning designs.
                  </p>
                </div>
              </li>
              <li className="sclatestinsights__list-item">
                <div className="thumbnail">
                  <Image
                    className="thumbnail__img"
                    src="/images/blog.jpg"
                    alt="Blog 1"
                    width={400}
                    height={300}
                  />
                </div>
                <div className="content">
                  <h3 className="content__title">
                    Exploring the Power of Minimalism in Visual Design
                  </h3>
                  <p className="content__desc">
                    Dive into the world of minimalistic design and discover how
                    simplicity, clean lines, and negative space can enhance user
                    experiences and create visually stunning designs.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* All Insights */}
      <section className="scallinsights --ptb" id="scallinsights">
        <div className="container">
          <div className="scallinsights-wrapper">
            <div className="scallinsights__title">
              <h2 className="scallinsights__title-text">All Insights</h2>
            </div>
            <ul className="scallinsights__list">
              <li className="scallinsights__list-item">
                <div className="content">
                  <p className="content__title">
                    Designing for Accessibility: Bridging the Gap to Inclusive
                    Experiences
                  </p>
                  <p className="content__time">May 5, 2023</p>
                </div>
                <div className="desc">
                  <p className="desc__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                    nulla accusantium ratione in ducimus asperiores expedita
                    dolorem perferendis ipsa nobis tempora reprehenderit quia
                    repudiandae voluptates rerum adipisci, officia cum corrupti?
                  </p>
                </div>
              </li>
              <li className="scallinsights__list-item">
                <div className="content">
                  <p className="content__title">
                    Designing for Accessibility: Bridging the Gap to Inclusive
                    Experiences
                  </p>
                  <p className="content__time">May 5, 2023</p>
                </div>
                <div className="desc">
                  <p className="desc__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                    nulla accusantium ratione in ducimus asperiores expedita
                    dolorem perferendis ipsa nobis tempora reprehenderit quia
                    repudiandae voluptates rerum adipisci, officia cum corrupti?
                  </p>
                </div>
              </li>
              <li className="scallinsights__list-item">
                <div className="content">
                  <p className="content__title">
                    Designing for Accessibility: Bridging the Gap to Inclusive
                    Experiences
                  </p>
                  <p className="content__time">May 5, 2023</p>
                </div>
                <div className="desc">
                  <p className="desc__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                    nulla accusantium ratione in ducimus asperiores expedita
                    dolorem perferendis ipsa nobis tempora reprehenderit quia
                    repudiandae voluptates rerum adipisci, officia cum corrupti?
                  </p>
                </div>
              </li>
            </ul>
            <Link href="#" className="scallinsights__btn btn --md">
              Show more
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
