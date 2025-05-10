import ServiceCard from "./ServiceCard";
import { serviceDetails } from "./serviceDetails";
import AnimatedWords2 from "../animations/AnimatedWords2";
import { monaSans } from "../fonts/monaSans";
import AnimatedBody from "../animations/AnimatedBody";
import { motion } from "framer-motion";
import Link from "next/link";

const Services = () => {
  return (
    <section className="z-10 flex w-full flex-col items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-20 md:pb-16 lg:pb-24">
      <div
        className={`relative mb-16 flex w-full flex-col items-center justify-center gap-10 text-[#e4ded7] sm:items-center lg:max-w-[1440px]`}
      >
        <AnimatedWords2
          title={"Services"}
          style={`flex max-w-[500px] flex-col items-start text-left pr-5 ${monaSans.className} font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center lg:text-center text-[clamp(70px,14vw,155.04px)]`}
        />
        <AnimatedBody
          text="Explore My Expertise in Frontend, Blockchain, AI, and Digital Creation"
          className="w-[90%] text-center text-[14px] font-semibold uppercase sm:w-[500px] md:w-[550px] md:text-[16px]"
        />
      </div>
      <motion.div className="grid w-[90%] max-w-[1345px] grid-cols-1 grid-rows-6 place-content-center place-items-center gap-x-6 gap-y-6 sm:grid-cols-2 sm:grid-rows-3 lg:grid-cols-3 lg:grid-rows-1">
        {serviceDetails.map((service, index) => {
          return (
            <ServiceCard
              key={index}
              name={service.name}
              description={service.description}
              icon={service.icon}
              index={index}
            />
          );
        })}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.7,
            delay: 0.1,
            ease: [0.44, 0, 0.22, 0.99],
          },
        }}
        viewport={{
          amount: "some",
          once: true,
        }}
        className="mt-10 mb-5 sm:mb-0 sm:mt-20"
      >
        <Link
          href="#contact"
          className="rounded-md border-2 border-[#e4ded7] py-3 px-6 text-[16px] font-semibold text-[#e4ded7] hover:bg-[#e4ded7] hover:text-[#0E1016] transition-colors"
        >
          Get in Touch
        </Link>
      </motion.div>
    </section>
  );
};

export default Services;