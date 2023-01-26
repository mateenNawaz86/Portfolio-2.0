import React from "react";
import { motion } from "framer-motion";

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 snap-center bg-[#292929] p-10 opacity-40 overflow-hidden translate-opacity duration-200 hover:opacity-100 w-[500px] md:w-[600px] xl:w-[900px] ">
      <motion.img
        initial={{
          y: -100, // start from -100 vertically
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src="https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="user profile"
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
      />

      {/* Div for Title */}
      <div className="px-0 md:px-6">
        <h4 className="text-3xl font-light">TOP Rated Freelancer</h4>
        <p className="text-2xl font-bold my-2">Upwork & Fiverr</p>
      </div>
      <div className="flex space-x-2 my-2">
        {/* Technologies */}
        <img
          className="w-10 h-10 rounded-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKJvYLW24RF1NgXnYkIQQ0qp-thIF7x3jSOMgweDJCZw&s"
          alt="react logo"
        />

        <img
          className="w-10 h-10 rounded-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj22qWrWtoGLa5q0YYMGZqdEjNgYeVHJmvbg&usqp=CAU"
          alt="Firebase logo"
        />

        <img
          className="w-10 h-10 rounded-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzWluEqoLbmru1YmeDwMX1OXuahON5P5d9zw&usqp=CAU"
          alt="JavaScript"
        />
        <img
          className="w-10 h-10 rounded-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0SnCy6C6YtxCcA9jVWMJ9torRi6aZruEl6A&usqp=CAU"
          alt="MongoDB"
        />
      </div>
      <p className="uppercase py-2 text-gray-300">
        Started Work from 2022 - Present
      </p>
      <ul className="list-disc space-y-2 ml-5 text-lg">
        <li>Responsive design</li>
        <li>for all devices Cross-browser compatibility</li>
        <li>Optimization for speed and SEO</li>
        <li>Integration with popular CMS platforms</li>
      </ul>
    </article>
  );
};

export default ExperienceCard;
