import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {};

const Experience = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative top-20 flex flex-col justify-evenly items-center overflow-hidden px-10 max-w-full mx-auto md:flex-row scroll-smooth"
    >
      <h3 className="absolute -top-2 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div className=" flex w-full p-10 space-x-5 snap-x snap-mandatory overflow-x-scroll">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
};

export default Experience;
