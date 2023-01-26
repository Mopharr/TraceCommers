import Head from "next/head";
import Image from "next/image";
import { Inter, Oooh_Baby } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Nav from "@/components/Nav";
import { BsFillPlayFill } from "react-icons/bs";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Ecommers</title>
        <meta name="description" content="Ecommers" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Nav />
        <section className={styles.header}>
          <div className={styles.headCap}>
            <div className={styles.content}>
              <h2>Your Best Home Interiors </h2>
              <p>
                The best platform to get the best equipment for the best homes.
                You would love to check us out.
              </p>

              <div className={styles.play}>
                <BsFillPlayFill className={styles.playIcon} />
                <img src="/pi7.png" alt="" />
              </div>
            </div>

            <div className={styles.btn}>
              <Link href="/signup">
                <button className={styles.create}>Create Accout</button>
              </Link>
              <Link href="/signin">
                <button className={styles.login}>Login</button>
              </Link>
            </div>
          </div>
        </section>
        <section className={styles.image}>
          <img src="/pi4.png" alt="" />
          <img src="/pi3.png" alt="" />
          <img src="/pi5.png" alt="" />
          <img src="/pi1.png" alt="" />
          <img src="/pi2.png" alt="" />
        </section>
      </main>
    </>
  );
}
