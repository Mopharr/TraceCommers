import Nav from "@/components/Nav";
import React, { useState } from "react";
import styles from "../styles/center.module.css";
import PhoneInput from "react-phone-number-input";
import Link from "next/link";

const Business = () => {
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
        <h3>Business Information</h3>
        <p>
          Fill in all the below spaces, so as to get your seller account
          available to customers.
        </p>

        <form className={styles.form}>
          <div>
            <input
              className={styles.input}
              type="text"
              placeholder="Business Owner or Legal Representative’s ID"
            />
            <input
              className={styles.inputFile}
              type="file"
              placeholder="Upload a copy of the ID "
            />
            <select name="" id="" className={styles.select}>
              <option value="">Number of Business Employees</option>
              <option value="">N/A</option>
              <option value="">1-20</option>
              <option value="">20-50</option>
              <option value="">50-100</option>
              <option value="">Above 100</option>
            </select>
            <input
              className={styles.inputFile}
              type="file"
              placeholder="Upload a copy of the ID "
            />
          </div>

          <div>
            <select name="" id="" className={styles.select}>
              <option value="">Legal Entity Country</option>
              <option value="">China</option>
              <option value="">Angola</option>
              <option value="">Russia</option>
              <option value="">Algeria</option>
            </select>
            <select name="" id="" className={styles.select}>
              <option value="">Country Shipping From:</option>
              <option value="">China</option>
              <option value="">Angola</option>
              <option value="">Russia</option>
              <option value="">Algeria</option>
            </select>

            <input
              className={styles.input}
              type="text"
              placeholder="Business Owner or Legal Representative’s Fullname"
            />

            <button type="submit">
              <Link href="/manage">Continue</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Business;
