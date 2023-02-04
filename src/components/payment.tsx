import React from "react";
import styles from "../styles/cart.module.css";
import {FaTimes } from 'react-icons/fa'

const payment = ({ setShowDetails, setCompleteOrder }: any) => {
  const handleClose = () => {
    setShowDetails(false);
  };

  const complete = () => {
        setShowDetails(false);
    setCompleteOrder(true)
  }
  return (
    <div className={styles.outline}>
      <div className={styles.payment}>
        <FaTimes className={styles.cancel} onClick={handleClose} />

        <h2>CheckOut</h2>
        <p>
          This space is mainly for making payments of the products you are
          interested in buying
        </p>

        <div className={styles.cards}>
          <h4>Card Type</h4>
          <div className={styles.card}>
            <div className={styles.cardCon}>
              <img src="/1.png" alt="chair" />
            </div>
            <div className={styles.cardCon}>
              <img src="/2.png" alt="chair" />
            </div>
            <div className={styles.cardCon}>
              <img src="/3.png" alt="chair" />
            </div>
          </div>
        </div>

        <div className={styles.input}>
          <label>Name On Card</label>
          <input type="text" />
        </div>
        <div className={styles.input}>
          <label>Card Number</label>
          <input type="tel" />
        </div>
        <div className={styles.inputCSV}>
          <div>
            <label>Expiry Date</label>
            <input type="text" />
          </div>
          <div>
            <label>CSV</label>
            <input type="text" />
          </div>
        </div>

        <div className={styles.pricing}>
          <div className={styles.total}>
            <p>Sub-Total</p>
            <span>$80</span>
          </div>
          <div className={styles.total}>
            <p>Shipping- Fee</p>
            <span>$10</span>
          </div>
          <div className={styles.totalPrice}>
            <p>Total</p>
            <span>$90</span>
          </div>
        </div>
        <button onClick={complete}>
          <h5>$59</h5>
          <span>Pay</span>
        </button>
      </div>
    </div>
  );
};

export default payment;
