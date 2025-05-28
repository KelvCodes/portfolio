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
