sexport type ProjectProps = {
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
      "A smart, AI-powered tool that creates professional resumes & cover letters with zero stress! Simply input your details, get AI-generated suggestions, and download a polished PDF in seconds!",
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
      "SyncCodes is an advanced collaborative platform designed for real-time synchronization and editing of code across multiple users. Built with WebRTC and WebSockets, it combines the power of real-time communication. ",
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
      "Academy X is a web-based(for now) AI-driven educational platform designed for maximum accessibility and intelligent learning — even on low-end devices or offline. Built entirely with HTML, CSS, JavaScript, and TensorFlow.js.",
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
      "A stylish and interactive web app that provides real-time cryptocurrency prices, market trends, and insights!Stay ahead in the crypto world with live updates, price charts, and historical data. 📉📈",
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
      "The Bias Detection Tool is a web-based application designed to identify and mitigate biased language in text, promoting inclusive communication. It leverages rule-based detection and AI-powered toxicity analysis (using TensorFlow.js) to flag biased terms. ",
    technologies: ["Next.js", "Typescript", "Prisma"],
    github: "https://github.com/KelvCodes/BiasScope",
    demo: "https://mybiasdetector.netlify.app/",
    image: require(".//../../public/projects/bias.png"),
    available: true,
  },
  {
    id: 3,
    name: "FoodConnect",
    description:
      "Welcome to FoodConnect, a social platform that seeks to connect surplus food to those who need it. It seeks to address the UNSDG 2,which is zero hunger",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/KelvCodes/FoodConnect",
    demo: "https://myfoodconnect.netlify.app/",
    image: require(".//../../public/projects/food.png"),
    available: true,
  },


];

onst desi  {
    id: 1,
    name: "Hebron Statup Lab Website",
    description:
      "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fhsl.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 2,
    name: "RAGS Scrubs Website",
    description:
      "An image generator website that allows users to generate, combine, and download images.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Frags.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 3,
    name: "Crown Branding Agency Website",
    description:
      "A website that reduces the length of your URL using Bit.ly's API",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image:
      "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fcrown.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 4,
    name: "Titi Mobile App",
    description:
      "TMTM helps you find people who are headed to the same location as you, so you can share a ride and split the cost with them.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
   
