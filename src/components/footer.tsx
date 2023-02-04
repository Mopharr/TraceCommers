import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import {FaTiktok } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className={styles.foot}>
      <div className={styles.first}>
        <Link href="/">
          <img src="/logo.png" alt="chair" />
        </Link>
        <p>
          The best platform to get the best equipment for the best homes. You
          would love to check us out.
        </p>
      </div>
      <div className={styles.list}>
        <ul>
          <li>Shop</li>
          <li>Contact</li>
          <li><AiFillInstagram />< AiFillFacebook /> <FaTiktok /></li>
        </ul>
        <ul>
          <li>About</li>
          <li>Privacy Policy</li>
          <li>Terms & Condition</li>
        </ul>
      </div>
      <div className={styles.sub}>
        <p>SUBSCRIBE TO OUR NEWSLETTER</p>
        <input type="email" placeholder="Email address" />
      </div>
    </div>
  );
};

export default Footer;
