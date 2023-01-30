import Link from "next/link";
import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes} from 'react-icons/fa'
import { useRouter } from "next/router";

const Nav = () => {
  const [tog, setTog] = useState(false);
  let route = useRouter

  const handleTog = () => {
    setTog((prev) => !prev);
  };

  return (
    <>
      <div className={styles.nav}>
        <Link href="/">
          <img src="/logo.png" alt="" />
        </Link>

        <div className={`${tog ? styles.activeNav : styles.mid}`}>
          <FaTimes onClick={handleTog} className={styles.cancel} />
          <ul className={styles.navList}>
            <li className={styles.active}>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/shop">Shop</Link>
            </li>

            <li>
              <Link href="/sellcenter">Sell Center</Link>
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
          <div className={styles.mobilecart}>
            <AiOutlineSearch className={styles.mobilecartIcon} />
            <AiOutlineShoppingCart className={styles.mobilecartIcon} />
            <Link href="/profile">
              <CgProfile className={styles.mobilecartIcon} />
            </Link>
          </div>
        </div>
        <div className={styles.cart}>
          <AiOutlineSearch className={styles.cartIcon} />
          <AiOutlineShoppingCart className={styles.cartIcon} />
          <Link href="/profile">
            <CgProfile className={styles.cartIcon} />
          </Link>
        </div>

        <RxHamburgerMenu className={styles.open} onClick={handleTog} />
      </div>

      <div className={styles.line}></div>
    </>
  );
};

export default Nav;
