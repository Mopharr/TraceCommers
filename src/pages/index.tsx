import Head from "next/head";
import Image from "next/image";
import { Inter, Oooh_Baby } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Nav from "@/components/Nav";
import { MdArrowRightAlt } from "react-icons/md";
import { BsPatchCheck } from "react-icons/bs";
import { GrDeliver } from "react-icons/gr";
import { RiCustomerService2Line } from "react-icons/ri";
import Link from "next/link";
import Loading from "@/components/loading";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home({
  currentModal,
  setName,
  handleActive,
  navActive,
}: any) {
  return (
    <>
      <Head>
        <title>Ecommers</title>
        <meta name="description" content="Ecommers" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Loading />
        <Nav
          setName={setName}
          currentModal={currentModal}
          handleActive={handleActive}
          navActive={navActive}
        />
        <header className={styles.header}>
          <div className={styles.text}>
            <h2>Random Furniture For Your Home {":)"} </h2>
            <p>
              The best platform to get the best equipment for the best homes.
              You would love to check us out.
            </p>
            <button className={styles.but1}>Get Started</button>
            <button className={styles.but2}>
              See Collections <MdArrowRightAlt />
            </button>
          </div>
          <div className={styles.headImage}>
            <div className={styles.small}>
              <img src="12.png" alt="chair" />
            </div>
            <div className={styles.big}>
              <img src="13.png" alt="chair" />
            </div>
          </div>
        </header>
        <section className={styles.service}>
          <div className={styles.secCon}>
            <BsPatchCheck /> <span>Quality Material</span>
          </div>
          <div className={styles.secCon}>
            <GrDeliver /> <span>Free Delivery</span>
          </div>
          <div className={styles.secCon}>
            <RiCustomerService2Line /> <span>24/7 Customer Support</span>
          </div>
        </section>

        <section className={styles.about}>
          <h2>What We Do</h2>
          <p>
            Random Platform is literally the best place to get your home, office
            and other places furniture. Furniture includes objects such as
            tables, chairs, beds, desks, dressers, and cupboards. These objects
            are usually kept in a house or other building to make it suitable or
            comfortable for living or working in
          </p>
          <button>Buy Now</button>
        </section>
        <section className={styles.feature}>
          <h2>Featured Collections</h2>
          <div className={styles.collec}>
            <div className={styles.colImg}>
              <img src="11.png" alt="" />
            </div>
            <div className={styles.colImg}>
              <img src="10.png" alt="" />
            </div>
            <div className={styles.colImg}>
              <img src="9.png" alt="" />
            </div>
            <div className={styles.colImg}>
              <img src="8.png" alt="" />
            </div>
          </div>
          <button>View All</button>
        </section>

        <section className={styles.latest}>
          <h2>Latest Products</h2>

          <div className={styles.lastCol}>
            <div className={styles.last}>
              <div className={styles.lsImg}>
                <img src="7.png" alt="" />
              </div>
              <div className={styles.laText}>
                <p>KOTAN HIGH WOOD</p> <span>$50</span>
              </div>
            </div>
            <div className={styles.last}>
              <div className={styles.lsImg}>
                <img src="6.png" alt="" />
              </div>
              <div className={styles.laText}>
                <p>NYLA TABLE</p> <span>$50</span>
              </div>
            </div>
            <div className={styles.last}>
              <div className={styles.lsImg}>
                <img src="9.png" alt="" />
              </div>
              <div className={styles.laText}>
                <p>ANNIBALE COLLOMBO</p> <span>$50</span>
              </div>
            </div>
            <div className={styles.last}>
              <div className={styles.lsImg}>
                <img src="p1.png" alt="" />
              </div>
              <div className={styles.laText}>
                <p>DUAL SET UNIT</p> <span>$50</span>
              </div>
            </div>
            <div className={styles.last}>
              <div className={styles.lsImg}>
                <img src="6.png" alt="" />
              </div>
              <div className={styles.laText}>
                <p>CANE-LINE CHAIR</p> <span>$50</span>
              </div>
            </div>
            <div className={styles.last}>
              <div className={styles.lsImg}>
                <img src="9.png" alt="" />
              </div>
              <div className={styles.laText}>
                <p>OFFICE SET</p> <span>$50</span>
              </div>
            </div>
          </div>

          <button>View All</button>
        </section>

        <section className={styles.confort}>
          <div className={styles.conText}>
            <h3>
              <span>COMFORTABLE</span> CHAIR
            </h3>
            <p>
              This chair is a new arrival for office, banks, and schools usages.
            </p>
            <button>View Now</button>
          </div>
          <img src="4.png" alt="" />
        </section>
        <section className={styles.pay}>
          <h2>Convenient Payment Methods</h2>
          <div className={styles.payImage}>
            <img src="02.png" alt="" />
            <img src="03.png" alt="" />
            <img src="01.png" alt="" />
          </div>
        </section>
        <section className={styles.ceo}>
          <img src="14.png" alt="" />

          <div className={styles.ceoText}>
            <h3>CEO, IPC.</h3>
            <p>
              Random has been the best so far for me and my family at home, and
              at office too, Random has given our the best of the best products
              we’ve ever used. I recommend Random
            </p>
            <span>Julie Abaga</span>
          </div>
        </section>

        <section className={styles.image}>
          <img src="/pi4.png" alt="chair" />
          <img src="/pi3.png" alt="chair" />
          <img src="/pi5.png" alt="chair" />
          <img src="/pi1.png" alt="chair" />
          <img src="/pi2.png" alt="chair" />
        </section>
        <Footer />
      </main>
    </>
  );
}
