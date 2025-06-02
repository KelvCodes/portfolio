export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 0,
    name: "ResumeCoverAI",
    description:
      "ResumeCoverAI is an intelligent tool that helps you create polished resumes and cover letters in seconds. Enter your details, get smart AI suggestions, and instantly download a professionally designed PDF—effortless, fast, and stress-free!",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/KelvCodes/ResumeCoverAI",
    demo: "https://resumecoverai.netlify.app/",
    image: require(".//../../public/projects/resume.png"),
    available: true,
  },
  {
    id: 1,
    name: "SyncCodes",
    description:
      "SyncCodes is a high-performance collaborative coding platform enabling real-time code editing and synchronization between multiple users. Built using WebRTC and WebSockets, it offers seamless and interactive team programming like never before.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/gourab9817/SyncCodes",
    demo: "https://www.synccode.live/",
    image: require(".//../../public/projects/real.png"),
    available: true,
  },
  {
    id: 2,
    name: "AcademyX",
    description:
      "AcademyX is an AI-powered learning platform designed for accessibility and intelligent education—optimized to work on even the lowest-end devices, online or offline. Built with modern web tech and TensorFlow.js for smart features.",
    technologies: ["React", "Next.js", "Prismic CMS"],
    github: "https://github.com/KelvCodes/AcademyX",
    demo: "https://myacademyx.netlify.app/",
    image: require(".//../../public/projects/academy.png"),
    available: true,
  },
  {
    id: 3,
    name: "CryptoBeast",
    description:
      "CryptoBeast is a sleek and engaging web app that delivers real-time cryptocurrency prices, market insights, and trend charts. Stay ahead in the world of crypto with interactive visuals and up-to-date market data. 📉📈",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/KelvCodes/CryptoBeast",
    demo: "https://cryptobeast.netlify.app/",
    image: require(".//../../public/projects/crypto.png"),
    available: true,
  },
  {
    id: 4,
    name: "BiasScope",
    description:
      "BiasScope is a smart web app that helps detect and reduce biased or toxic language in any text. Using rule-based logic and AI-powered sentiment analysis via TensorFlow.js, it promotes fairness and inclusivity in communication.",
    technologies: ["Next.js", "Typescript", "Prisma"],
    github: "https://github.com/KelvCodes/BiasScope",
    demo: "https://mybiasdetector.netlify.app/",
    image: require(".//../../public/projects/bias.png"),
    available: true,
  },
  {
    id: 5,
    name: "FoodConnect",
    description:
      "FoodConnect is a social impact platform connecting surplus food to communities in need. Designed to address UN SDG 2 (Zero Hunger), it bridges the gap between excess and scarcity through meaningful tech-driven solutions.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/KelvCodes/FoodConnect",
    demo: "https://myfoodconnect.netlify.app/",
    image: require(".//../../public/projects/food.png"),
    available: true,
  },
];

