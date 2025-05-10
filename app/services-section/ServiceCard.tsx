import { serviceProps } from "./serviceDetails";
import Image from "next/image";
import { motion } from "framer-motion";
import * as Icons from "react-icons/fa"; // Dynamically import all Fa icons
import slash from "../../public/review-slash.svg";

const ServiceCard = ({ name, description, icon, index }: serviceProps) => {
  // Dynamically select the icon component from react-icons
  const IconComponent = Icons[icon as keyof typeof Icons];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.7,
          delay: 0.1 * index,
          ease: [0.44, 0, 0.22, 0.99],
        },
      }}
      viewport={{
        amount: "some",
        once: true,
      }}
      className="relative flex h-[393px] w-[100%] flex-col items-start justify-between rounded-[23px] border-[3px] border-[#212531] bg-transparent p-[28px] sm:h-[450px] sm:items-start sm:justify-start lg:h-[393px] lg:max-w-[438px]"
    >
      <Image
        src={slash}
        alt="slash decoration"
        className="absolute top-[34px] left-[28px] w-[51px]"
      />

      <div className="mt-10 flex flex-col gap-4 flex-1">
        {IconComponent && (
          <IconComponent className="text-[40px] text-[#e4ded7]" />
        )}
        <h3 className="text-[23px] font-bold uppercase leading-[20.7px] tracking-[-0.46056px] text-[#e4ded7]">
          {name}
        </h3>
        <p className="text-[18px] font-[500] leading-relaxed tracking-wide text-[#e4ded7]">
          {description}
        </p>
        <a
          href="#contact"
          className="mt-auto flex items-center gap-2 text-[16px] font-semibold text-[#e4ded7] hover:text-[#ffffff] transition-colors"
        >
          Get This Service
          <Icons.FaArrowRight className="text-[14px]" />
        </a>
      </div>
    </motion.div>
  );
};

export default ServiceCard;