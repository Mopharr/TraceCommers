import React from "react";
import styles from "../styles/cart.module.css";
import { FaTimes } from "react-icons/fa";
import { AiOutlineCheck } from 'react-icons/ai'
import Link from "next/link";


const orderSuccess = ({ setCompleteOrder }: any) => {
     const handleClose = () => {
       setCompleteOrder(false);
     };

  return (
    <div className={styles.outline}>
      <div className={styles.success}>
        {/* <div className={styles.round}></div> */}
        <FaTimes className={styles.cancel} onClick={handleClose} />

        <div className={styles.successCap}>
          <div className={styles.icon}>
            <AiOutlineCheck className={styles.iconn} />
          </div>
          <h2>Success</h2>
          <p>You’ve successfully placed and paid for an order </p>

          <div className={styles.btns}>
            <button className={styles.btn2}>View Orders</button>
            <button className={styles.btn1}>
              <Link href="/shop">Done</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default orderSuccess;
