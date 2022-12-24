import { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <div className="bg-gray-700 text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Mateen's Portfolio</title>
      </Head>
      {/* Header */}
      <Header />
      {/* Hero */}
      <section id="hero" className="snap-center">
        <Hero />
      </section>

      {/* About Me */}

      {/* Experience */}

      {/* Projects */}

      {/* Contact */}
    </div>
  );
};

export default Home;
