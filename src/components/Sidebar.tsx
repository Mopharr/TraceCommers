import React from "react";
import styles from "../styles/profile.module.css";
import { CgProfile } from "react-icons/cg";
import { AiOutlineBell } from "react-icons/ai";
import { GiPadlock } from "react-icons/gi";
import { BiHelpCircle } from "react-icons/bi";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sideCon}>
        <CgProfile className={styles.cartIcon} /> <span>Account</span>
      </div>
      <div className={styles.active}>
        <GiPadlock className={styles.cartIcon} /> <span>Password</span>
      </div>
      <div className={styles.sideCon}>
        <AiOutlineBell className={styles.cartIcon} /> <span>Notification</span>
      </div>
      <div className={styles.sideCon}>
        <BiHelpCircle className={styles.cartIcon} /> <span>Support</span>
      </div>
    </div>
  );
};

export default Sidebar;
