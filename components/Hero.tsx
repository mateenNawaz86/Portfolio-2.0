import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hey, The Name's Mateen Nawaz",
      "Guy who loves travel.tsx",
      "<ButLovesToCodeMore>",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col items-center justify-center space-y-8 text-center overflow-hidden">
      <BackgroundCircles />
      <img
        src="https://cdn.sanity.io/images/o7156ep0/production/f24fd9359e685001aba6c3379019ef6e6301a4f7-14736x16000.jpg"
        alt="DP"
        className="rounded-full h-32 w-32 relative object-cover mx-auto"
      />
      <div className="z-20">
        <h2 className="uppercase text-sm tracking-[8px] pb-2 text-gray-400">
          Fullstack Developer
        </h2>
        <h1 className="text-xl md:3xl lg:5xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
