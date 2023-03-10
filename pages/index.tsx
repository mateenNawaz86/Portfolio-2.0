import { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";

const Home: NextPage = () => {
  return (
    <div className="bg-gray-700 text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Mateen's Portfolio</title>
      </Head> 
      {/* Header */}
      <Header />
      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* About Me */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
        <Experience />
      </section>

      {/* Projects */}

      {/* Contact */}
    </div>
  );
};

export default Home;
