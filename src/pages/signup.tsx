import React from "react";
import styles from "../styles/register.module.css";
import Nav from "@/components/Nav";
import Link from "next/link";

const signup = () => {
  return (
    <div className={styles.sign}>
      <Nav />
      <div className={styles.signCap}>
        <img src="/pi.png" alt="" />

        <div className={styles.signInput}>
          <h3>Create Accout</h3>
          <p>
            Already have an existing account?
            <Link href="/signin">Log-In</Link>
          </p>
          <form className={styles.input}>
            <input type="text" placeholder="Fullname" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />

            <button>Create Account</button>
          </form>
          <p>Or Register with:</p>

          <div className={styles.img}>
            <img src="/pi8.png" alt="" />
            <img src="/pi9.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default signup;
