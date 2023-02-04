import Link from "next/link";
import React from "react";
import styles from "../styles/center.module.css";

const SellModal = ({ setModalName, navActive }: any) => {
  const arr = [
    {
      name: "Register",
      link: "/sellcenter",
    },
    {
      name: "Manage",
      link: "/manage",
    },
  ];

  return (
    <ul className={styles.navv}>
      <h3>Sell Center</h3>
      {arr.map((nav, index) => {
        return (
          <li
            id="1"
            // onClick={handleActive}
            className={`${navActive === "1" ? styles.active : null}`}
            key={index}
            onClick={() => setModalName(nav.name)}
          >
            <Link href={`${nav.link}`}>{nav?.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SellModal;
