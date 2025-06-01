import { StaticImageData } from "next/image";
import emma from "../../public/emma.jpg";
import jamilia from "../../public/jamilia.jpg";
import bashiri from "../../public/bashiri.jpg";

export type reviewProps = {
  name: string;
  role: string;
  company: string;
  profileImg: StaticImageData;
  testimonial: string;
  index: number;
};

export const reviewDetails: reviewProps[] = [
  {
    name: "Jamilia Grier",
    role: "CEO & Founder",
    company: "ByteBao",
    profileImg: jamilia,
    testimonial:
      "As my lead frontend developer, Kelvin delivered a stunning React-based platform for ByteBao. His TypeScript expertise and UI/UX finesse boosted user engagement by 35%.",
    index: 0,
  },
  {
    name: "Emanuel Ayanful",
    role: "Google DeepMind Scholar",
    company: "Google",
    profileImg: emma,
    testimonial:
      "Kelvin was an exceptional student in my Mathematics course and so. His smart contract project using Solidity showcased deep understanding and creativity, earning top marks.",
    index: 1,
  },
  {
    name: "Bashiri Fuirkashi",
    role: "CEO & SWE",
    company: "Skool Academy",
    profileImg: bashiri,
    testimonial:
      "Mentoring Kelvin was a privilege. His rapid growth in Blockchain development and digital content creation, especially with Web3.js and Adobe tools, is truly inspiring.",
    index: 2,
  },
];
