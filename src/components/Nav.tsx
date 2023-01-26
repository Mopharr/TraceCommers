import Link from "next/link";
import React from "react";
import styles from "../styles/Home.module.css";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

const Nav = () => {
  return (
    <>
      <div className={styles.nav}>
        <Link href="/">
          <img src="/pi6.png" alt="" />
        </Link>

        <div className={styles.mid}>
          <ul className={styles.navList}>
            <li className={styles.active}>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Shop</Link>
            </li>
            <li>
              <Link href="/">Blog</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
          </ul>

          <select name="" id="">
            <option value="english">Eng</option>
            <option value="yoruba">Yoruba</option>
            <option value="hausa">Hausa</option>
          </select>
        </div>
        <div className={styles.cart}>
          <AiOutlineSearch className={styles.cartIcon} />
          <AiOutlineShoppingCart className={styles.cartIcon} />
          <Link href="/profile">
            <CgProfile className={styles.cartIcon} />
          </Link>
        </div>
      </div>

      <div className={styles.line}></div>
    </>
  );
};

export default Nav;
