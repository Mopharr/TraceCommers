import Nav from "@/components/Nav";
import React, { useState } from "react";
import styles from "../styles/center.module.css";
import PhoneInput from "react-phone-number-input";
import Link from "next/link";

const Sellcenter = () => {
  const [time, setTime] = useState();

  return (
    <div className={styles.center}>
      <Nav />

      <div className={styles.top}>
        <div className={styles.text}>
          <h3>Seller Center</h3>
          <p>Fill the below spaces to register as a seller</p>
        </div>
        <select>
          <option value="">Register</option>
          <option value="">Login</option>
        </select>
      </div>
      <div className={styles.line}></div>

      <div className={styles.bottom}>
        <h3>Seller Account Infomation</h3>
        <p>
          Fill in all the below spaces, so as to get your seller account
          available to customers.
        </p>

        <form className={styles.form}>
          <div>
            <input
              className={styles.input}
              type="text"
              placeholder="Selles's Id"
            />
            <input
              className={styles.input}
              type="text"
              placeholder="Shop Name"
            />
            <input className={styles.input} type="email" placeholder="Email" />
            <input
              className={styles.input}
              type="password"
              placeholder="Password"
            />
            <input
              className={styles.input}
              type="password"
              placeholder="Confirm Password"
            />
          </div>

          <div>
            <input
              className={styles.input}
              type="text"
              placeholder="Contact Address"
            />
            <input
              className={styles.input}
              type="text"
              placeholder="Postal/Zip Code"
            />
            <select className={styles.select} name="" id="">
              Select Business Type
              <option value="">Individual</option>
              <option value="">Company</option>
            </select>
            <input
              className={styles.input}
              type="text"
              placeholder="Account Manager Name"
            />
            {/* <PhoneInput
              placeholder="Enter phone number"
              international
              defaultCountry="NG"
              value={time}
              // onChange={setTime}
            />
            <PhoneInput
              placeholder="Enter phone number"
              international
              defaultCountry="NG"
              value={time}

              // onChange={setTime}
            /> */}
            <button type="submit">
              <Link href="/business">Continue</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sellcenter;
