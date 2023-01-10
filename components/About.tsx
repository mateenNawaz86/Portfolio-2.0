import React from "react";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative px-10 flex flex-col justify-evenly text-center items-center max-w-7xl mx-auto md:flex-row md:text-left"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
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
        className="-mb-20 md:mb-0 my-8 xl:my-0 xl:mt-52 flex-shrink-0 w-44 h-44 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px] shadow-lg"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-xl md:2xl lg:4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          Background
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
