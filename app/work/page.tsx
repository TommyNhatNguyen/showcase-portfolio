import Image from "next/image";
import Link from "next/link";

export default function Work() {
  return (
    <main className="work" id="work">
      {/* Hero */}
      <section className="schero" id="schero">
        <div className="container">
          <div className="schero-wrapper">
            <div className="schero__title">
              <h1 className="schero__title-text">
                Bringing your brand to life in the
                <span className="--gray">digital world</span>
              </h1>
            </div>
            <ul className="schero__skills">
              <li className="schero__skills-item">
                <span>Web Design</span>
              </li>
              <li className="schero__skills-item">
                <span>UI/UX Design</span>
              </li>
              <li className="schero__skills-item">
                <span>Branding</span>
              </li>
              <li className="schero__skills-item">
                <span>Mobile App</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Work */}
      <section className="scwork --ptb" id="scwork">
        <div className="container">
          <div className="scwork-wrapper">
            <ul className="scwork__list">
              <li className="scwork__list-item --active">
                {/* Content */}
                <div className="content">
                  <div className="content__info">
                    <span className="content__info-title --block">Sportly</span>
                    <span className="content__info-time --block">
                      May 5, 2023
                    </span>
                  </div>
                  <div className="content__desc">
                    <p className="content__desc-text">
                      Website Redesign: Improving user experience and
                      modernizing design.
                    </p>
                    <ul className="content__desc-tags">
                      <li>UIUX</li>
                      <li>Branding</li>
                    </ul>
                  </div>
                </div>
                {/* Thumbnail */}
                <Link href="#" className="thumbnail">
                  <Image
                    src="/images/project-1.jpg"
                    alt="Sportly"
                    width={400}
                    height={300}
                  />
                  <div className="thumbnail__btn btn --md --btn-icon">
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
                  </div>
                </Link>
              </li>
              <li className="scwork__list-item">
                {/* Content */}
                <div className="content">
                  <div className="content__info">
                    <span className="content__info-title --block">Sportly</span>
                    <span className="content__info-time --block">
                      May 5, 2023
                    </span>
                  </div>
                  <div className="content__desc">
                    <p className="content__desc-text">
                      Website Redesign: Improving user experience and
                      modernizing design.
                    </p>
                    <ul className="content__desc-tags">
                      <li>UIUX</li>
                      <li>Branding</li>
                    </ul>
                  </div>
                </div>
                {/* Thumbnail */}
                <Link href="#" className="thumbnail">
                  <Image
                    src="/images/project-1.jpg"
                    alt="Sportly"
                    width={400}
                    height={300}
                  />
                  <div className="thumbnail__btn btn --md --btn-icon">
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
                  </div>
                </Link>
              </li>
              <li className="scwork__list-item">
                {/* Content */}
                <div className="content">
                  <div className="content__info">
                    <span className="content__info-title --block">Sportly</span>
                    <span className="content__info-time --block">
                      May 5, 2023
                    </span>
                  </div>
                  <div className="content__desc">
                    <p className="content__desc-text">
                      Website Redesign: Improving user experience and
                      modernizing design.
                    </p>
                    <ul className="content__desc-tags">
                      <li>UIUX</li>
                      <li>Branding</li>
                    </ul>
                  </div>
                </div>
                {/* Thumbnail */}
                <Link href="#" className="thumbnail">
                  <Image
                    src="/images/project-1.jpg"
                    alt="Sportly"
                    width={400}
                    height={300}
                  />
                  <div className="thumbnail__btn btn --md --btn-icon">
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
                  </div>
                </Link>
              </li>
              <li className="scwork__list-item">
                {/* Content */}
                <div className="content">
                  <div className="content__info">
                    <span className="content__info-title --block">Sportly</span>
                    <span className="content__info-time --block">
                      May 5, 2023
                    </span>
                  </div>
                  <div className="content__desc">
                    <p className="content__desc-text">
                      Website Redesign: Improving user experience and
                      modernizing design.
                    </p>
                    <ul className="content__desc-tags">
                      <li>UIUX</li>
                      <li>Branding</li>
                    </ul>
                  </div>
                </div>
                {/* Thumbnail */}
                <Link href="#" className="thumbnail">
                  <Image
                    src="/images/project-1.jpg"
                    alt="Sportly"
                    width={400}
                    height={300}
                  />
                  <div className="thumbnail__btn btn --md --btn-icon">
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
                  </div>
                </Link>
              </li>
              <li className="scwork__list-item">
                {/* Content */}
                <div className="content">
                  <div className="content__info">
                    <span className="content__info-title --block">Sportly</span>
                    <span className="content__info-time --block">
                      May 5, 2023
                    </span>
                  </div>
                  <div className="content__desc">
                    <p className="content__desc-text">
                      Website Redesign: Improving user experience and
                      modernizing design.
                    </p>
                    <ul className="content__desc-tags">
                      <li>UIUX</li>
                      <li>Branding</li>
                    </ul>
                  </div>
                </div>
                {/* Thumbnail */}
                <Link href="#" className="thumbnail">
                  <Image
                    src="/images/project-1.jpg"
                    alt="Sportly"
                    width={400}
                    height={300}
                  />
                  <div className="thumbnail__btn btn --md --btn-icon">
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
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
