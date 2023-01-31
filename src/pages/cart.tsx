import Nav from "@/components/Nav";
import React from "react";
import styles from "../styles/cart.module.css";
import order from "../utilities/order.json";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Payment from "@/components/payment";
import { useState } from "react";
import Link from "next/link";
import OrderSuccess from "@/components/orderSuccess";

const Cart = ({setName, currentModal} : any) => {
  const [showDetails, setShowDetails] = useState(false);
  const [completeOrder, setCompleteOrder] = useState(false);


  const handleClick = (item: any) => {
    setShowDetails(true);
  };
  return (
    <div className={styles.cart}>
      <Nav setName={setName} currentModal={currentModal} />

      <div className={styles.top}>
        <div className={styles.text}>
          <h3>Cart</h3>
          <p>
            This space is for viewing and modifying the products on their way to
            checkout
          </p>
        </div>
      </div>
      <div className={styles.line}></div>

      <div className={styles.bottom}>
        <div className={styles.text}>
          <h3>New List</h3>
          <p>
            Here are the new list you added to your cart, you should checkout
            next
          </p>
        </div>

        <div className={styles.order}>
          <div className={styles.orderTop}>
            <h3>Order</h3>

            <button>Remove</button>
          </div>
          <div className={styles.tableDiv}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>
                    <input type="checkbox" name="" id="" />
                  </th>
                  <th>Details</th>
                  <th>Color</th>
                  <th>Quntity</th>
                  <th>Price</th>
                  <th>Delivery Date</th>
                </tr>
              </thead>

              <tbody>
                {order.map((items) => {
                  return (
                    <tr key={items?.id}>
                      <td className={styles.nth}>
                        <input type="checkbox" name="" id="" />
                      </td>
                      <td>
                        <img src={items.image} alt="" /> <br />
                        <p>{items.name}</p>
                      </td>
                      <td>{items.color}</td>
                      <td>{items.quantity}</td>
                      <td>{items.price}</td>
                      <td>{items.delivery}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
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

          <div className={styles.conBtn}>
            <Link href="/shop" className={styles.back}>
              <HiOutlineArrowLeft /> Continue Shoping
            </Link>

            <button onClick={handleClick}>Proceed to Checkout</button>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.text}>
          <h3>History</h3>
          <p>Here are the orders you have made so far with us</p>
        </div>

        <div className={styles.order}>
          <div className={styles.orderTop}>
            <h3>Order</h3>

            <button>Remove</button>
          </div>
          <div className={styles.tableDiv}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Details</th>
                  <th>Color</th>
                  <th>Quntity</th>
                  <th>Price</th>
                  <th>Delivery Status</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                {order.map((items) => {
                  return (
                    <tr key={items?.id}>
                      <td>
                        <img src={items.image} alt="" /> <br />
                        <p>{items.name}</p>
                      </td>
                      <td>{items.color}</td>
                      <td>{items.quantity}</td>
                      <td>{items.price}</td>
                      <td className={styles.deli}>{items.status}</td>
                      <td>
                        <button>reveiw</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {showDetails ? (
        <Payment
          setCompleteOrder={setCompleteOrder}
          setShowDetails={setShowDetails}
        />
      ) : null}
      {completeOrder ? (
        <OrderSuccess setCompleteOrder={setCompleteOrder} />
      ) : null}
    </div>
  );
};

export default Cart;
