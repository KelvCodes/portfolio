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
      
