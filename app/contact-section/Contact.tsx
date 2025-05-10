import Link from "next/link";
import Image from "next/image";
import { monaSans } from "../fonts/monaSans";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedWords2 from "../animations/AnimatedWords2";
import { motion } from "framer-motion";
import heartIcon from "../../public/heart icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faYoutube, faInstagram, faSnapchat } from "@fortawesome/free-brands-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const Contact = () => {
  return (
    <motion.section
      className="relative z-10 flex h-[95vh] w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center py-16 md:h-[80vh] md:py-20 lg:h-[90vh] lg:pt-0 lg:pb-28 3xl:h-[75vh]"
      id="contact"
      initial="initial"
      animate="animate"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center pt-10 md:pt-0">
        <div
          className={`flex flex-col items-start justify-center ${monaSans.className} relative w-full sm:items-center lg:max-w-[1440px] `}
        >
          <AnimatedWords2
            title={"Let's Talk"}
            style={
              "flex max-w-[500px] flex-col items-start text-left text-[150px] font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center sm:text-[170px] md:text-[200px] lg:text-center lg:text-[270px] xl:text-[390px]"
            }
          />
          <Image
            src={heartIcon}
            alt="Heart Icon"
            className="heartbeat md:-bottom-18 absolute -bottom-5 left-64 w-[120px] sm:-bottom-14 sm:left-[40%] md:left-[40%] md:w-[150px] lg:-bottom-16 lg:left-[42%] lg:w-[230px]"
          />
        </div>

        <div className="mt-20 flex w-full flex-col items-end justify-center gap-16 sm:mt-32 sm:gap-12 md:mt-40 md:flex-row md:items-start md:justify-between lg:mt-12 lg:max-w-[1440px]">
          <div className="flex w-[350px] max-w-[90%] flex-col items-end text-right text-[14px] font-semibold uppercase text-[#e4ded7] sm:w-[350px] sm:text-[14px] md:w-[310px] md:items-start md:text-left md:text-[16px] lg:w-[420px] lg:text-[16px]">
            <AnimatedBody
              text={
                "Got a question, proposal, project, or want to work together on something?"
              }
              className={
                "-mb-1 inline-block overflow-hidden pt-1 sm:-mb-2 md:-mb-3 lg:-mb-4"
              }
            />
            <div className="border mt-5 flex w-[298px] items-center gap-1 md:w-[335px] md:gap-2.5">
              <Link
                href="mailto:onlykelvin06k@gmail.com?subject=Lets%20work%20together!&body=Hello%2C%20I%20think%20we%20need%20you%20to%20work%20on%2Fcollaborate%20this%20particular%20product...%20Reach%20out%20as%20soon%20as%20you%20can."
                target="_blank"
                aria-label="Send me an email"
                className="border mt-1 w-[147px] flex-1 underline underline-offset-2 hover:no-underline sm:mt-2 sm:w-[170px] md:mt-3 lg:mt-4"
              >
                <AnimatedBody
                  text={"Send me an email"}
                  className={"border w-[190px] pr-[40px] md:w-[170px] md:pr-0"}
                />
              </Link>
              <AnimatedBody
                text={"or"}
                className={
                  "border -mb-1 ml-2 inline-block overflow-hidden sm:-mb-2 md:-ml-[8px] md:-mb-3 lg:-mb-4"
                }
              />
              <Link
                href="https://cal.com/kelvinaygare/30min"
                target="_blank"
                aria-label="Send me an email"
                className="border mt-1 w-[110px] flex-1 underline underline-offset-2 hover:no-underline sm:mt-2 sm:w-[147px] md:mt-3 md:-ml-[3px] md:w-[120px] lg:mt-4"
              >
                <AnimatedBody
                  text={"Book a call"}
                  className={"w-[110px] md:w-[120px]"}
                />
              </Link>
            </div>
          </div>

          <div className="flex gap-10 text-[16px] font-bold text-[#e4ded7] sm:gap-14 sm:text-[24px] md:gap-10 md:text-[16px] lg:gap-20 lg:text-[28px]">
            <Link
              href="https://github.com/KelvCodes"
              target="_blank"
              aria-label="View GitHub Profile"
            >
              <motion.div
                initial="initial"
                animate="animate"
                className="text-[16px] sm:text-[20px] md:text-[16px] lg:text-[28px] text-[#e4ded7] hover:text-[#ffffff] transition-colors"
              >
                <FontAwesomeIcon icon={faGithub as IconProp} />
              </motion.div>
            </Link>
            <Link
              href="https://www.linkedin.com/in/kelvin-agyare-yeboah-6728a7301/"
              target="_blank"
              aria-label="View LinkedIn Profile"
            >
              <motion.div
                initial="initial"
                animate="animate"
                className="text-[16px] sm:text-[20px] md:text-[16px] lg:text-[28px] text-[#e4ded7] hover:text-[#ffffff] transition-colors"
              >
                <FontAwesomeIcon icon={faLinkedin as IconProp} />
              </motion.div>
            </Link>
            <Link
              href="https://www.youtube.com/@TechTutor_Tv?sub_confirmation=1"
              target="_blank"
              aria-label="View YouTube Profile"
            >
              <motion.div
                initial="initial"
                animate="animate"
                className="text-[16px] sm:text-[20px] md:text-[16px] lg:text-[28px] text-[#e4ded7] hover:text-[#ffffff] transition-colors"
              >
                <FontAwesomeIcon icon={faYoutube as IconProp} />
              </motion.div>
            </Link>
            <Link
              href="https://www.instagram.com/_.yo.kelvin/"
              target="_blank"
              aria-label="View Instagram Profile"
            >
              <motion.div
                initial="initial"
                animate="animate"
                className="text-[16px] sm:text-[20px] md:text-[16px] lg:text-[28px] text-[#e4ded7] hover:text-[#ffffff] transition-colors"
              >
                <FontAwesomeIcon icon={faInstagram as IconProp} />
              </motion.div>
            </Link>
            <Link
              href="https://www.snapchat.com/add/saint_kelvinn"
              target="_blank"
              aria-label="View Snapchat Profile"
            >
              <motion.div
                initial="initial"
                animate="animate"
                className="text-[16px] sm:text-[20px] md:text-[16px] lg:text-[28px] text-[#e4ded7] hover:text-[#ffffff] transition-colors"
              >
                <FontAwesomeIcon icon={faSnapchat as IconProp} />
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
