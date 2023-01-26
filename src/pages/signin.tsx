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
          <h3>Log In</h3>
          <p>
            Don’t have an account?
            <Link href="/signin">Create One</Link>
          </p>
          <form className={styles.input}>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />

            <button>Login</button>
          </form>
          <p>Or Continue with:</p>

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
