import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

const Header = (props: Props) => {
  return (
    <>
      <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto xl:items-center">
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.3,
          }}
          className="flex flex-row items-center"
        >
          {/* Social Links */}
          <SocialIcon
            url="https://www.github.com/mateenNawaz86"
            bgColor="transparent"
            fgColor="gray"
          />
          <SocialIcon
            url="https://www.facebook.com/profile.php?id=100088208440102"
            bgColor="transparent"
            fgColor="gray"
          />
          <SocialIcon
            url="https://www.instagram.com/mateen_merani/"
            bgColor="transparent"
            fgColor="gray"
          />
        </motion.div>
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="flex flex-row items-center text-gray-300 cursor-pointer"
        >
          <SocialIcon
            className="cursor-pointer"
            network="email"
            url="https://www.facebook.com/profile.php?id=100088208440102"
            bgColor="transparent"
            fgColor="gray"
          />

          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            get in touch
          </p>
        </motion.div>
      </header>
    </>
  );
};

export default Header;
