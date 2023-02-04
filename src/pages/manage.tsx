import Nav from "@/components/Nav";
import React, { useState } from "react";
import styles from "../styles/center.module.css";
import Link from "next/link";
import order from "../utilities/order.json";
import SellModal from "@/components/sellModal";

const Manage = ({
  setModalName,
  setName,
  currentModal,
  currentSellModal,
}: any) => {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal((prev) => !prev);
  };
  return (
    <div className={styles.center}>
      <Nav setName={setName} currentModal={currentModal} />

      <div className={styles.top}>
        <div className={styles.text}>
          <h3>Seller Center</h3>
          <p>Fill the below spaces to register as a seller</p>
        </div>
        <div className={styles.modalList}>
          <p onClick={handleModal}>
            <Link href="">{currentSellModal}</Link>
          </p>
          {modal ? <SellModal setModalName={setModalName} /> : null}
        </div>
      </div>
      <div className={styles.line}></div>

      <div className={styles.bottom}>
        <div className={styles.btCap}>
          <div className={styles.text}>
            <h3>Manage Stock</h3>
            <p>
              This space is for viewing and managing the goods in your
              business..
            </p>
          </div>
          <div className={styles.btns}>
            <button className={styles.btn2}>
              <Link href="/update">Update Stock</Link>
            </button>
            <button className={styles.btn1}>View Product</button>
          </div>
        </div>

        {/* <div className={styles.chart}>
            <img src="/Sa.png" alt="chair" />
        </div> */}

        <div className={styles.order}>
          <div className={styles.orderTop}>
            <h3>Order</h3>

            <button>View All</button>
          </div>
          <div className={styles.tableDiv}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Order Id</th>
                  <th>Date</th>
                  <th>Customer</th>
                  <th>Goods</th>
                  <th>Count(s)</th>
                  <th>Destination</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {order.map((items) => {
                  return (
                    <tr key={items?.id}>
                      <td>{items.order_id}</td>
                      <td>{items.delivery}</td>
                      <td>{items.customer}</td>
                      <td>{items.goods}</td>
                      <td>{items.count}</td>
                      <td>{items.destination}</td>
                      <td className={styles.deli}>{items.status}</td>
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

export default Manage;
