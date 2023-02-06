import React from "react";
import styles from "../styles/shop.module.css";
import { FaTimes } from "react-icons/fa";
import Link from "next/link";
import Nav from "@/components/Nav";

const productDetails = ({ productDatails, setShowDetails }: any) => {
  const handleClose = () => {
    setShowDetails(false);
  };
  return (
     <div className={styles.details}>
<Nav />

        <div className={styles.detailsCap}>
          <div className={styles.image}>
            <img src={productDatails?.image} alt="chair" />
          </div>
          <div className={styles.detailsText}>
            <h1>{productDatails?.fullName}</h1>
            <div className={styles.type}>
              <div className={styles.quantity}>
                <span>Quantity:</span>
                <select>
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                  <option value="">5</option>
                  <option value="">6</option>
                </select>
              </div>
            </div>
            <p>{productDatails?.subCon}</p>
            <div className={styles.price}>
              <span>{productDatails?.price}</span>
              <Link href="/cart">
                <button>Add to Cart</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
 );
};

export default productDetails;
