import { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";

const Home: NextPage = () => {
  return (
    <div className="bg-gray-700 text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Mateen Portfolio</title>
      </Head>
      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <Experience />
      </section>
      <section id="experience" className="snap-center">
        <Skills />
      </section>
      <section id="experience" className="snap-center">
        <Projects />
      </section>
      <section id="contactMe" className="snap-center">
        <ContactMe />
      </section>
    </div>
  );
};

export default Home;
