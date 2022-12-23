import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Mateen's Portfolio</title>
      </Head>
      <h1>Let's build a portfolio website</h1>
    </>
  );
}
