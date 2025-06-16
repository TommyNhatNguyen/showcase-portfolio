export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  WORK: "/work",
  BLOG: "/blog",
} as const;

export const SOCIAL_LINKS = {
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
    href: "https://etsolution.vn/home",
    image: "/images/project-1.jpg",
    title: "ETSolution",
    desc: "Website Development: Design and Development to fit our client's needs in Technology and Engineering Industry",
  },
  {
    href: "https://architecture-ver1.vercel.app/",
    image: "/images/project-2.jpg",
    title: "RUMAÉ (Concept)",
    desc: "Architecture Concept Website with modern design and smooth animation",
  },
  {
    href: "https://architecture-ver2.vercel.app/",
    image: "/images/project-5.jpg",
    title: "AGRESSOV (Concept)",
    desc: "Architecture Concept Website with grid design and dark theme",
  },
  {
    href: "https://finance-flow-rho.vercel.app/",
    image: "/images/project-4.jpg",
    title: "Finance Flow (Concept)",
    desc: "Digital Asset Landing Page Concept with minimal animation and layout",
  },
  {
    href: "https://dqh-architecture.vercel.app/",
    image: "/images/project-3.jpg",
    title: "DQH Architecture (Concept)",
    desc: "Architecture Concept Website with Swiss-inspired design and simple navigation",
  },
  {
    href: "https://vintage-car-gules.vercel.app/",
    image: "/images/project-6.jpg",
    title: "Vintage Car (Concept)",
    desc: "Vintage Car Landing Page Concept with smooth horizontal scroll",
  },
] as const;
