export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  WORK: "/work",
  BLOG: "/blog",
} as const;

export const SOCIAL_LINKS = {
  GITHUB: "https://github.com/TommyNhatNguyen",
  INSTAGRAM: "#",
  BEHANCE: "#",
  DRIBBLE: "#",
  TWITTER: "#",
  YOUTUBE: "#",
  TIKTOK: "#",
} as const;

export const CONTACT_LINKS = {
  EMAIL: "mailto:nguyenanhnhat123456@gmail.com",
} as const;

export const WORK_ITEMS = [
  {
    href: null,
    image: "/images/picare-project.gif",
    title: "Picare CMS",
    desc: (
      <p>
        A comprehensive web admin panel for managing apartment and building
        services, including resident management, project oversight, and service
        coordination. Built with <span className="font-bold">NextJs</span> and{" "}
        <span className="font-bold">TypeScript</span>.
      </p>
    ),
  },
  {
    href: "https://dqharchitects.vn/vi/home",
    image: "/images/project-3.jpg",
    title: "DQH Architecture",
    desc: (
      <p>
        Architecture Website using <span className="font-bold">NextJs</span>{" "}
        intergrated with <span className="font-bold">Strapi CMS</span> to manage
        content. Designed in Swiss-inspired style with a focus on simplicity and
        functionality
      </p>
    ),
  },
  {
    href: "https://quang-portfolio-two.vercel.app/work",
    image: "/images/project-7.png",
    title: "Quang's Portfolio",
    desc: (
      <p>
        A portfolio website for Quang Nguyen, a software engineer. Built with{" "}
        <span className="font-bold">NextJs</span>,{" "}
        <span className="font-bold">TypeScript</span>, and{" "}
        <span className="font-bold">Tailwind CSS</span>.
      </p>
    ),
  },
  {
    href: "https://architecture-ver1.vercel.app/",
    image: "/images/project-2.jpg",
    title: "RUMAÉ (Concept)",
    desc: (
      <p>
        Architecture Concept Website using{" "}
        <span className="font-bold">NextJS & GSAP</span> for smooth animation
        and modern design
      </p>
    ),
  },
  {
    href: "https://architecture-ver2.vercel.app/",
    image: "/images/project-5.jpg",
    title: "AGRESSOV (Concept)",
    desc: (
      <p>
        Architecture Concept Website using{" "}
        <span className="font-bold">NextJS & GSAP</span> for smooth animation
        and grid design with dark theme
      </p>
    ),
  },
  {
    href: "https://vintage-car-gules.vercel.app/",
    image: "/images/project-6.jpg",
    title: "Vintage Car (Concept)",
    desc: (
      <p>
        Vintage Car Landing Page Concept using{" "}
        <span className="font-bold">NextJS & GSAP</span> for smooth horizontal
        scroll
      </p>
    ),
  },
  {
    href: "https://finance-flow-rho.vercel.app/",
    image: "/images/project-4.jpg",
    title: "Finance Flow (Concept)",
    desc: (
      <p>
        Digital Asset Landing Page Concept with minimal animation and layout
      </p>
    ),
  },
  {
    href: "https://github.com/TommyNhatNguyen/Advertisement-Conversion-Rate-Analysis",
    image: "/images/analysis-project.gif",
    title: "Advertisement Conversion Rate Analysis (Project)",
    desc: (
      <p>
        Analyze the best way to put advertising banners online to increase
        conversion rate.
      </p>
    ),
  },
] as const;
