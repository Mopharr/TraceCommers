import React from "react";
import styles from "../styles/shop.module.css";
import { CgProfile } from "react-icons/cg";
import { AiOutlineBell } from "react-icons/ai";
import { GiPadlock } from "react-icons/gi";
import { BiHelpCircle } from "react-icons/bi";

const ShopSidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.active}>
        <CgProfile className={styles.cartIcon} /> <span>New Arrive</span>
      </div>
      <div className={styles.sideCon}>
        <GiPadlock className={styles.cartIcon} /> <span>Top Deals</span>
      </div>
      <div className={styles.sideCon}>
        <AiOutlineBell className={styles.cartIcon} /> <span>Brands</span>
      </div>
      <div className={styles.sideCon}>
        <BiHelpCircle className={styles.cartIcon} /> <span>Others</span>
      </div>
    </div>
  );
};

export default ShopSidebar;
