import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects?.map((item, index) => (
          <div
            className="h-screen w-screen flex-shrink-0 snap-cente flex flex-col space-y-5 items-center justify-center p-20 md:p-44"
            key={index}
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              // className="w-32 h-32 md:w-64 md:h-64 xl:w-[500px] xl:h-[500px] object-cover object-center"
              src="https://cdn.discordapp.com/attachments/1121956460987788358/115586648205203051`4/Logo.png"
              alt=""
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {index + 1} of {projects?.length}:
                </span>
                Buero-365
              </h4>

              <p className="text-lg text-center md:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                temporibus qui fugit perferendis dolorum molestias alias iusto
                fugiat neque error, quae amet quibusdam maxime est similique
                dicta sit reprehenderit. Saepe adipisci blanditiis iusto aliquid
                illum ipsa dolorum, consequuntur quaerat repellat dignissimos
                magnam laboriosam autem odit rem? Rem laboriosam eaque aperiam.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12 opacity-50"></div>
    </motion.div>
  );
}

export default Projects;
