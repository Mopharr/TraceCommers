import Nav from "@/components/Nav";
import React, { useState } from "react";
import styles from "../styles/center.module.css";
import PhoneInput from "react-phone-number-input";
import Link from "next/link";

const Additional = ({ nextStep }: any) => {
  const [time, setTime] = useState();


  const handleSub = () => {
    
    nextStep()
  }



  return (
    <div className={styles.center}>
      <div className={styles.bottom}>
        <h3>Additional Infomation</h3>
        <p>
          Fill in all the below spaces, so as to get your seller account
          available to customers.
        </p>

        <form  className={styles.form}>
          <div>
            <input
              className={styles.input}
              type="text"
              placeholder="Referred By (email of referrer)"
            />
            <input
              className={styles.input}
              type="text"
              placeholder="Do you have a shop or several on Random?"
            />
            <input
              className={styles.input}
              type="text"
              placeholder="If yes, what’s the name of the shop(s)?"
            />
            <button type="submit" >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Additional;
