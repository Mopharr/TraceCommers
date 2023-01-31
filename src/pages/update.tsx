import Nav from "@/components/Nav";
import React, { useState } from "react";
import styles from "../styles/center.module.css";
import Link from "next/link";
import order from "../utilities/order.json";
import { BsPencil } from "react-icons/bs";
import { ImBin } from "react-icons/im";

const Update = ({ setName, currentModal }: any) => {
  return (
    <div className={styles.center}>
      <Nav setName={setName} currentModal={currentModal} />

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
        <div className={styles.btCap}>
          <div className={styles.text}>
            <h3>Update Stock</h3>
            <p>
              This space is for viewing and managing the goods in your
              business..
            </p>
          </div>
          <div className={styles.btns}>
            <button className={styles.btn1}>
              <Link href="/shop">Done</Link>
            </button>
          </div>
        </div>

        <div className={styles.order}>
          <div className={styles.orderTop}>
            <h3>Order</h3>

            <button>View All</button>
          </div>
          <div className={styles.tableDiv}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Categories</th>
                  <th>Color</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Count</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                {order.map((items) => {
                  return (
                    <tr key={items?.id}>
                      <td>{items.name}</td>
                      <td>{items.category}</td>
                      <td>{items.color}</td>
                      <td>{items.price}</td>
                      <td>{items.avalability}</td>
                      <td>{items.count}</td>
                      <td className={styles.del}>
                        <BsPencil />
                        <ImBin />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
