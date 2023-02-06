import Link from "next/link";
import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";
import NavModal from "./NavModal";

const Nav = ({ setName, currentModal, navActive, handleActive }: any) => {
  const [tog, setTog] = useState(false);
  const [modal, setModal] = useState(false);

  const handleTog = () => {
    setTog((prev) => !prev);
  };

  const handleModal = () => {
    setModal((prev) => !prev);
  };

  return (
    <>
      <div className={styles.nav}>
          <Link href="/">
            <img src="/logo.png" alt="chair" />
          </Link>
        <div className={styles.mid}>
          <ul className={styles.navList}>
            <li
              id="1"
              onClick={handleActive}
              className={`${navActive === "1" ? styles.active : null}`}
            >
              <Link href="/">Home</Link>
            </li>
            <div className={styles.modalList}>
              <li onClick={handleModal}>
                <Link href="">{currentModal}</Link>
              </li>
              {modal ? (
                <NavModal
                  handleActive={handleActive}
                  navActive={navActive}
                  setName={setName}
                />
              ) : null}
            </div>

            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className={styles.cart}>
          <AiOutlineSearch className={styles.cartIcon} />
          <Link href="/cart">
            <AiOutlineShoppingCart className={styles.cartIcon} />
          </Link>
          <Link href="/profile">
            <CgProfile className={styles.cartIcon} />
          </Link>
        </div>

        <RxHamburgerMenu className={styles.open} onClick={handleTog} />
      </div>

      {/* <div className={styles.line}></div> */}
    </>
  );
};

export default Nav;
