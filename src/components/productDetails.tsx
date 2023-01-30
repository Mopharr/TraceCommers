import React from "react";
import styles from "../styles/shop.module.css";
import { FaTimes} from 'react-icons/fa'
import Link from "next/link";

const productDetails = ({ productDatails, setShowDetails }: any) => {
  const handleClose = () => {
    setShowDetails(false);
  };
  return (
    <div className={styles.details}>
      <FaTimes className={styles.cancel} onClick={handleClose} />
      <h2>Seats</h2>

      <div className={styles.detailsCap}>
        <div className={styles.image}>
          <img src={productDatails?.image} alt="" />
          <div className={styles.carousel}>
            <img src={productDatails?.image} alt="" />
            <img src={productDatails?.image} alt="" />
            <img src={productDatails?.image} alt="" />
          </div>
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
