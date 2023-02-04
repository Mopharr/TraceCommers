import Link from "next/link";
import React from "react";
import styles from "../styles/Home.module.css";

const NavModal = ({ setName, navActive }: any) => {
  const arr = [
    {
      id: "1",
      name: "Shop",
      link: "/shop",
    },
    {
      id: "2",
      name: "Sell Center",
      link: "/sellcenter",
    },
    {
      id: "3",
      name: "Buyer",
      link: "/shop",
    },
  ];

  return (
    <ul className={styles.navv}>
      {arr.map((nav, index) => {
        return (
          <li
            id="1"
            // onClick={handleActive}
            className={`${navActive === "1" ? styles.active : null}`}
            key={index}
            onClick={() => setName(nav.name)}
          >
            <Link href={`${nav.link}`}>{nav?.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavModal;
