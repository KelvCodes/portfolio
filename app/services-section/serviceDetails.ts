ption: string;
  icon: string; // Icon component name from react-icons (e.g., 'FaCode')
  index: number;
};

export const serviceDetails: serviceProps[] = [
  {
    name: "Frontend Development",
    description:
      "Building high-performance, responsive web applications using React, Next.js, and TypeScript for seamless user experiences.",
    icon: "FaCode",
    index: 0,
  },
  {
    name: "Blockchain Development",
    description:
      "Creating decentralized applications and smart contracts with Web3.js, ethers.js, and Solidity for secure, transparent solutions.",
    icon: "FaEthereum",
    index: 1,
  },
  {
    name: "Machine Learning Integration",
    description:
      "Integrating AI-powered features into web apps using TensorFlow.js and other ML frameworks for intelligent, dynamic functionality.",
    icon: "FaBrain",
    index: 2,
  },
  {
    name: "UI/UX Design",
    description:
      "Designing intuitive, visually stunning interfaces with Figma and Framer, ensuring user-friendly and engaging experiences.",
    icon: "FaPaintBrush",
    index: 3,
  },
  {
    name: "Digital Content Creation",
    description:
      "Producing engaging videos, graphics, and social media content using Adobe Premiere Pro, Canva, and Photoshop.",
    icon: "FaVideo",
    index: 4,
  },
  {
    name: "Technical Consulting",
    description:
      "Providing expert guidance on web development, Blockchain, and AI strategies to drive innovation and growth.",
    icon: "FaComments",
    index: 5,
  },
];
