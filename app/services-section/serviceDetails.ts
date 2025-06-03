export type serviceProps = {
   name: string;
  description: string;
   icon: string; // Icon component name from react-icons (e.g., 'FaCode')
  index: number;
   
   export const serviceDetails: serviceProps[] = [
       {
    name: "Frontend Development",
    description:  "Developing lightning-fast, responsive, and scalable web applications with modern stacks like React, Next.js, and TypeScript—delivering smooth, intuitive digital experiences.",
    icon: "FaCode",
     index: 0,
  },
  {
    name: "Blockchain Development",
    description:"Engineering secure, decentralized applications and smart contracts with Web3.js, ethers.js, and Solidity—paving the way for the future of digital trust and transparency.",
    icon: "FaEthereum",
           index: 1,
  },
  {
    name: "Machine Learning Integration",
    description:   "Empowering applications with intelligent, AI-driven features using TensorFlow.js and cutting-edge ML frameworks to deliver personalized and predictive user experiences.",
    icon: "FaBrain",
   index: 2,
  },
  {
    name: "UI/UX Design",
    description:     "Designing visually compelling, user-first interfaces with tools like Figma and Framer—ensuring every interaction feels effortless, elegant, and impactful.",
    icon: "FaPaintBrush",
