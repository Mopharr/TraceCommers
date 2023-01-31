import Nav from "@/components/Nav";
import ShopSidebar from "@/components/ShopSideBar";
import React, { use, useState } from "react";
import styles from "../styles/shop.module.css";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import products from "../utilities/products.json";
import ProductDetails from "@/components/productDetails";

const Shop = ({setName, currentModal, handleActive, navActive}:any) => {
  const [productDatails, setProductDetails] = useState();
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = (item: any) => {
    setProductDetails(item);
    setShowDetails(true);
  };

  return (
    <div className={styles.shop}>
      <Nav
        setName={setName}
        currentModal={currentModal}
        handleActive={handleActive}
        navActive={navActive}
      />

      <div className={styles.top}>
        <div className={styles.text}>
          <h3>Products</h3>
          <p>
            Take a travel through this page to check out what we have in stock
            for you.
          </p>
        </div>
        <select>
          <option value="">Sort By</option>
          <option value="">Neraest to user services</option>
          <option value="">Lowest to highest prices</option>
          <option value="">Free delivery of products</option>
          <option value="">Rating</option>
          <option value="">Discount</option>
        </select>
      </div>
      <div className={styles.line}></div>

      <div className={styles.bottom}>
        <ShopSidebar />

        <div className={styles.bottomCap}>
          <div className={styles.capText}>
            <h3>New Arrivals</h3>
            <p>
              Get new products from us as they are still new and quite unique{" "}
            </p>
          </div>

          <div className={styles.product}>
            <div className={styles.productTop}>
              <h2>Seats</h2>

              <div className={styles.navigations}>
                <FiArrowLeftCircle />
                <FiArrowRightCircle />
              </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.proData}>
              {products.map((item) => {
                return (
                  <div
                    key={item?.id}
                    onClick={() => handleClick(item)}
                    className={styles.data}
                  >
                    <img src={item.image} alt="" />
                    <p>{item.name}</p>
                    <span>{item.price}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {showDetails ? (
        <ProductDetails
          setShowDetails={setShowDetails}
          productDatails={productDatails}
        />
      ) : null}
    </div>
  );
};

export default Shop;
