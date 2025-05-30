export type serviceProps = {
  name: string;
  description: string;
  icon: string; // Icon component name from react-icons (e.g., 'FaCode')
  index: number;
};
export const serviceDetails: serviceProps[] = [
  {
     name: "Frontend Development",
        description:
      "Crafting fast, responsive, and scalable web applications using modern technologies like React, Next.js, and TypeScript to deliver seamless digital experiences.",
     icon: "FaCode",
      index: 0,
  },
  {
     name: "Blockchain Development",
    description: "Building secure and transparent decentralized applications and smart contracts using Web3.js, ethers.js, and Solidity for the future of the internet.",
     icon: "FaEthereum",
     index: 1,
  },
  {
     name: "Machine Learning Integration",
        description:
      "Embedding intelligent, AI-driven features into applications using TensorFlow.js and other ML frameworks to create adaptive and smart user experiences.",
     icon: "FaBrain",
    index: 2,
  },
   {
    name: "UI/UX Design",
    description:
      "Designing beautiful, intuitive, and user-centric interfaces with tools like Figma and Framer to ensure captivating and smooth user journeys.",
    icon: "FaPaintBrush",
    index: 3,
  },
  {
    name: "Digital Content Creation",
    description:
      "Producing impactful visual content—from videos to graphics—for social media and marketing using Adobe Premiere Pro, Canva, and Photoshop.",
    icon: "FaVideo",
    index: 4,
  },
  {
    name: "Technical Consulting",
    description:
      "Offering strategic guidance in web development, blockchain, and AI integration to help teams innovate, scale, and achieve their tech goals.",
    icon: "FaComments",
    index: 5,
  },
];
  
      
