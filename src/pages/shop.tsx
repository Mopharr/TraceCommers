import Nav from "@/components/Nav";
import ShopSidebar from "@/components/ShopSideBar";
import React, { use, useState } from "react";
import styles from "../styles/shop.module.css";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import products from "../utilities/products.json";
import ProductDetails from "@/components/productDetails";
import { BsFillCartCheckFill, BsHeart } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

const Shop = ({
  setName,
  currentModal,
  handleActive,
  navActive,
  handleClick,
}: any) => {
  const [available, setAvailable] = useState(true);

  const handleAvailability = () => {
    setAvailable(prec => !prec)
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
          <span>Home / Shop</span>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.bottomCap}>
          <div className={styles.catSetion}>
            <div className={styles.catigo}>
              <h3>Categories</h3>
              <ul>
                <li>
                  <p>Soft Chair</p> <AiOutlinePlus />
                </li>
                <li>
                  <p>Stool</p> <AiOutlinePlus />
                </li>
                <li>
                  <p>Office Chair</p> <AiOutlinePlus />
                </li>
                <li>
                  <p>Set Chair</p> <AiOutlinePlus />
                </li>
              </ul>
            </div>
            <div className={styles.catigo}>
              <h3>Available</h3>
              <ul className={styles.catRadio}>
                <li onClick={handleAvailability}>
                  {" "}
                  <div
                    className={`${available ? styles.activeC : styles.click}`}
                  ></div>{" "}
                  In Stock {"(7)"}
                </li>
                <li>Out of Stock</li>
              </ul>
              <div className={styles.carBtn}>
                <button>Clear</button>
                <button>Apply</button>
              </div>
            </div>
            <div className={styles.catigo}>
              <h3>Price</h3>
              <p className={styles.catP}>The highest price $70</p>
              <div className={styles.catInput}>
                <span>From $</span>
                <input type="number" />
              </div>
              <div className={styles.catInput}>
                <span>To $</span>
                <input type="number" />
              </div>
              <div className={styles.carBtn}>
                <button>Clear</button>
                <button>Apply</button>
              </div>
            </div>

            <button className={styles.bttn}>Clear All</button>
          </div>
          <div className={styles.product}>
            <div className={styles.proData}>
              {products.map((item) => {
                return (
                  <div key={item?.id} className={styles.data}>
                    <img src={item.image} alt="chair" />
                    <p>{item.name}</p>
                    <span>{item.price}</span>
                    <div className={styles.overlay}>
                      <div className={styles.layIcon}>
                        <div className={styles.layIconn}>
                          <BsFillCartCheckFill />
                        </div>
                        <div className={styles.layIconn}>
                          <BsHeart />
                        </div>
                      </div>
                      <button onClick={() => handleClick(item)}>
                        Shop Now
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* {showDetails ? (
        <ProductDetails
          setShowDetails={setShowDetails}
          productDatails={productDatails}
        />
      ) : null} */}
    </div>
  );
};

export default Shop;
