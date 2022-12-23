import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Mateen's Portfolio</title>
      </Head>
      {/* Header */}
      <Header />
      {/* Hero */}

      {/* About Me */}

      {/* Experience */}

      {/* Projects */}

      {/* Contact */}
    </>
  );
}
