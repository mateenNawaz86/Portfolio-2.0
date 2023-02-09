import React from "react";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col justify-evenly items-center relative h-screen max-w-7xl mx-auto text-center px-10 md:text-left md:flex-row "
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{ once: true }}
        src="https://cdn.sanity.io/images/o7156ep0/production/db2c231169c9f641b659fe1d220d7cb694fc48f6-3024x4032.jpg"
        className="-mb-20 md:mb-0 flex-shrink-0 w-44 h-44 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[300px] xl:h-[400px]"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-xl text-[#F7AB0A] tracking-widest md:2xl lg:4xl font-semibold">
          About Me
        </h4>
        <p className="text-base">
          Energetic, results-driven individual with proven web development
          skills using the latest technologies. Detail-oriented professional
          with a highly learning attitude, strong leadership,
          relationship-building skills and ability to perform well in Team while
          fully utilizing skills to achieve goals with making significant change
          to the success of company.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
