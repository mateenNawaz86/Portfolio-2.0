import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Experience = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative overflow-hidden px-10 flex flex-col justify-evenly items-center max-w-full mx-auto md:flex-row scroll-smooth"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
    </motion.div>
  );
};

export default Experience;
